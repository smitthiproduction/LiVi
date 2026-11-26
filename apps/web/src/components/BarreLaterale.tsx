import Link from 'next/link';

/** Même ordre que la barre d'onglets mobile, puis Import et Rapports. Profil et réglages par l'avatar de l'en-tête. */
const ENTREES = [
  ['/', 'Accueil'], ['/patrimoine', 'Patrimoine'], ['/budget', 'Budget'], ['/marches', 'Marchés'], ['/ia', 'LiVi IA'],
  ['/import', 'Import'], ['/rapports', 'Rapports'],
] as const;

export function BarreLaterale() {
  return (
    <nav aria-label="Navigation principale" className="lv-glass" style={{ padding: 'var(--lv-space-6) var(--lv-space-4)', display: 'flex', flexDirection: 'column', gap: 4 }}>
      <strong style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>LiVi</strong>
      {ENTREES.map(([href, label]) => <Link key={href} href={href} className="lv-item">{label}</Link>)}
    </nav>
  );
}
