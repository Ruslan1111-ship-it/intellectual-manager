import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Intellectual Manager — ИИ-менеджер по продажам',
  description: 'Автоматизируйте продажи без человеческого фактора.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
