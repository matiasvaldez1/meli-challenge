import Layout from "@/components/layout";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { PATH_NAMES } from "./paths";
import IncidentRegistrationPage from "@/pages/incidentRegistration";
import LoadingScreen from "@/components/loading-screen";

export const incidentRegistrationRoutes = [
  {
    path: PATH_NAMES.incidentRegistration,
    element: (
      <Layout>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </Layout>
    ),
    children: [{ element: <IncidentRegistrationPage />, index: true }],
  },
];
