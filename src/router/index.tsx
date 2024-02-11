// Navigation
import { Navigate, useRoutes } from "react-router-dom";

// Routes
import { homeRoutes } from "./home";
import { incidentRegistrationRoutes } from "./incidentRegistration";

export default function Router() {
  return useRoutes([
    ...homeRoutes,
    ...incidentRegistrationRoutes,
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
