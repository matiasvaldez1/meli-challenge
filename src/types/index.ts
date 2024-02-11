import { mockDistributionControlCenterCards } from "@/lib/mock";

export interface IRouter {
  title: string;
  path: string;
  element: JSX.Element;
}

export type TDistributionControlCard =
  (typeof mockDistributionControlCenterCards)[0];
