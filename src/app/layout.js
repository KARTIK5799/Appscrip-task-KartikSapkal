import localFont from "next/font/local";
import "./globals.css";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Head from 'next/head';
import OfferBanner from "./components/offerbanner/OfferBanner";

const SimplonNorm = localFont({
  src: "./fonts/SimplonNorm-Regular-WebS.woff",
  variable: "--font-SimplonNorm-Regular",
  weight: "100 900",
});

export const metadata = {
  title: "Appscribe - Your One-Stop Shopping Solution",
  description: "Appscribe offers innovative solutions for your business needs.",
  keywords: "e-commerce, online shopping, business solutions, Appscribe",
  author: "Appscribe Team",
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Appscribe",
    "url": "https://www.appscribe.com",
    "logo": "https://www.appscribe.com/images/logo-appscribe.png",
    "sameAs": [
      "https://www.facebook.com/appscribe",
      "https://www.twitter.com/appscribe",
      "https://www.linkedin.com/company/appscribe"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-1234",
      "contactType": "Customer Service"
    }
  };

  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <body className={SimplonNorm.variable}>
        <OfferBanner/>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
