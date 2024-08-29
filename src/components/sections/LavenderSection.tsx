"use client";

import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function LavenderSection(props: Props) {
  return (
    <section className="h-[80vh] bg-gradient-to-r from-sky-100 via-white to-sky-100">
      <div className="container mx-auto h-full">{props.children}</div>
    </section>
  );
}

export default LavenderSection;
