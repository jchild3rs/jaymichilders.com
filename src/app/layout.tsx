import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'James Childers - Developer &amp; Designer',
  description: 'I enjoy creative problem solving and building things.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          'bg-gray-900 text-white light-mode:bg-gray-100 light-mode:text-gray-900',
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
