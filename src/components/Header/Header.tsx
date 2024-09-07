"use client"
import Image from "next/image";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import HeaderDropdown from "./Dropdown";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center px-4 mx-auto 1md:block pl-16 py-4 h-[76px] gap-8">
        <div>
          <Image src={"/logo.png"} alt="" width={108} height={40} />
        </div>
        <div className="flex w-full relative">
              <SearchOutlinedIcon className="absolute pl-2 top-1/2 text-3xl 1translate-x-1/2 -translate-y-1/2" />
              <input className="flex w-full p-2 pl-10  rounded-full bg-gray-200 outline-blue-200 outline-8" aria-autocomplete="both" aria-labelledby="autocomplete-17-label" id="autocomplete-17-input" placeholder="Search jobs, companies, and more..." type="search"></input>
        </div>
        <div className="flex items-center justify-end pl-2 ml-auto space-x-2 xl:col-span-1">
          <HeaderDropdown/>
          <NotificationsNoneOutlinedIcon/>
          <MapsUgcOutlinedIcon/>
          <div className="w-8 h-8">
            <div className="flex items-center justify-center w-full h-full overflow-hidden text-lg font-semibold text-center text-gray-600 uppercase bg-gray-200 rounded-full group-hover:bg-gray-400 dark:group-hover:bg-gray-900 dark:bg-gray-700 dark:text-gray-200 ng-star-inserted">
              {" "}
              Y{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
