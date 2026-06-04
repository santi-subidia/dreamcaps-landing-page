import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { SITE_URL, products } from "@/data/products";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        image: `${SITE_URL}${product.image}`,
        brand: {
          "@type": "Brand",
          name: "New Era",
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          url: SITE_URL,
          priceCurrency: "ARS",
        },
      },
    })),
  };

  return (
    <>
      <a href="#productos" className="skip-link">
        Saltar al contenido
      </a>
      <main>
        <HeroSection />
        <ProductGrid />
      </main>
      <Footer />
      <WhatsAppFab />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}