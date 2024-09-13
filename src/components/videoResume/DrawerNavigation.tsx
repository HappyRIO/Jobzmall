"use client";
import * as React from "react";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import SegmentIcon from "@mui/icons-material/Segment";
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import VerticalStepper from "./stepper";
import { coachings, mostPopulars } from '@/data/resumequestion';

interface DrawerProps {
  setSubtitle: React.Dispatch<React.SetStateAction<string>>;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerNavigation: React.FC<DrawerProps> = ({ setSubtitle, setClick, activeStep, setActiveStep, mode, setMode }) => {
  const [open, setOpen] = React.useState(false);
  // const [mode, setMode] = React.useState(true)
  // const [activeStep, setActiveStep] = React.useState(0);

  let title, description, index;
  if(mode){
    title = mostPopulars[activeStep].name
    description = mostPopulars[activeStep].content
    index = 34
    setSubtitle(description)
  } else {
    title = coachings[activeStep].name
    description = coachings[activeStep].content
    index = 10
    setSubtitle(description)
  }

  const handleMode = () => {
    setMode(!mode);
    setActiveStep(0);
  }
  
  return (
    <React.Fragment>
      <IconButton
        className="text-white"
        variant="plain"
        onClick={() => setOpen(true)}
      >
        <SegmentIcon />
      </IconButton>
      <Drawer sx={{backgroundColor: '#1E293B' }} open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col items-start p-8 border-b bg-slate-900">
          <div className="cursor-pointer py-0.5 px-3 rounded-full text-xs font-semibold bg-blue-500 text-blue-100 dark:text-blue-50 dark:bg-blue-500" onClick={handleMode}>
            { mode ? "Most Popular" : "Coaching"}
          </div>
          <div className="mt-3 text-xl font-semibold text-white">
            {title}
          </div>
          <div className="text-[#A3A3A3] text-sm">
            {description}
          </div>
          <div className="flex items-center mt-6 leading-5 text-md text-[#A3A3A3]">
            <HelpRoundedIcon sx={{fontSize: 18 }}/>
            <div className="ml-1.5 text-[13px]">{index}{" "}Questions </div>
          </div>
        </div>
        <div className="px-8 py-2 bg-slate-900">
          <VerticalStepper activeStep={activeStep} setActiveStep={setActiveStep} mode={mode} setOpen={setOpen} setClick={setClick}/>
        </div>
      </Drawer>
    </React.Fragment>
  );
}

export default DrawerNavigation