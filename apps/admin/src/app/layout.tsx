import type { ReactNode } from 'react';
import Link from 'next/link';
import '@livi/design-tokens/css';
import '@livi/ui-web/livi-components.css';
import '@livi/ui-web/typographie.css';

const NAV = [
  ['/', 'Tableau de bord'],
  ['/utilisateurs', 'Utilisateurs'],
  ['/offres', 'Offres et tarifs'],
  ['/ajustements', 'Drapeaux et ajustements'],
  ['/maintenance', 'Maintenance et tests'],
  ['/journaux', 'Journaux'],
  ['/erreurs', 'Erreurs et plantages'],
  ['/bugs', 'Bugs et tickets'],
  ['/audits', 'Audits'],
  ['/messages-erreur', 'Messages d’erreur'],
  ['/modeles-csv', 'Modèles CSV'],
  ['/annuaire', 'Annuaire des enseignes'],
  ['/classes-actifs', 'Classes d’actifs'],
  ['/marches', 'Référentiel des marchés'],
  ['/connecteurs', 'Connecteurs'],
  ['/quotas-ia', 'Quotas IA'],
  ['/contenus', 'Contenus'],
  ['/conformite', 'Conformité'],
  ['/pilotage', 'Pilotage'],
  ['/roles', 'Rôles et accès'],
] as const;

export const metadata = { title: 'LiVi — back-office', robots: { index: false } };

export default function Racine({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" data-theme="light">
      <body style={{ margin: 0, background: 'var(--lv-bg)', color: 'var(--lv-ink)', fontFamily: 'var(--lv-font-sans)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '248px 1fr', minHeight: '100vh' }}>
          <nav aria-label="Back-office" style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <strong style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>LiVi admin</strong>
            {NAV.map(([href, label]) => <Link key={href} href={href} className="lv-item">{label}</Link>)}
          </nav>
          <main style={{ padding: 40 }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
