"use client"
import React, { useState } from "react"
import Image from "next/image";

import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import Message from "../Header/Message";
import Notification from "../Header/Notification";
import NavTabs from "./Tab";
import SearchJobs from "./SearchJobs";
import SearchLocation from "./SearchLocation";
import Account from "../Header/Account";

interface ChildProps {
  setFilter : React.Dispatch<React.SetStateAction<string>>;
}

const JobsHeader: React.FC<ChildProps> = ({setFilter}) => {
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const [ mOpen, isMOpen ] = useState(false);
  const handleMessage = () => {
    isMOpen(!mOpen)
  } 

  return (
    <>
    <div className="flex flex-col 1items-center justify-center px-5">
      <div className="flex justify-between items-center md:pl-16 md:px-8 h-[76px] gap-8">
        <div className="">
          <Image className="min-w-[180px] max-w-44 max-h-[76px]" src={"/logo.png"} alt="" width={320} height={150} />
        </div>
        <div className="flex max-md:flex-col w-full relative gap-3 max-md:absolute max-md:top-32 max-md:px-4 max-md:mt-4 max-md:pr-10">
              <div className="relative md:w-1/2"><SearchJobs setFilter={setFilter}/></div>
              <div className="relative md:w-1/2"><SearchLocation /></div>   
        </div>
        <div className="flex items-center justify-end pl-2 ml-auto space-x-2 xl:col-span-1">
          <div className="z-10"></div>
          <Message mOpen={mOpen} isMOpen={isMOpen}/>
          <div className="cursor-pointer md:block hidden" onClick={() => handleMessage()}><MapsUgcOutlinedIcon/></div>
          <div className="md:block hidden"><Notification/></div>
          <div className="cursor-pointer md:hidden block"><SearchOutlinedIcon/></div>
          <Account/>
        </div>
      </div>
      <div className="flex justify-center self-center">
        <NavTabs/>
      </div>
      </div>
    </>
  );
}


export default JobsHeader;