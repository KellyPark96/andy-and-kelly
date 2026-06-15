import CoverSection from "@/components/CoverSection";
import InvitationSection from "@/components/InvitationSection";
import EventDetailsSection from "@/components/EventDetailsSection";
import CalendarSection from "@/components/CalendarSection";
import GallerySection from "@/components/GallerySection";
import DirectionsSection from "@/components/DirectionsSection";
import AccountSection from "@/components/AccountSection";
import RSVPSection from "@/components/RSVPSection";
import GuestbookSection from "@/components/GuestbookSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="w-full h-full max-w-[480px] my-auto mx-auto overflow-hidden" style={{ backgroundImage: "url('/bg-texture.jpg')", backgroundRepeat: "repeat", backgroundSize: "auto" }}>
      <CoverSection />
      <InvitationSection />
      <EventDetailsSection />
      <CalendarSection />
      <GallerySection />
      <DirectionsSection />
      <AccountSection />
      <RSVPSection />
      <GuestbookSection />
      <FooterSection />
    </main>
  );
}
