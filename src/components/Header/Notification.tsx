import * as React from "react";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

export default function Notification() {
  return (
    <Dropdown>
      <MenuButton
        sx={{
          borderRadius: 9999,
        }}
        variant="plain"
        // color="primary"
        size="lg"
      >
        <div className="absolute">
          <NotificationsNoneOutlinedIcon />
        </div>
      </MenuButton>
      <Menu
        sx={{ borderRadius: 20, paddingTop: 0 }}
        invertedColors
        variant="plain"
        color="primary"
        size="sm"
      >
        <div className="flex items-center bg-[#9333EA] h-[72px]">
          <div className="py-4 pl-6 pr-4 text-base text-white font-medium">
            Notifications
          </div>
        </div>
        <MenuItem>
          <div className="flex flex-auto cursor-pointer px-5 py-5 pl-6 w-[360px]">
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="flex flex-col flex-auto">
              <div className="text-[#262626] text-sm">
                Welcome to JobzMall, Yoshito! We have sent you a verification
                email. Please confirm your email to get the most out of
                JobzMall.
              </div>
              <div className="text-[#737373] leading-none text-xs mt-2">
                Sep 06, 11:42 AM
              </div>
            </div>
          </div>
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}
