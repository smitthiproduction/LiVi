'use client';
import { useEffect, useState } from 'react';
import { PERIMETRES_RECHERCHE } from '@livi/asset-classes';

/** Recherche globale ⌘K / Ctrl K avec pastilles de périmètre (REC-01, REC-02). */
export function PaletteRecherche() {
  const [ouverte, setOuverte] = useState(false);
  const [perimetre, setPerimetre] = useState('tout');
  useEffect(() => {
    const f = (e: KeyboardEvent) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setOuverte((o) => !o); } if (e.key === 'Escape') setOuverte(false); };
    window.addEventListener('keydown', f);
    return () => window.removeEventListener('keydown', f);
  }, []);
  if (!ouverte) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label="Rechercher" className="lv-sheet" style={{ position: 'fixed', inset: '10vh 20vw auto', padding: 'var(--lv-space-6)' }}>
      <input autoFocus className="lv-field" placeholder="Actif, ISIN, enseigne, transaction…" aria-label="Rechercher" style={{ width: '100%' }} />
      <div role="tablist" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
        {PERIMETRES_RECHERCHE.map((p) => (
          <button key={p.id} role="tab" aria-selected={perimetre === p.id} className="lv-chip" onClick={() => setPerimetre(p.id)}>{p.label}</button>
        ))}
      </div>
    </div>
  );
}
