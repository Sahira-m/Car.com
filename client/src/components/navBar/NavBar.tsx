import { Box, IconButton, InputBase, Tooltip, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ShoppingBag } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
//MUI
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
export default function NavBar() {
  const userEmail: string = "";
  const navigate = useNavigate();
  // MENU
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        p: 1,
        width: { xs: "100%", md: "90%", lg: "80%" },
        margin: { md: "0 auto" },
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              display: { xs: "none", sm: "block" },
              fontFamily: "inherit",
              mx: 2,
              color: "#F1641D",
              fontWeight: "bold",
            }}>
            VEHICLES
          </Typography>
          <Typography
            variant="h5"
            sx={{
              display: { xs: "block", sm: "none" },
              fontFamily: "inherit",
              mx: 2,
              color: "#F1641D",
              fontWeight: "bold",
            }}></Typography>
        </Box>
        <Box
          component="form"
          sx={{
            p: "2px 4px",
            display: { xs: "none", sm: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            flex: "1",
            flexGrow: "1",
            position: "relative",
            top: "2px",
            width: 400,
          }}>
          <InputBase
            sx={{ ml: 1, flex: 1, flexGrow: 1 }}
            placeholder="Search for anything..."
            inputProps={{ "aria-label": "Search for anything..." }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "10px",
            mx: 2,
          }}>
          <Tooltip title="Products">
            <IconButton component={Link} to="/products">
              <FormatListBulletedIcon sx={{ color: "ButtonText" }} />
            </IconButton>
          </Tooltip>
          <Typography
            variant="subtitle2"
            sx={{
              textDecoration: "none",
              color: "black",
              fontWeight: { sx: "lighter", sm: "bold" },
            }}
            component={Link}
            to="/login">
            Sign in
          </Typography>

          <Tooltip title="Favorites">
            <IconButton component={Link} to="/favorites">
              <FavoriteBorderIcon sx={{ color: "black" }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Cart">
            <IconButton component={Link} to="/cart">
              <ShoppingBag sx={{ color: "black" }} />
            </IconButton>
          </Tooltip>
          <Typography
            title="UserDetails"
            variant="subtitle2"
            sx={{
              textDecoration: "none",
              color: "black",
              fontWeight: { sx: "lighter", sm: "bold" },
            }}
            component={Link}
            to="/userdetails">
            User Details
          </Typography>
          <Tooltip
            title="Account settings"
            style={
              userEmail === "" ? { display: "none" } : { display: "inherit" }
            }>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}>
              <AccountCircleIcon sx={{ color: "ButtonShadow" }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
}
