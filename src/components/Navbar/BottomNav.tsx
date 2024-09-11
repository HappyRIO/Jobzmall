"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import Notification from '../Header/Notification';
import { useRouter } from 'next/navigation';

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const router = useRouter(); // Initialize useRouter

  const handleNavigation = (newValue: number, path: string) => {
    setValue(newValue);
    router.push(path); // Navigate to the specified path
  };

  return (
    <Box>
      <BottomNavigation
        sx={{ height: 62 }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} onClick={() => handleNavigation(0, '/')}/>
        <BottomNavigationAction label="Jobs" icon={<BusinessCenterOutlinedIcon />} onClick={() => handleNavigation(1, '/Jobs')}/>
        <BottomNavigationAction label="Jobs" icon={<Notification />} />
        <BottomNavigationAction label="More" icon={<WidgetsOutlinedIcon />} />
      </BottomNavigation>
    </Box>
  );
}
