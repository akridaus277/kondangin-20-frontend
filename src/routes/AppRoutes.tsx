import { Route, Routes } from "react-router-dom"
import LandingPage from "@/features/landing/LandingPage"
import LandingPageNew from "@/features/landing/LandingPageNew"
import LoginPage from "@/features/auth/LoginPage"
import RegisterPage from "@/features/auth/RegisterPage"
import MemberDashboardPage from "@/features/member-dashboard/MemberDashboardPage"
import WaitingEmailVerificationPage from "@/features/auth/WaitingEmailVerificationPage"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPageNew/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/member" element={<MemberDashboardPage />} />
      <Route path="/waiting-email-verification" element={<WaitingEmailVerificationPage />} />
      {/* <Route path="/invitation" element={<InvitationDashboard />} /> */}
      {/* <Route path="/admin" element={<AdminDashboard />} /> */}
    </Routes>
  )
}

export default AppRoutes
