import { pointsCarte } from '../lib/carte.ts';

/** Carte 2D (projection équirectangulaire) : graticule, places, étiquettes d'indices, liste équivalente. */
export function CarteMarches2D({ largeur }: { largeur: number }) {
  const hauteur = largeur / 2;
  const points = pointsCarte(largeur, new Date());
  return (
    <figure>
      <svg viewBox={`0 0 ${largeur} ${hauteur}`} role="img" aria-label="Carte des marchés mondiaux" style={{ width: '100%', background: 'var(--lv-surface)', borderRadius: 'var(--lv-radius-lg)' }}>
        {Array.from({ length: 11 }, (_, k) => <line key={`m${k}`} x1={(k * largeur) / 10} x2={(k * largeur) / 10} y1={0} y2={hauteur} stroke="var(--lv-chart-grid)" />)}
        {Array.from({ length: 7 }, (_, k) => <line key={`p${k}`} y1={(k * hauteur) / 6} y2={(k * hauteur) / 6} x1={0} x2={largeur} stroke="var(--lv-chart-grid)" />)}
        {points.map((p) => (
          <g key={p.code}>
            <circle cx={p.x} cy={p.y} r={4} fill={p.statut === 'ouverte' ? 'var(--lv-gain)' : 'var(--lv-ink-tertiary)'}><title>{`${p.code} · ${p.place.nom} · ${p.statut}`}</title></circle>
            <text x={p.x + 6} y={p.y - 6} fontSize={11} fill="var(--lv-ink-secondary)">{p.code}</text>
          </g>
        ))}
      </svg>
      <figcaption>
        <table>
          <thead><tr><th>Indice</th><th>Place</th><th>Statut</th></tr></thead>
          <tbody>{points.map((p) => <tr key={p.code}><td>{p.code}</td><td>{p.place.nom}</td><td>{p.statut}</td></tr>)}</tbody>
        </table>
      </figcaption>
    </figure>
  );
}
