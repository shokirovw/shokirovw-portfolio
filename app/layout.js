import './globals.css'
import localFont from 'next/font/local'
import getWeather, { weatherExtract } from './lib/getWeather';
import ClientLayout from './clientlayout';

export const revalidate = 60;

const myFont = localFont({ src: './lib/fonts/my-font.woff2', variable: '--font-acorn' });
const myFont2 = localFont({ src: './lib/fonts/my-font2.otf', variable: '--font-gtplanar' });

export default async function RootLayout({ children }) {
  const weather_data = weatherExtract(await getWeather());

  return (
    <html lang="en">
      <body className={`${myFont.variable} ${myFont2.variable}`}>
          <ClientLayout weather_data={weather_data}>
            {children}
          </ClientLayout>
      </body>
    </html>
  );
}


