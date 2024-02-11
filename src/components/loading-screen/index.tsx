"use client";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-brand-general-bg h-[calc(100vh-65px)] w-12/12 grid place-content-center">
      <Progress value={progress} className="w-[50vw] md:w-[20vw] h-1" />
    </div>
  );
};

export default LoadingScreen;
