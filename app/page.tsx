"use client";
import Presentation from "@/components/PresentationComponents/Presentation";
import { useViewStore } from "@/store/ViewStore/useViewStore";
import React from "react";

const Home: React.FC = () => {
  const { view } = useViewStore();

  return (
    <div className="flex flex-col items-center">
      {view.view === "presentation" ? <Presentation /> : null}
    </div>
  );
};

export default Home;
