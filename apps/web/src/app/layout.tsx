import type { ReactNode } from 'react';
import '@livi/design-tokens/css';
import '@livi/ui-web/livi-components.css';
import '@livi/ui-web/typographie.css';
import './globals.css';
import { BarreLaterale } from '@/components/BarreLaterale';
import { PaletteRecherche } from '@/components/PaletteRecherche';

export const metadata = { title: 'LiVi', description: 'Tout votre patrimoine, sans trou et sans parti pris.' };

export default function Racine({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" data-theme="dark">
      <body>
        <div className="coque">
          <BarreLaterale />
          <main className="contenu">{children}</main>
        </div>
        <PaletteRecherche />
      </body>
    </html>
  );
}
