import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";

type RedirectProps = { to: string };

export const Redirect: FC<RedirectProps> = ({ to }) => {
  const router = useRouter();

  useEffect(() => {
    if (to) {
      router.push(to);
    }
  }, [router, to]);

  return <div />;
};
