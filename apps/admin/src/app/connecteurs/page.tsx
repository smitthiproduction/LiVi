/** Agrégateur et API courtiers : état, taux d’erreur, bandeau d’incident, activation.
 * Permission requise : `connecteurs.piloter` (vérifiée côté serveur). Toute écriture est journalisée dans l'audit. */
export default function Page() {
  return (
    <section>
      <h1 className="lv-display-title">Connecteurs</h1>
      <p className="lv-body-secondary">Agrégateur et API courtiers : état, taux d’erreur, bandeau d’incident, activation.</p>
    </section>
  );
}
