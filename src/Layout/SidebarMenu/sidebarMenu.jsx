import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "./sidebar.css";
import LogoSrc from "../../assets/images/altask-logo.png";
import Tooltip from "@mui/material/Tooltip";
import CottageIcon from "@mui/icons-material/Cottage";
import MapIcon from "@mui/icons-material/Map";
import JavascriptIcon from "@mui/icons-material/Javascript";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";
import { Link, Outlet } from "react-router-dom";
import AccountMenu from "./Account";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SidebarMenu() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const sidebarData = [
    {
      title: "usestate",
      icon: <CottageIcon />,
      link: "/dashboard/usestate",
      tooltip: "usestate",
    },
    {
      title: "map | Filter | Reduce",
      icon: <MapIcon />,
      link: "/dashboard/map",
      tooltip: "Map|Filter|Reduce",
    },
    {
      title: "Javascript Refresher",
      icon: <JavascriptIcon />,
      link: "/dashboard/javascript-refresher",
      tooltip: "Javascript Refresher",
    },
    {
      title: "useeeffect",
      icon: <BlurCircularIcon />,
      link: "/dashboard/useeeffect",
      tooltip: "useeeffect",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className="navbar-head">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div className="navbar-in">
            <div className="main-logo">
              <img src={LogoSrc} alt="" />
            </div>
            <div className="LO">
              <AccountMenu />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon sx={{ color: "white" }} />
            ) : (
              <ChevronLeftIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <List className="sidebar-head">
          {sidebarData.map((item, index) => (
            <div
              key={index}
              className={`side-list ${index === 1 ? "active" : ""}`}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <Tooltip title={item.tooltip} placement="right">
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                      className="sidebar-icon"
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      sx={{ opacity: open ? 1 : 0 }}
                      className="sidebar-text"
                    >
                      <Link to={item.link}>{item.title}</Link>
                    </ListItemText>
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            </div>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="main-in">
        <DrawerHeader />
        <Typography paragraph>
          ads
          <Outlet />
        </Typography>
      </Box>
    </Box>
  );
}
