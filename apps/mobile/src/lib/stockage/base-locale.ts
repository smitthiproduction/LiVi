import * as SQLite from 'expo-sqlite';
import * as SecureStore from 'expo-secure-store';
import * as Crypto from 'expo-crypto';

/**
 * Base locale chiffrée (SQLCipher). La clé est générée sur l'appareil et rangée dans le trousseau ;
 * elle ne quitte jamais l'appareil. La sauvegarde cloud chiffre les données avec une clé dérivée
 * de la clé de récupération de l'utilisateur (voir docs/architecture/donnees-et-chiffrement.md).
 */
const CLE = 'livi.base.cle';

async function cleBase(): Promise<string> {
  let cle = await SecureStore.getItemAsync(CLE);
  if (!cle) {
    const octets = Crypto.getRandomBytes(32);
    cle = Array.from(octets, (b) => b.toString(16).padStart(2, '0')).join('');
    await SecureStore.setItemAsync(CLE, cle, { keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY });
  }
  return cle;
}

export async function ouvrirBase(): Promise<SQLite.SQLiteDatabase> {
  const db = await SQLite.openDatabaseAsync('livi.db');
  await db.execAsync(`PRAGMA key = "x'${await cleBase()}'";`);
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS comptes (id TEXT PRIMARY KEY, nom TEXT NOT NULL, classe TEXT NOT NULL, sous_classe TEXT, etablissement TEXT, devise TEXT NOT NULL DEFAULT 'EUR', source TEXT NOT NULL, maj_le TEXT);
    CREATE TABLE IF NOT EXISTS transactions (id TEXT PRIMARY KEY, compte_id TEXT NOT NULL, date TEXT NOT NULL, libelle TEXT NOT NULL, montant REAL NOT NULL, categorie TEXT, categorie_manuelle INTEGER DEFAULT 0, enseigne_id TEXT, etablissement_id TEXT, source TEXT NOT NULL, import_id TEXT);
    CREATE INDEX IF NOT EXISTS ix_tx_compte_date ON transactions(compte_id, date);
    CREATE TABLE IF NOT EXISTS positions (id TEXT PRIMARY KEY, compte_id TEXT NOT NULL, classe TEXT NOT NULL, sous_classe TEXT, isin TEXT, quantite REAL, pru REAL, champs TEXT);
    CREATE TABLE IF NOT EXISTS consignes (id TEXT PRIMARY KEY, texte TEXT NOT NULL, structure TEXT NOT NULL, active INTEGER DEFAULT 0, creee_le TEXT NOT NULL);
  `);
  return db;
}
