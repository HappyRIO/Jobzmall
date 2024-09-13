"use client";
import { useState } from "react";
import DrawerNavigation from "./DrawerNavigation";
import VideoModal from "./videoModal";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const StoryStudio = () => {
  const [subtitle, setSubtitle] = useState("");
  const [click, setClick] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [mode, setMode] = useState(true)

  const incStep = () => {
    if(mode){
        if(activeStep < 33) setActiveStep((activeStep) => activeStep + 1)
    } else {
        if(activeStep < 9) setActiveStep((activeStep) => activeStep + 1)
    }
  }
  const decStep = () => {
    if(activeStep > 0) setActiveStep((activeStep) => activeStep - 1)
  }
  return (
    <>
      <div className="bg-slate-900 min-h-screen flex flex-col">
        <div className="flex w-full items-center justify-between order-2 md:order-1 px-6 py-4 border-b md:order-0 md:pl-6 md:pr-8 lg:border-b-0 dark:bg-transparent max-md:border-none h-[73px]">
          <DrawerNavigation setSubtitle={setSubtitle} setClick={setClick} activeStep={activeStep} setActiveStep={setActiveStep} mode={mode} setMode={setMode} />
          <div className="px-5 py-2 text-white text-sm cursor-pointer">
            Done
          </div>
        </div>
        <VideoModal subtitle={subtitle} setClick={setClick} click={click} />
        <div className="absolute right-10 flex flex-col h-full items-center justify-center mx-auto space-y-3">
          <button
            className=" bg-black bg-opacity-80 flex-0 rounded-full"
            onClick={decStep}
          >
            <KeyboardArrowUpIcon className={activeStep !== 0 ? "text-white" : ""} fontSize="large"/>
          </button>
          <button
            className=" bg-black bg-opacity-80 flex-0 rounded-full"
            onClick={incStep}
          >
            <KeyboardArrowDownIcon className={ mode ? (activeStep !== 33 ? "text-white" : "") : (activeStep !== 9 ? "text-white" : "") }  fontSize="large"/>
          </button>
        </div>
      </div>
    </>
  );
};

export default StoryStudio;
