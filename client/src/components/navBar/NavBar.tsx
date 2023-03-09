//redux
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { Box, IconButton, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Badge } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
//redux
import { productActions } from "../../redux/slices/product";
import { searchActions } from "../../redux/slices/search";

//menu item

import MenuItem from "@mui/material/MenuItem";

import { Button } from "@mui/material";

import car2 from "../../assets/newcar4.jpg";
import "./NavBar.css";
import Home from "@mui/icons-material/Home";
import { userActions } from "../../redux/slices/user";

export default function NavBar() {
  const navigate = useNavigate();
  // MENU
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  //const open = Boolean(anchorEl);
  const isLogin = useSelector((state: RootState) => state.user.isLogin);

  const cartState = useSelector((state: RootState) => state.cart.carts);
  const favState = useSelector(
    (state: RootState) => state.product.favouriteList
  );
  const productList = useSelector(
    (state: RootState) => state.product.productList
  );

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  /* const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };
  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  } */
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const userInput = useSelector((state: RootState) => state.search.userInput);

  const dispatch = useDispatch();
  const userInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(searchActions.getUserInput(event.target.value));
    searchHandler();
  };
  const searchHandler = () => {
    if (userInput) {
      const filterResult = productList.filter((product) =>
        product.productName.toLowerCase().includes(userInput.toLowerCase())
      );
      dispatch(productActions.getProductFilterData(filterResult));
    } else {
      dispatch(productActions.getProductData(productList));
    }
  };
  const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchHandler();
    }
  };
  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userIdnew");
    localStorage.removeItem("cart");
    localStorage.removeItem("orderDetails");
    localStorage.removeItem("totalPrice");
    dispatch(userActions.loginHandler(false));
    navigate("/login");
  };
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <Link className="link" to="/login">
        <MenuItem onClick={handleMenuClose} sx={{ color: "#000" }}>
          Login
        </MenuItem>
      </Link>
      <Link className="link" to="/register">
        <MenuItem onClick={handleMenuClose} sx={{ color: "#000" }}>
          Register
        </MenuItem>
      </Link>
    </Menu>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  if (isLogin) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="inherit"
          sx={{ backgroundColor: "aliceblue", height: "70px" }}>
          <Toolbar>
            <IconButton sx={{ color: "inherit" }} component={Link} to="/">
              <img src={car2} alt="car-icon" height="50px" width="50px" />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontSize: "25px", display: { xs: "none", sm: "block" } }}>
              <Box component="span" sx={{ color: "black" }}>
                Cars
              </Box>
            </Typography>
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
              <TextField
                id="standard-basic"
                label="Search..."
                variant="standard"
                helperText="Enter your Car Name"
                onChange={userInputHandler}
                onKeyDown={keyDownHandler}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <div className="navbar-icons">
                <Link to="/products">
                  <FormatListBulletedIcon sx={{ color: "ButtonText" }} />
                </Link>
                <IconButton color="inherit" component={Link} to="/favourite">
                  <Badge badgeContent={favState.length} color="error">
                    <FavoriteIcon />
                  </Badge>
                </IconButton>
                <IconButton component={Link} to="/cart" color="inherit">
                  <Badge badgeContent={cartState.length} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
                <Button
                  component={Link}
                  to="/userdetails"
                  sx={{ color: "inherit" }}>
                  Profile
                </Button>
                <Button component={Link} to="/orders" sx={{ color: "inherit" }}>
                  order
                </Button>

                <Button onClick={logoutHandler} sx={{ color: "inherit" }}>
                  Logout
                </Button>
              </div>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="inherit"
        sx={{ backgroundColor: "aliceblue", height: "80px" }}>
        <Toolbar>
          <IconButton sx={{ color: "inherit" }} component={Link} to="/">
            <img src={car2} alt="car-icon" height="50px" width="50px" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontSize: "25px", display: { xs: "none", sm: "block" } }}>
            <Box component="span" sx={{ color: "black" }}>
              Cars
            </Box>
          </Typography>
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
            <TextField
              id="standard-basic"
              label="Search..."
              variant="standard"
              helperText="Enter your Car Name"
              onChange={userInputHandler}
              onKeyDown={keyDownHandler}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <IconButton component={Link} to="/cart" color="inherit">
            <Badge badgeContent={cartState.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <Box>
            <div className="navbar-icons">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                component={Link}
                to="/">
                <Home />
              </IconButton>
              <Link to="/products">
                <FormatListBulletedIcon sx={{ color: "ButtonText" }} />
              </Link>

              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit">
                <AccountCircle />
              </IconButton>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
