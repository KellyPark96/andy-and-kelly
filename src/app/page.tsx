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
import NavBar from "@/components/NavBar";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <main className="w-full max-w-[480px] ml-9 min-[480px]:mx-auto mr-auto overflow-hidden">
        <div id="cover"><CoverSection /></div>
        <InvitationSection />
        <div id="event"><EventDetailsSection /></div>
        <CalendarSection />
        <div id="gallery"><GallerySection /></div>
        <div id="directions"><DirectionsSection /></div>
        <div id="account"><AccountSection /></div>
        <div id="rsvp"><RSVPSection /></div>
        <div id="guestbook"><GuestbookSection /></div>
        <FooterSection />
      </main>
    </>
  );
}
