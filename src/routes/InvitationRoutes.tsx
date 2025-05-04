import { Routes, Route } from "react-router-dom"
import InvitationPage from "@/features/invitation-page/InvitationPage"

const InvitationRoutes = ({ subdomain }: { subdomain: string }) => {
  return (
    <Routes>
      <Route path="*" element={<InvitationPage subdomain={subdomain} />} />
    </Routes>
  )
}

export default InvitationRoutes
