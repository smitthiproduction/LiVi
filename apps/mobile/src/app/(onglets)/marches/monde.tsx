import { useEffect, useState } from 'react';
import { Ecran } from '@/components/Ecran';
import { CarteMarches } from '@/components/CarteMarches';
import { reduireAnimations } from '@/theme/ThemeProvider';
import { globeAutorise } from '@/theme/formats';

/** Marchés mondiaux : globe 3D ou carte 2D (MON-01 à MON-12). */
export default function Monde() {
  const [mode, setMode] = useState<'3d' | '2d'>('3d');
  useEffect(() => {
    reduireAnimations().then((r) => { if (!globeAutorise({ reduireAnimations: r })) setMode('2d'); });
  }, []);
  return (
    <Ecran titre="Marchés mondiaux" description="International, Amériques, Europe, Asie-Pacifique, Moyen-Orient et Afrique.">
      <CarteMarches mode={mode} onChangerMode={setMode} />
    </Ecran>
  );
}
