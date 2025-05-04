import { Route, Routes } from "react-router-dom"
import LandingPage from "@/features/landing/LandingPage"
import LoginPage from "@/features/auth/LoginPage"
import RegisterPage from "@/features/auth/RegisterPage"
import MemberDashboardPage from "@/features/member-dashboard/MemberDashboardPage"
import WaitingEmailVerificationPage from "@/features/auth/WaitingEmailVerificationPage"


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
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
