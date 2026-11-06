/** Comptes du back-office, rôles, 2FA obligatoire.
 * Permission requise : `roles.gerer` (vérifiée côté serveur). Toute écriture est journalisée dans l'audit. */
export default function Page() {
  return (
    <section>
      <h1 className="lv-display-title">Rôles et accès</h1>
      <p className="lv-body-secondary">Comptes du back-office, rôles, 2FA obligatoire.</p>
    </section>
  );
}
