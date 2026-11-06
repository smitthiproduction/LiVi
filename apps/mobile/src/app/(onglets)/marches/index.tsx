import { Ecran } from '@/components/Ecran';
import { Pastilles } from '@/components/Pastilles';
import { PERIMETRES_RECHERCHE } from '@livi/asset-classes';

/** Catalogue de découverte par classe d'actifs (REC-07), accès au globe et aux listes. */
export default function Catalogue() {
  return (
    <Ecran titre="Marchés" description="Catalogue par classe d’actifs, listes de surveillance, actualités. Classements factuels, aucune recommandation.">
      <Pastilles elements={PERIMETRES_RECHERCHE.filter((p) => 'classe' in p).map((p) => ({ id: p.id, label: p.label }))} />
    </Ecran>
  );
}
