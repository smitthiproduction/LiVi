/** Drapeaux de fonctionnalité ; ajustements par utilisateur, segment ou global avec motif, durée et journal ; double validation pour le global.
 * Permission requise : `ajustements.utilisateur` (vérifiée côté serveur). Toute écriture est journalisée dans l'audit. */
export default function Page() {
  return (
    <section>
      <h1 className="lv-display-title">Drapeaux et ajustements</h1>
      <p className="lv-body-secondary">Drapeaux de fonctionnalité ; ajustements par utilisateur, segment ou global avec motif, durée et journal ; double validation pour le global.</p>
    </section>
  );
}
