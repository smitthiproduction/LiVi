/** Tickets issus des signalements et des erreurs, priorité, statut, lien GitHub.
 * Permission requise : `bugs.gerer` (vérifiée côté serveur). Toute écriture est journalisée dans l'audit. */
export default function Page() {
  return (
    <section>
      <h1 className="lv-display-title">Bugs et tickets</h1>
      <p className="lv-body-secondary">Tickets issus des signalements et des erreurs, priorité, statut, lien GitHub.</p>
    </section>
  );
}
