import Link from 'next/link';

const ENTREES = [
  ['/', 'Tableau de bord'], ['/patrimoine', 'Patrimoine'], ['/marches', 'Marchés'], ['/marches/monde', 'Monde'],
  ['/espace-de-travail', 'Espace de travail'], ['/import', 'Import'], ['/ia', 'LiVi IA'], ['/rapports', 'Rapports'], ['/reglages', 'Réglages'],
] as const;

export function BarreLaterale() {
  return (
    <nav aria-label="Navigation principale" className="lv-glass" style={{ padding: 'var(--lv-space-6) var(--lv-space-4)', display: 'flex', flexDirection: 'column', gap: 4 }}>
      <strong style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>LiVi</strong>
      {ENTREES.map(([href, label]) => <Link key={href} href={href} className="lv-item">{label}</Link>)}
    </nav>
  );
}
