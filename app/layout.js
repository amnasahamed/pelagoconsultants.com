import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL('https://pelagoconsultants.com'),
  title: "Pelago Consultants - Business Compliance & Registration Services",
  description: "Startup India certified consultancy offering company registration, GST filing, ISO certification, trademark, and compliance services. 6,000+ happy clients.",
  keywords: "company registration, GST filing, startup india, ISO certification, trademark, LLP registration, business compliance, Kerala",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Pelago Consultants - We Handle Compliance, So You Can Focus on Growth",
    description: "From company formation to tax, legal, and ongoing compliance — we take care of the essentials so you can build and scale with confidence.",
    url: "https://pelagoconsultants.com",
    siteName: "Pelago Consultants",
    type: "website",
    locale: "en_IN",
    images: [{
      url: "/favicon.png",
      width: 1200,
      height: 630,
      alt: "Pelago Consultants Logo"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pelago Consultants - Business Compliance & Registration Services",
    description: "Startup India certified consultancy offering company registration, GST filing, and compliance services. 6,000+ happy clients.",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://pelagoconsultants.com/#organization',
        'name': 'Pelago Consultants',
        'url': 'https://pelagoconsultants.com/',
        'logo': 'https://pelagoconsultants.com/favicon.png',
        'description': 'Startup India certified consultancy offering company registration, GST filing, ISO certification, trademark, and compliance services.',
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+91-7994659991',
          'contactType': 'customer service',
          'areaServed': 'IN',
          'availableLanguage': 'en'
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://pelagoconsultants.com/#website',
        'url': 'https://pelagoconsultants.com/',
        'name': 'Pelago Consultants',
        'publisher': {
          '@id': 'https://pelagoconsultants.com/#organization'
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
