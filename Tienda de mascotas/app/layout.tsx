import type { Metadata } from 'next';
import './globals.css';
import { Fraunces, Nunito, DM_Mono } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz'],
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['300', '400', '600', '700', '800'],
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Amor Peludito · Pet Shop en Jujuy',
  description:
    'La tienda que entiende de qué lado está el amor. Alimento, juguetes y todo lo que tu peludito necesita. Envío a domicilio en Jujuy, hoy.',
  openGraph: {
    title: 'Amor Peludito · Pet Shop en Jujuy',
    description: 'Alimento, juguetes y accesorios para tu mascota. Envío hoy en San Salvador de Jujuy. Asesoramiento honesto, precio visible desde el inicio.',
    type: 'website',
    locale: 'es_AR',
    siteName: 'Amor Peludito',
    images: [{ url: '/images/hero-background.png', width: 1920, height: 1080, alt: 'Amor Peludito Pet Shop Jujuy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amor Peludito · Pet Shop en Jujuy',
    description: 'Alimento, juguetes y accesorios para tu mascota. Envío hoy en San Salvador de Jujuy.',
    images: ['/images/hero-background.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'PetStore',
    name: 'Amor Peludito',
    description: 'Pet shop local en San Salvador de Jujuy. Alimento, accesorios e higiene para mascotas con envío a domicilio.',
    url: 'https://amorpeludito.com.ar',
    telephone: '+54-388-400-0000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Salvador de Jujuy',
      addressRegion: 'Jujuy',
      addressCountry: 'AR',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '20:00',
    },
    priceRange: '$$',
  };

  return (
    <html
      lang='es'
      className={`${fraunces.variable} ${nunito.variable} ${dmMono.variable}`}
    >
      <head>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body className='font-nunito bg-crema text-ink antialiased overflow-x-hidden'>
        <a href='#categorias' className='sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-pizarra focus:text-crema focus:px-4 focus:py-2 focus:font-bold'>
          Ir al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
