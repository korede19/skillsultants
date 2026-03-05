import BriefIntro from "@/components/briefIntro";
import FeaturedTestimonial from "@/components/featuredTestimonial";
import HeroSection from "@/components/heroSection";
import ServicesSnapshot from "@/components/serviceSnapshot";

export default function Home() {
  return (
    <>
      <HeroSection
        subtitle="Unlock Your Full Potential"
        title="Certified Professional Coach and Mentor"
        description="Beyond Coaching, designing stakeholder momentum that lasts, here stakeholders clarity becomes Momentum because Growth doesn't happen without buy-in — and buy-in doesn't happen by accident."
        ctaPrimary="Book a Session"
        ctaSecondary="Explore Services"
      />
      <BriefIntro />
      <ServicesSnapshot />
      <FeaturedTestimonial />
    </>
  );
}
