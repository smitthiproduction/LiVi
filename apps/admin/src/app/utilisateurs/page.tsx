/** Recherche par identifiant pseudonymisé, offre, appareils, sessions, demandes RGPD, accès assisté sur consentement.
 * Permission requise : `utilisateurs.lire` (vérifiée côté serveur). Toute écriture est journalisée dans l'audit. */
export default function Page() {
  return (
    <section>
      <h1 className="lv-display-title">Utilisateurs</h1>
      <p className="lv-body-secondary">Recherche par identifiant pseudonymisé, offre, appareils, sessions, demandes RGPD, accès assisté sur consentement.</p>
    </section>
  );
}
