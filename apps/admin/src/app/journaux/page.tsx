/** Journaux techniques filtrés par niveau, service, version, identifiant de corrélation.
 * Permission requise : `journaux.lire` (vérifiée côté serveur). Toute écriture est journalisée dans l'audit. */
export default function Page() {
  return (
    <section>
      <h1 className="lv-display-title">Journaux</h1>
      <p className="lv-body-secondary">Journaux techniques filtrés par niveau, service, version, identifiant de corrélation.</p>
    </section>
  );
}
