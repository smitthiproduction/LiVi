/** Consentements, demandes RGPD, ordres préparés et validés, affiliation.
 * Permission requise : `conformite.lire` (vérifiée côté serveur). Toute écriture est journalisée dans l'audit. */
export default function Page() {
  return (
    <section>
      <h1 className="lv-display-title">Conformité</h1>
      <p className="lv-body-secondary">Consentements, demandes RGPD, ordres préparés et validés, affiliation.</p>
    </section>
  );
}
