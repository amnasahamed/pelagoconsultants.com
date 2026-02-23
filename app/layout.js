import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pelago Consultants - Business Compliance & Registration Services",
  description: "Startup India certified consultancy offering company registration, GST filing, ISO certification, trademark, and compliance services. 6,000+ happy clients with 98% success rate.",
  keywords: "company registration, GST filing, startup india, ISO certification, trademark, LLP registration, business compliance, Kerala, tax filing, ITR filing",
  openGraph: {
    title: "Pelago Consultants - We Handle Compliance, So You Can Focus on Growth",
    description: "From company formation to tax, legal, and ongoing compliance — we take care of the essentials so you can build and scale with confidence.",
    url: "https://pelagoconsultants.com",
    siteName: "Pelago Consultants",
    type: "website",
  },
};

// JSON-LD Schema Markup for Organization and LocalBusiness
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  name: "Pelago Consultants",
  url: "https://pelagoconsultants.com",
  logo: "https://pelagoconsultants.com/images/logo.png",
  description: "Startup India certified business compliance and registration services consultancy",
  foundingDate: "2015",
  areaServed: [
    {
      "@type": "Country",
      name: "India"
    },
    {
      "@type": "State",
      name: "Kerala"
    }
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9xxx-xxx-xxx",
    contactType: "Customer Service",
    email: "info@pelagoconsultants.com"
  },
  sameAs: [
    "https://www.linkedin.com/company/pelago-consultants",
    "https://www.facebook.com/pelagoconsultants",
    "https://twitter.com/pelagoconsult"
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "1200"
  },
  knowsAbout: [
    "Company Registration",
    "GST Filing",
    "ISO Certification",
    "Trademark Registration",
    "Business Compliance",
    "LLP Registration",
    "Tax Consultation",
    "ITR Filing",
    "Startup Certification"
  ]
};

// BreadcrumbList Schema for home page
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://pelagoconsultants.com"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
