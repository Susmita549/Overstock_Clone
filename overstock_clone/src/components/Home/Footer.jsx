import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerInfo}>
        <div className={styles.infoItems}>
          <p>MY ACCOUNT</p>
          <a href="/">Orders & Returns</a>
          <a href="/">Email Preferences</a>
          <a href="/">Account Settings</a>
        </div>
        <div className={styles.infoItems}>
          <p>LET US HELP</p>
          <a href="/">Contact Customer Care</a>
          <a href="/">Shipping Information</a>
          <a href="/">Return Policy</a>
          <a href="/">International Help</a>
          <a href="/">Accessibility</a>
        </div>
        <div className={styles.infoItems}>
          <p>COMPANY INFORMATION</p>
          <a href="/">About Overstock™</a>
          <a href="/">Contact Us</a>
          <a href="/">Careers</a>
          <a href="/">Investor Relations</a>
          <a href="/">Sell Your Products</a>
          <a href="/">Supply Chain Transparency</a>
        </div>
        <div className={styles.infoItems}>
          <p>MORE WAYS TO SHOP</p>
          <a href="/">Tips & Ideas</a>
          <a href="/">Deals</a>
          <a href="/">Clearance</a>
          <a href="/">New Arrivals</a>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.copyright_left}>
          <p>© Copyright 2022, Overstock.com®, Inc.<br/> 799 Coliseum Way Midvale, UT
          84047 | 1-800-843-2446</p>
        </div>
        <div className={styles.copyright_right}>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>*Promotion Terms</li>
          <li>Ship to:INDIA</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
