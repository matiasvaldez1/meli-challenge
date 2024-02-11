import Layout from "@/components/layout";
import HomePage from "@/pages/home";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { PATH_NAMES } from "./paths";
import LoadingScreen from "@/components/loading-screen";

export const homeRoutes = [
  {
    path: PATH_NAMES.home,
    element: (
      <Layout>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </Layout>
    ),
    children: [{ element: <HomePage />, index: true }],
  },
];
