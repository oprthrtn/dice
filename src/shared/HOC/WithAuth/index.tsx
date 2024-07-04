import { ReactNode } from "react";
import { useSubscribeToStorageChanges } from "shared/common";

type WithAuthProps = {
  auth?: ReactNode;
  unAuth?: ReactNode;
};

export const WithAuth = ({ auth, unAuth }: WithAuthProps) => {
  const isAuth = useSubscribeToStorageChanges("isAuth");

  return isAuth ? auth : unAuth;
};
