import { useMemo, useState } from 'react';
import { Pressable, Text, View, useWindowDimensions } from 'react-native';
import { Canvas, Circle, Group } from '@shopify/react-native-skia';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { INDICES, placeParId, orthographique, equirectangulaire, normaliserLongitude, statutPlace } from '@livi/market-data';
import { useTheme } from '@/theme/ThemeProvider';

/**
 * Globe 3D (projection orthographique, rotation au doigt) ou carte 2D (équirectangulaire).
 * Les étiquettes affichent le code et la variation ; la vue liste équivalente est rendue sous la carte (MON-11).
 */
export function CarteMarches({ mode, onChangerMode }: { mode: '3d' | '2d'; onChangerMode: (m: '3d' | '2d') => void }) {
  const { c } = useTheme();
  const { width } = useWindowDimensions();
  const taille = Math.min(width - 32, 520);
  const [centre, setCentre] = useState({ lat: 35, lon: 10 });
  const glisser = Gesture.Pan().onChange((e) => {
    setCentre((p) => ({ lat: Math.max(-60, Math.min(70, p.lat + e.changeY * 0.3)), lon: normaliserLongitude(p.lon - e.changeX * 0.3) }));
  });
  const points = useMemo(() => INDICES.map((i) => {
    const place = placeParId(i.place)!;
    if (mode === '3d') {
      const p = orthographique(place.lat, place.lon, centre.lat, centre.lon);
      return { i, place, x: taille / 2 + (p.x * taille) / 2, y: taille / 2 - (p.y * taille) / 2, visible: p.visible };
    }
    const p = equirectangulaire(place.lat, place.lon, taille, taille / 2);
    return { i, place, x: p.x, y: p.y, visible: true };
  }), [mode, centre, taille]);
  const maintenant = new Date();
  return (
    <View style={{ gap: 12 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: 8 }}>
        {(['3d', '2d'] as const).map((m) => (
          <Pressable key={m} accessibilityRole="button" accessibilityState={{ selected: mode === m }} onPress={() => onChangerMode(m)}
            style={{ paddingHorizontal: 12, paddingVertical: 6, borderRadius: 999, backgroundColor: mode === m ? c['surface-raised'] : c['surface-sunken'] }}>
            <Text style={{ color: c.ink }}>{m.toUpperCase()}</Text>
          </Pressable>
        ))}
      </View>
      <GestureDetector gesture={glisser}>
        <Canvas style={{ width: taille, height: mode === '3d' ? taille : taille / 2 }} accessibilityLabel="Carte des marchés mondiaux">
          {mode === '3d' && <Circle cx={taille / 2} cy={taille / 2} r={taille / 2} color={c['surface']} />}
          <Group>
            {points.filter((p) => p.visible).map((p) => (
              <Circle key={p.i.code} cx={p.x} cy={p.y} r={4} color={statutPlace(p.place, maintenant) === 'ouverte' ? c.gain : c['ink-tertiary']} />
            ))}
          </Group>
        </Canvas>
      </GestureDetector>
      <View accessibilityLabel="Liste des indices">
        {points.map((p) => (
          <Text key={p.i.code} style={{ color: c['ink-secondary'] }}>{`${p.i.code} · ${p.place.nom} · ${statutPlace(p.place, maintenant)}`}</Text>
        ))}
      </View>
    </View>
  );
}
