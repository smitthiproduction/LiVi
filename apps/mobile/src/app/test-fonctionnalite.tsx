import { Ecran } from '@/components/Ecran';

/**
 * « Tester la fonctionnalité » (BO-22) : visible uniquement pour un compte de test.
 * Liste les scénarios d'usage disponibles, les lance contre l'API et affiche le résultat ;
 * fonctionne pendant une maintenance (comptes de test sur liste blanche).
 */
export default function TestFonctionnalite() {
  return <Ecran titre="Tester une fonctionnalité" description="Compte de test uniquement. Chaque exécution est journalisée dans le back-office." />;
}
