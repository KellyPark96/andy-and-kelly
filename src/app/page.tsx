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
    <main className="w-full max-w-[480px] mx-auto overflow-hidden">
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
