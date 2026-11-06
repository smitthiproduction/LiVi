/** Catalogue des codes d’erreur, messages utilisateur en français, actions proposées, versions.
 * Permission requise : `messages-erreur.modifier` (vérifiée côté serveur). Toute écriture est journalisée dans l'audit. */
export default function Page() {
  return (
    <section>
      <h1 className="lv-display-title">Messages d’erreur</h1>
      <p className="lv-body-secondary">Catalogue des codes d’erreur, messages utilisateur en français, actions proposées, versions.</p>
    </section>
  );
}
