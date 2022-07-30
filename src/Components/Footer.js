import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../Styles/Footer.css";

function Footer() {
  return (
    <body>
    <div id="page-container">
    <div id="content-wrap">
      <footer id="footer">
      <div className="socialMedia">
        <InstagramIcon /> 
        <TwitterIcon />
        <FacebookIcon />
      </div>
      <p>&copy; 2022 squeakycleangroomers.com</p>
      </footer>
    </div>
    </div>
    </body>
  
  );
}

export default Footer;