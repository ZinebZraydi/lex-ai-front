// app/layout.tsx
import './globals.css';
import { Playfair_Display, Manrope } from 'next/font/google';

// Police pour les titres (style Canela)
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-playfair',
});

// Police pour le texte
const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata = {
  title: 'LEX-AI - Assistance Juridique Professionnelle',
  description: 'Solutions juridiques et financières propulsées par l\'IA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="bg-[#1E1E1E] font-sans">
        {children}
      </body>
    </html>
  );
}
