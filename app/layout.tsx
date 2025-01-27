
// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Onepager Website',
  description: 'Eine umfangreiche Onepager-Website mit Next.js und Tailwind CSS.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body className="font-sans">{children}</body>
    </html>
  );
}