import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import './globals.css';
import { css } from '../../styled-system/css';

const inter = Inter({ subsets: ['latin'] });

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

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
          css({
            backgroundColor: 'gray.900',
            backgroundImage: 'linear-gradient(to bottom,transparent,black)',
            color: 'white',
            _osLight: {
              backgroundColor: 'gray.100',
              color: 'gray.900',
            }
          }),
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
