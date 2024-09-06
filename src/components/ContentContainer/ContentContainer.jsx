import React from "react";

export default function ContentContainer({ children, className }) {
  return (
    <div className={`w-full  max-w-[1280px] mx-auto my-0 py-0` + className}>
      {children}
    </div>
  );
}
