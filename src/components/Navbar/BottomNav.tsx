"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import { useRouter } from 'next/navigation';
import BottomNotifications from './bottomNotification';

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const [show, setShow] = React.useState(false);
  const router = useRouter(); 

  const handleNavigation = (newValue: number, path: string) => {
    setValue(newValue);
    router.push(path); // Navigate to the specified path
  };

  return (
    <>
      <Box>
        <BottomNavigation
          sx={{ height: 62 }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} onClick={() => handleNavigation(0, '/home')}/>
          <BottomNavigationAction label="Jobs" icon={<BusinessCenterOutlinedIcon />} onClick={() => handleNavigation(1, '/jobs')}/>
          <BottomNavigationAction label="Notifications" icon={<NotificationsNoneOutlinedIcon />} onClick={() => setShow(!show)}/>
          <BottomNavigationAction label="More" icon={<WidgetsOutlinedIcon />} />
        </BottomNavigation>
      </Box>
      { show && <div className='absolute top-0 -translate-y-full right-1/4'><BottomNotifications/></div>}
    </>
  );
}
