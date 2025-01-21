import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Openmile & Openlink',
  description: 'Openmile & Openlink information kiosk view.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className='h-full'>
      <body className='h-full overscroll-none'>{children}</body>
    </html>
  );
}
