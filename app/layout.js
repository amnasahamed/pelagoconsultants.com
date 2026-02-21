import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pelago Consultants - Business Compliance & Registration Services",
  description: "Startup India certified consultancy offering company registration, GST filing, ISO certification, trademark, and compliance services. 6,000+ happy clients.",
  keywords: "company registration, GST filing, startup india, ISO certification, trademark, LLP registration, business compliance, Kerala",
  openGraph: {
    title: "Pelago Consultants - We Handle Compliance, So You Can Focus on Growth",
    description: "From company formation to tax, legal, and ongoing compliance — we take care of the essentials so you can build and scale with confidence.",
    url: "https://pelagoconsultants.com",
    siteName: "Pelago Consultants",
    type: "website",
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
