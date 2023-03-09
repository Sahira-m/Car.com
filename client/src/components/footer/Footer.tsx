import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import "./Footer.css";
export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        color="inherit"
        sx={{ marginTop: "1px", backgroundColor: "white" }}>
        <Container maxWidth="xl" className="footer">
          <div className="icon">
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>

            <IconButton color="inherit">
              <TwitterIcon />
            </IconButton>
          </div>
          <div className="footer-text">
            <div className="shopping-tools">
              SHOPPING TOOLS
              <Typography sx={{ fontSize: "small", mt: 3 }}>
                Trade-in value
              </Typography>
              <Typography sx={{ fontSize: "small" }}>Build your car</Typography>
              <Typography sx={{ fontSize: "small" }}>
                Search inventory
              </Typography>
              <Typography sx={{ fontSize: "small" }}>Find a dealer</Typography>
            </div>
            <div className="vehicles">
              VIHICLES
              <Typography sx={{ fontSize: "small", mt: 3 }}>
                Used Cars
              </Typography>
              <Typography sx={{ fontSize: "small" }}>BMW</Typography>
              <Typography sx={{ fontSize: "small" }}>Mahindra</Typography>
              <Typography sx={{ fontSize: "small" }}>Jagore</Typography>
              <Typography sx={{ fontSize: "small" }}>Chevrolet</Typography>
              <Typography sx={{ fontSize: "small" }}>Audi</Typography>
            </div>
            <div className="helpful-links">
              CONNECTION
              <Typography sx={{ fontSize: "small", mt: 3 }}>Dealers</Typography>
              <Typography sx={{ fontSize: "small" }}>
                Mobile phone Apps
              </Typography>
              <Typography sx={{ fontSize: "small" }}>
                Connected services
              </Typography>
              <Typography sx={{ fontSize: "small" }}>Mobility</Typography>
              <Typography sx={{ fontSize: "small" }}>Email updates</Typography>
            </div>
            <div className="owners">
              OWNERS
              <Typography sx={{ fontSize: "small", mt: 3 }}>
                Owners home
              </Typography>
              <Typography sx={{ fontSize: "small" }}>
                Care & maintenance
              </Typography>
              <Typography sx={{ fontSize: "small" }}>Free Service</Typography>
              <Typography sx={{ fontSize: "small" }}>Down Payments</Typography>
            </div>
            <div className="about-us">
              ABOUT US
              <Typography sx={{ fontSize: "small", mt: 3 }}>Careers</Typography>
              <Typography sx={{ fontSize: "small" }}>About us</Typography>
              <Typography sx={{ fontSize: "small" }}>Our company </Typography>
            </div>
          </div>
          <div className="copyright-field1">
            <Typography sx={{ fontWeight: "bold" }}>Contact us</Typography>
            <Typography sx={{ fontWeight: "bold" }}>FAQ's</Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              More Information
            </Typography>
          </div>
          <div className="copyright-field2">
            <Typography sx={{ fontSize: "x-small" }}>
              ©2023 Stockhlom used Cars
            </Typography>
          </div>
        </Container>
        <Toolbar></Toolbar>
      </AppBar>
    </Box>
  );
}
