import { useState } from 'react';
import { TextInput } from 'react-native';
import { PERIMETRES_RECHERCHE, normaliser } from '@livi/asset-classes';
import { Ecran } from '@/components/Ecran';
import { Pastilles } from '@/components/Pastilles';
import { useTheme } from '@/theme/ThemeProvider';

/** Recherche globale avec pastilles de périmètre (REC-01, REC-02, REC-08). La recherche dans mes données reste locale. */
export default function Recherche() {
  const { c, rayons } = useTheme();
  const [texte, setTexte] = useState('');
  const [perimetre, setPerimetre] = useState('tout');
  void normaliser(texte);
  return (
    <Ecran titre="Rechercher">
      <TextInput value={texte} onChangeText={setTexte} placeholder="Actif, ISIN, enseigne, transaction…" placeholderTextColor={c['ink-tertiary']}
        accessibilityLabel="Rechercher" style={{ backgroundColor: c['surface-sunken'], color: c.ink, borderRadius: rayons['radius-pill'] as unknown as number, padding: 12 }} />
      <Pastilles elements={PERIMETRES_RECHERCHE.map((p) => ({ id: p.id, label: p.label }))} actif={perimetre} onChoisir={setPerimetre} />
    </Ecran>
  );
}
