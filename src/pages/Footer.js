import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        {/* <ul className={styles.footer_icon_social_media}>
          <li className>
            <img src="/fb.png" alt class="footer_icon_social_media_fb"></img>
          </li>
          <li>
            <img
              src="/instag.png"
              alt
              class="footer_icon_social_media_instag"
            ></img>
          </li>
          <li>
            <img
              src="/linkedin.png"
              alt
              class="footer_icon_social_media_linkedin"
            ></img>
          </li>
          <li>
            <img src="/yt.png" alt class="footer_icon_social_media_yt"></img>
          </li>
          <li>
            <img
              src="/twitter.png"
              alt
              class="footer_icon_social_media_twitter"
            ></img>
          </li>
        </ul> */}
        <div className={styles.copyright}>
          <p>
            ©2022 <span></span>
          </p>
        </div>
        <div className={styles.terms}>
          <a>Privacy Policy</a> | <a>Terms and Conditions</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
