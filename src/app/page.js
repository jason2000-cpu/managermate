import Navbar from "@/components/Navbar";
import BannerSection from "@/components/BannerSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
        <Navbar />
        <div className="px-10 pt-16 space-y-28">
          <BannerSection />
          <AboutSection />
          <ContactSection />
        </div>
        <Footer />
    </div>
  );
}
