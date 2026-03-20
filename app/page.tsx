import { OrganizationJsonLd, ProductJsonLd, WebSiteJsonLd, FAQJsonLd } from '@/components/structured-data'
import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import SocialProofSection from '@/components/social-proof-section'
import ProblemSection from '@/components/problem-section'
import SolutionSection from '@/components/solution-section'
import ThreeBenefitsSection from '@/components/three-benefits-section'
import MeasurementSection from '@/components/measurement-section'
import MeasurementDetailSection from '@/components/measurement-detail-section'
import AnalyticsSection from '@/components/analytics-section'
import TrainingSection from '@/components/training-section'
import OutcomeSportsSection from '@/components/outcome-sports-section'
import VideoShowcaseSection from '@/components/video-showcase-section'
import MediaSection from '@/components/media-section'
import TestimonialsSection from '@/components/testimonials-section'
import FlowSection from '@/components/flow-section'
import PricingSection from '@/components/pricing-section'
import CtaSection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <ProductJsonLd />
      <WebSiteJsonLd />
      <FAQJsonLd />
      <main className="min-h-screen bg-background">
        <Navigation />

      <div id="hero">
        <HeroSection />
      </div>

      <div id="social-proof">
        <SocialProofSection />
      </div>

      <div id="problem">
        <ProblemSection />
      </div>

      <div id="solution">
        <SolutionSection />
      </div>

      <div id="three-benefits">
        <ThreeBenefitsSection />
      </div>

      <div id="measurement">
        <MeasurementSection />
      </div>

      <div id="measurement-detail">
        <MeasurementDetailSection />
      </div>

      <div id="analytics">
        <AnalyticsSection />
      </div>

      <div id="training">
        <TrainingSection />
      </div>

      <div id="sports">
        <OutcomeSportsSection />
      </div>

      <div id="video-showcase">
        <VideoShowcaseSection />
      </div>

      <div id="media">
        <MediaSection />
      </div>

      <div id="testimonials">
        <TestimonialsSection />
      </div>

      <div id="flow">
        <FlowSection />
      </div>

      <div id="pricing">
        <PricingSection />
      </div>

      <CtaSection />

      <Footer />
      </main>
    </>
  )
}
