import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import CTABanner from "@/components/CTABanner";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <USPSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <GallerySection />
        <ReviewsSection />
        <CTABanner />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
