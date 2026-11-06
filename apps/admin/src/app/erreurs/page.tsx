/** Erreurs regroupées par signature, fréquence, version, appareil et format ; création de ticket.
 * Permission requise : `erreurs.lire` (vérifiée côté serveur). Toute écriture est journalisée dans l'audit. */
export default function Page() {
  return (
    <section>
      <h1 className="lv-display-title">Erreurs et plantages</h1>
      <p className="lv-body-secondary">Erreurs regroupées par signature, fréquence, version, appareil et format ; création de ticket.</p>
    </section>
  );
}
