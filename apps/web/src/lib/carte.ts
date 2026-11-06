import { INDICES, placeParId, equirectangulaire, statutPlace, type PlaceBoursiere } from '../../../../packages/market-data/src/index.ts';

export type PointCarte = { code: string; nom: string; place: PlaceBoursiere; x: number; y: number; statut: ReturnType<typeof statutPlace> };

/** Points de la carte 2D : un par indice, positionné sur sa place, avec le statut de séance à l'instant donné. */
export function pointsCarte(largeur: number, instant: Date): PointCarte[] {
  const hauteur = largeur / 2;
  return INDICES.flatMap((i) => {
    const place = placeParId(i.place);
    if (!place) return [];
    const { x, y } = equirectangulaire(place.lat, place.lon, largeur, hauteur);
    return [{ code: i.code, nom: i.nom, place, x, y, statut: statutPlace(place, instant) }];
  });
}
