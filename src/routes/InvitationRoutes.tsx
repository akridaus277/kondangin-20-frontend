import { Routes, Route } from "react-router-dom"
import InvitationPage from "@/features/invitation-page/InvitationPage"
import MemberDashboardPage from "@/features/member-dashboard/MemberDashboardPage"
import InvitationDashboardPage from "@/features/invitation-dashboard/InvitationDashboardPage"
import MainEventForm from "@/features/invitation-dashboard/components/MainEventForm"
import BrideGroomForm from "@/features/invitation-dashboard/components/BrideGroomForm"
import EventScheduleForm from "@/features/invitation-dashboard/components/EventScheduleForm"
import PhotoTemplateForm from "@/features/invitation-dashboard/components/PhotoTemplateForm"
import VideoGalleryForm from "@/features/invitation-dashboard/components/VideoGalleryForm"
import PhotoGalleryForm from "@/features/invitation-dashboard/components/PhotoGalleryForm"
import UtteranceForm from "@/features/invitation-dashboard/components/UtteranceForm"
import DigitalGiftForm from "@/features/invitation-dashboard/components/DigitalGiftForm"
import ListGuestForm from "@/features/invitation-dashboard/components/ListGuestForm"

const InvitationRoutes = ({ subdomain }: { subdomain: string }) => {
  return (
    <Routes>
      <Route path="/to" element={<InvitationPage subdomain={subdomain} />} />
      <Route path="/dashboard" element={<InvitationDashboardPage subdomain={subdomain} />}>
        <Route path="main-event" element={<MainEventForm />} />
        <Route path="bride-groom" element={<BrideGroomForm />} />
        <Route path="event-schedule" element={<EventScheduleForm />} />
        <Route path="photo-template" element={<PhotoTemplateForm />} />
        <Route path="photo-gallery" element={<PhotoGalleryForm />} />
        <Route path="video-gallery" element={<VideoGalleryForm />} />
        <Route path="utterance" element={<UtteranceForm />} />
        <Route path="digital-gift" element={<DigitalGiftForm />} />
        <Route path="guest-list" element={<ListGuestForm />} />
        {/* tambahkan route lainnya di sini nanti */}
      </Route>
    </Routes>
  )
}

export default InvitationRoutes
