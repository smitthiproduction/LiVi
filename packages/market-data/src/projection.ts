/**
 * Projections pour la carte des marchés mondiaux.
 * - 3D : coordonnées sur une sphère unité (globe WebGL / Skia), rotation par longitude et latitude de la caméra.
 * - 2D : projection équirectangulaire (simple, lisible, sans dépendance) dans un cadre largeur × hauteur.
 */

const RAD = Math.PI / 180;

export interface Point3 { x: number; y: number; z: number }

/** Latitude/longitude en degrés vers un point de la sphère unité (y vers le nord, z vers le méridien 0). */
export function versSphere(lat: number, lon: number): Point3 {
  const phi = lat * RAD;
  const lambda = lon * RAD;
  return { x: Math.cos(phi) * Math.sin(lambda), y: Math.sin(phi), z: Math.cos(phi) * Math.cos(lambda) };
}

/**
 * Projection orthographique vue depuis une caméra centrée sur (latCentre, lonCentre).
 * Renvoie x, y dans [-1, 1] et `visible` = le point est sur la face avant du globe.
 */
export function orthographique(lat: number, lon: number, latCentre: number, lonCentre: number): { x: number; y: number; visible: boolean } {
  const phi = lat * RAD;
  const lambda = (lon - lonCentre) * RAD;
  const phi0 = latCentre * RAD;
  const cosc = Math.sin(phi0) * Math.sin(phi) + Math.cos(phi0) * Math.cos(phi) * Math.cos(lambda);
  const x = Math.cos(phi) * Math.sin(lambda);
  const y = Math.cos(phi0) * Math.sin(phi) - Math.sin(phi0) * Math.cos(phi) * Math.cos(lambda);
  return { x, y, visible: cosc >= 0 };
}

/** Projection équirectangulaire dans un cadre (origine en haut à gauche). */
export function equirectangulaire(lat: number, lon: number, largeur: number, hauteur: number): { x: number; y: number } {
  return { x: ((lon + 180) / 360) * largeur, y: ((90 - lat) / 180) * hauteur };
}

/** Longitude de caméra normalisée dans [-180, 180[ après une rotation (glisser du doigt). */
export function normaliserLongitude(lon: number): number {
  const l = ((((lon + 180) % 360) + 360) % 360) - 180;
  return Object.is(l, -0) ? 0 : l;
}
