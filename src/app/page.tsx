import CoverSection from "@/components/CoverSection";
import InvitationSection from "@/components/InvitationSection";
import EventDetailsSection from "@/components/EventDetailsSection";
import MessageSection from "@/components/MessageSection";
import GallerySection from "@/components/GallerySection";
import DirectionsSection from "@/components/DirectionsSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="w-full max-w-[480px] mx-auto overflow-hidden">
      <CoverSection />
      <InvitationSection />
      <EventDetailsSection />
      <MessageSection />
      <GallerySection />
      <DirectionsSection />
      <FooterSection />
    </main>
  );
}
