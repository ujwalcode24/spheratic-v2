import { HeroSection, DomainsSection, AboutSection } from '@/components/sections';
import MissionSection from '@/components/sections/MissionSection';
import ScrollExploreSection from '@/components/sections/ScrollExploreSection';
import { OverlapScrollSection, ParallaxSection } from '@/components/animations';

export default function Home() {
  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Hero Section */}
      <ParallaxSection speed={0.2} className="relative z-30">
        <HeroSection />
      </ParallaxSection>

      {/* Scroll to Explore Section with Stats */}
      <ScrollExploreSection />

      {/* Domains Section with Parallax */}
      <ParallaxSection speed={0.4} className="relative z-20">
        <DomainsSection />
      </ParallaxSection>

      {/* Mission Section */}
      <MissionSection />

      {/* About/Core Values Section with Parallax */}
      <ParallaxSection speed={0.6} className="relative z-10">
        <AboutSection />
      </ParallaxSection>
    </div>
  );
}
