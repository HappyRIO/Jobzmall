"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import Tooltip from '@mui/joy/Tooltip';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function MiniDrawer() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="hidden md:block">
      <Box className="w-20" sx={{ display: "flex", width: 80 }}>
        <Drawer
          className="w-20"
          sx={{ width: 80 }}
          variant="permanent"
          open={open}
        >
          <DrawerHeader sx={{ width: 80 }}>
            <IconButton onClick={handleDrawerClose}>
              {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
            </IconButton>
          </DrawerHeader>
          {/* <Divider /> */}
          <List className="w-20">
            {[
              "Home",
              "Jobs",
              "Video Resumes Studio",
              "My Resumes",
              "Career Coaching",
              "Calendar",
              "More",
            ].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      minWidth: 80,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {index == 0 && (
                      <Tooltip
                        title={text}
                        placement="right"
                        size="lg"
                        color="primary"
                      >
                        <div onClick={() => router.push("/jobs")}>
                          <InboxOutlinedIcon />
                        </div>
                      </Tooltip>
                    )}
                    {index == 1 && (
                      <Tooltip
                        title={text}
                        placement="right"
                        size="lg"
                        color="primary"
                      >
                        <div onClick={() => router.push("/jobs")}>
                          <BusinessCenterOutlinedIcon />
                        </div>
                      </Tooltip>
                    )}
                    {index == 2 && (
                      <Tooltip
                        title={text}
                        placement="right"
                        size="lg"
                        color="primary"
                      >
                        <div onClick={() => router.push("/video-resume-studio/questionnaire")}>
                          <VideocamOutlinedIcon />
                        </div>
                      </Tooltip>
                    )}
                    {index == 3 && (
                      <Tooltip
                        title={text}
                        placement="right"
                        size="lg"
                        color="primary"
                      >
                        <div onClick={() => router.push("/my-resumes")}>
                          <EditOutlinedIcon />
                        </div>
                      </Tooltip>
                    )}
                    {index == 4 && (
                      <Tooltip
                        title={text}
                        placement="right"
                        size="lg"
                        color="primary"
                      >
                        <div onClick={() => router.push("/genius")}>
                          <PeopleAltOutlinedIcon />
                        </div>
                      </Tooltip>
                    )}
                    {index == 5 && (
                      <Tooltip
                        title={text}
                        placement="right"
                        size="lg"
                        color="primary"
                      >
                        <div onClick={() => router.push("/calendar")}>
                          <EventOutlinedIcon />
                        </div>
                      </Tooltip>
                    )}
                    {index == 6 && (
                      <Tooltip
                        title={text}
                        placement="right"
                        size="lg"
                        color="primary"
                      >
                        <WidgetsOutlinedIcon />
                      </Tooltip>
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </div>
  );
}
