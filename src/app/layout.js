import Head from 'next/head';
import { oswald } from '../../fonts';
import './globals.css';

export const metadata = {
  title: 'Academia Fitness PRIME',
  description: 'A Melhor academia do mundo!',
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        <link href={oswald.css} rel="stylesheet" />
        
      </Head>
      <html lang="pt-br">
        <body className={oswald.className}>{children}</body>
      </html>
    </>
  );
}