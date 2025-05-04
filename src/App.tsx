// src/App.tsx
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "@/routes/AppRoutes"
import InvitationRoutes from "@/routes/InvitationRoutes"
import { getSubdomain } from "./utils/subdomain"

function App() {
  const subdomain = getSubdomain()
  console.log("isi subdomain : ",subdomain);
  
  return (
    <BrowserRouter>
      {subdomain ? (
        <InvitationRoutes subdomain={subdomain} />
      ) : (
        <AppRoutes />
      )}
    </BrowserRouter>
  )
}

export default App
