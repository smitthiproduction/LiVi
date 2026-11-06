import { CarteMarches2D } from '@/components/CarteMarches2D';

/** Marchés mondiaux (MON-01 à MON-12). Le globe WebGL se charge côté client ; la carte 2D sert de repli et d'équivalent. */
export default function Monde() {
  return (
    <section>
      <h1 className="lv-display-title">Marchés mondiaux</h1>
      <CarteMarches2D largeur={960} />
    </section>
  );
}
