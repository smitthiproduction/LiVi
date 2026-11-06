/** Classes et sous-classes, champs, filtres, onglets ; publication versionnée.
 * Permission requise : `classes-actifs.publier` (vérifiée côté serveur). Toute écriture est journalisée dans l'audit. */
export default function Page() {
  return (
    <section>
      <h1 className="lv-display-title">Classes d’actifs</h1>
      <p className="lv-body-secondary">Classes et sous-classes, champs, filtres, onglets ; publication versionnée.</p>
    </section>
  );
}
