
import Hero from "@/components/Hero";
import Container from "@/components/ui/Container";

import Hero from "@/components/home/Hero";
import ScrollChapter from "@/components/home/ScrollChapter";
import ServicesPreview from "@/components/home/ServicesPreview";
import IndustriesSection from "@/components/home/IndustriesSection";
import CaseStudyHighlight from "@/components/home/CaseStudyHighlight";
import InsightsPreview from "@/components/home/InsightsPreview";
import LeadMagnet from "@/components/home/LeadMagnet";
import CareersContactTeaser from "@/components/home/CareersContactTeaser";


export default function Home() {
  return (
    <>
      <Hero />


      <Container>
        {/* Future homepage sections go here */}
      </Container>

      <ScrollChapter />
      <ServicesPreview />
      <IndustriesSection />
      <CaseStudyHighlight />
      <InsightsPreview />
      <LeadMagnet />
      <CareersContactTeaser />

    </>
  );
}
