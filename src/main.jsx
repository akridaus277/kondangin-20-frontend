import { Provider } from "@/components/ui/provider.jsx"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      {/* <App /> */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)