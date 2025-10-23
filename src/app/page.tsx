import { HeroSection, AboutSection, TrustedBySection } from '@/components/sections';
import StickyDomainsSection from '@/components/sections/StickyDomainsSection';
import MissionSection from '@/components/sections/MissionSection';
import { ParallaxSection } from '@/components/animations';

export default function Home() {
  return (
    <div className="pt-16 relative overflow-visible">
      {/* Hero Section */}
      <ParallaxSection speed={0.2} className="relative z-30">
        <HeroSection />
      </ParallaxSection>

      {/* Sticky Domains Section */}
      <div className="relative z-20">
        <StickyDomainsSection />
      </div>

      {/* Mission Section */}
      <MissionSection />

      {/* About/Core Values Section with Parallax */}
      <ParallaxSection speed={0.6} className="relative z-10">
        <AboutSection />
      </ParallaxSection>

      {/* Trusted by Industry Leaders Section */}
      <div className="relative z-10">
        <TrustedBySection />
      </div>
    </div>
  );
}
