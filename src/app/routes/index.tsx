import { lazy } from "react";

const MainPage = lazy(() => import("../../pages/main"));

export const AppRoute = () => {
  return <MainPage />;
};
