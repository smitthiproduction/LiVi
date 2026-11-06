/** Indicateurs clés, santé des services, incidents ouverts, maintenance en cours, derniers scénarios de test.
 * Permission requise : `tableau-de-bord.lire` (vérifiée côté serveur). Toute écriture est journalisée dans l'audit. */
export default function Page() {
  return (
    <section>
      <h1 className="lv-display-title">Tableau de bord</h1>
      <p className="lv-body-secondary">Indicateurs clés, santé des services, incidents ouverts, maintenance en cours, derniers scénarios de test.</p>
    </section>
  );
}
