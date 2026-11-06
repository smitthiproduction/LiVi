/** Maintenance et tests (BO-21, BO-22). Permission : `maintenance.piloter` pour la maintenance, `tests.lancer` pour les scénarios. */
export default function Page() {
  return (
    <section>
      <h1 className="lv-display-title">Maintenance et tests</h1>
      <h2 className="lv-title-2">Mode maintenance</h2>
      <p className="lv-body-secondary">Global ou par fonction, immédiat ou planifié, message affiché aux utilisateurs. Les comptes de test restent servis pour lancer les scénarios. Double validation pour une maintenance globale.</p>
      <h2 className="lv-title-2">Comptes de test</h2>
      <p className="lv-body-secondary">Comptes actifs par offre (Essentiel, Plus, Signature) avec jeux de données fictifs, réinitialisables.</p>
      <h2 className="lv-title-2">Tester la fonctionnalité</h2>
      <p className="lv-body-secondary">Choisir une fonctionnalité du catalogue, un compte de test, puis lancer son scénario d’usage. Résultat étape par étape, durée, version ; historique journalisé.</p>
    </section>
  );
}
