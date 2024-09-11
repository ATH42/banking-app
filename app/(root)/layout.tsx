import React, { ReactNode } from "react";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return <main>SIDEBAR{children}</main>;
};

export default RootLayout;
