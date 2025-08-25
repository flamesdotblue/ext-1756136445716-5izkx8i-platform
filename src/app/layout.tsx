import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Hello World',
  description: 'Simple Hello World page',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
