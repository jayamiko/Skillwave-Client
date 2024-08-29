"use client";

import React, { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  children: ReactNode;
}

function ButtonArrow(props: Props) {
  return (
    <button className="bg-sky-500 w-48 py-2 text-white rounded-full flex items-center justify-center space-x-2 shadow-md shadow-black">
      {props.children}
      <FaArrowRight className="ml-1" />
    </button>
  );
}

export default ButtonArrow;
