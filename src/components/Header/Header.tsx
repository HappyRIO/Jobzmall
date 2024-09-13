"use client"
import React, { useState } from "react"
import Image from "next/image";

// import HeaderDropdown from "./Dropdown";
import HomeHeaderdropdown from "./HomeHeaderdropdown";
// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
// // import PersonAdd from '@mui/icons-material/PersonAdd';
// // import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';

// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
// import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Notification from "./Notification";
import Message from "./Message";
import SearchBox from "./SearchBox";
import Account from "./Account";

export default function Header() {
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
      <div className="flex justify-between items-center mx-auto 1md:block md:pl-16 px-8 h-[76px] gap-8 bg-white">
        <div className="">
          <Image className="min-w-[180px] max-w-48" src={"/logo.png"} alt="" width={320} height={200} />
        </div>
        <div className="hidden md:flex w-full relative">
              {/* <SearchOutlinedIcon className="absolute pl-2 top-1/2 text-3xl 1translate-x-1/2 -translate-y-1/2" /> */}
              {/* <input className="flex w-full p-2 pl-10  rounded-full bg-gray-200 outline-blue-200 outline-8" aria-autocomplete="both" aria-labelledby="autocomplete-17-label" id="autocomplete-17-input" placeholder="Search jobs, companies, and more..." type="search"></input> */}
              <SearchBox/>
        </div>
        <div className="flex items-center justify-end pl-2 ml-auto space-x-2 xl:col-span-1">
          <div className="hidden lg:block"><HomeHeaderdropdown/></div>
          <div className="z-10"></div>
          <Message mOpen={mOpen} isMOpen={isMOpen}/>
          <div className="cursor-pointer md:block hidden" onClick={() => handleMessage()}><MapsUgcOutlinedIcon/></div>
          <div className="md:block hidden"><Notification/></div>
          <div className="cursor-pointer md:hidden block"><SearchOutlinedIcon/></div>
          <Account/>
          {/* ----------------account -------------------- */}
          {/* <div className="flex w-8 h-8 justify-center">
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>Y</Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleClose}>
                <AccountCircleOutlinedIcon sx={{color: '#737373'}}  fontSize="small"/> <p className="pl-4 text-sm">Profile</p>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <SettingsOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <p className="text-sm">Settings</p>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <CampaignOutlinedIcon sx={{color: '#737373'}} /> <p className="pl-3 text-sm">Help & Support</p>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <BrushOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <p className="text-sm">Appearence</p>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <p className="text-sm">Sign out</p>
              </MenuItem>
            </Menu>
          </div> */}
        </div>
      </div>
    </>
  );
}
