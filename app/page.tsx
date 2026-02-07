import BriefIntro from "@/components/briefIntro";
import FeaturedTestimonial from "@/components/featuredTestimonial";
import HeroSection from "@/components/heroSection";
import ServicesSnapshot from "@/components/serviceSnapshot";

export default function Home() {
  return (
    <div>
      <HeroSection
        subtitle="Unlock Your Full Potential"
        title="Transform Your Life, One Session at a Time"
        description="Professional coaching designed to help you achieve breakthrough results in your personal and professional life. Together, we'll create lasting change through personalized guidance and proven strategies."
        ctaPrimary="Book a Session"
        ctaSecondary="Explore Services"
      />
      <BriefIntro />
      <ServicesSnapshot />
      <FeaturedTestimonial />
    </div>
  );
}
