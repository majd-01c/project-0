import * as React from "react";
import {
  styled,
  useTheme,
  alpha,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import {
  Box,
  CssBaseline,
  Typography,
  Toolbar,
  IconButton,
  List,
  Divider,
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

import { Link, Outlet, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme as useCustomTheme } from "./context/ThemeContext";

import ThemeToggle from "./features/constants/ThemeToggle";
import LanguageSelectorWithFlags from "./i18n/locales/LanguageSelectorWithFlags";
import ScrollToTopButton from "./features/constants/ScrollToTopButton";
import { getSidebarData } from "./features/constants/sideBarData";

import logo from "./assets/m3ak-logo.png";

/* ================= CONSTANTS ================= */

const drawerWidth = 260;

/* ================= STYLES ================= */

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width"),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  width: `calc(${theme.spacing(9)} + 1px)`,
  transition: theme.transitions.create("width"),
  overflowX: "hidden",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 2),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.paper, 0.9),
  color: theme.palette.text.primary,
  boxShadow: "none",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  whiteSpace: "nowrap",
  ...(open
    ? { ...openedMixin(theme), "& .MuiDrawer-paper": openedMixin(theme) }
    : { ...closedMixin(theme), "& .MuiDrawer-paper": closedMixin(theme) }),
}));

/* ================= COMPONENT ================= */

export default function PrivateLayout() {
  const theme = useTheme();
  const { darkMode } = useCustomTheme();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const isRTL = i18n.language === "ar";
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const muiTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: "#4A90E2" },
        },
        direction: isRTL ? "rtl" : "ltr",
      }),
    [darkMode, isRTL]
  );

  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {/* ===== APP BAR ===== */}
        <AppBar position="fixed">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>

              <Box
                component="img"
                src={logo}
                alt="M3AK"
                sx={{ height: 40, ml: 1, cursor: "pointer" }}
                onClick={() => navigate("/")}
              />

              <Typography variant="h6" sx={{ ml: 2, fontWeight: 600 }}>
                M3AK
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <LanguageSelectorWithFlags />
              <ThemeToggle />

              <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                <Avatar />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem>
                  <AccountCircleIcon fontSize="small" sx={{ mr: 1 }} />
                  {t("profile")}
                </MenuItem>
                <Divider />
                <MenuItem>
                  <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
                  {t("logout")}
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>

        {/* ===== DRAWER ===== */}
        <Drawer variant="permanent" open={open} anchor={isRTL ? "right" : "left"}>
          <DrawerHeader>
            <Typography fontWeight={600}>{t("menu")}</Typography>
            <IconButton onClick={() => setOpen(false)}>
              {isRTL ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>

          <Divider />

          <List>
            {getSidebarData().map((item, index) => (
              <Tooltip title={t(item.text)} key={index} placement="right">
                <ListItem disablePadding>
                  <ListItemButton component={Link} to={item.path}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={t(item.text)} />
                  </ListItemButton>
                </ListItem>
              </Tooltip>
            ))}
          </List>
        </Drawer>

        {/* ===== MAIN CONTENT ===== */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
          <ScrollToTopButton />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
