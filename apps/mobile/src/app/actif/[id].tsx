import { useLocalSearchParams } from 'expo-router';
import { ongletsFiche } from '@livi/asset-classes';
import { Ecran } from '@/components/Ecran';
import { Pastilles } from '@/components/Pastilles';
import { BarreAction } from '@/components/BarreAction';

/** Fiche d'un actif : onglets donnés par la classification (FIC-01), jamais codés en dur. */
export default function FicheActif() {
  const { id, classe = 'actions', sousClasse } = useLocalSearchParams<{ id: string; classe?: string; sousClasse?: string }>();
  const onglets = ongletsFiche(classe, sousClasse);
  return (
    <Ecran titre={id ?? 'Actif'} description="En-tête : valeur, variation, fraîcheur, ma position.">
      <Pastilles elements={onglets.map((o) => ({ id: o.id, label: o.label }))} />
      <BarreAction />
    </Ecran>
  );
}
