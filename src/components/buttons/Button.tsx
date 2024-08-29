"use client";

import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Button(props: Props) {
  return (
    <button className="bg-orange-bright px-8 py-2 rounded-full font-medium">
      {props.children}
    </button>
  );
}

export default Button;
