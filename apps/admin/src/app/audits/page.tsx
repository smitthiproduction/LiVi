/** Journal d’audit chaîné, vérification d’intégrité, export.
 * Permission requise : `audits.lire` (vérifiée côté serveur). Toute écriture est journalisée dans l'audit. */
export default function Page() {
  return (
    <section>
      <h1 className="lv-display-title">Audits</h1>
      <p className="lv-body-secondary">Journal d’audit chaîné, vérification d’intégrité, export.</p>
    </section>
  );
}
