import React from "react";
import "./styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="footer">
      
      <div className="social-links">
        <a href="https://www.facebook.com/profile.php?id=100065962462559">
          <FacebookIcon className="social-link" />
        </a>
        <a href="mailto:amitrajjaynagar2002@gmail.com">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://x.com/AmitKum38025495">
          <TwitterIcon className="social-link" />
        </a>
        <a href="https://www.instagram.com/the_amit47/">
          <InstagramIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
