import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.copyright}>
          <p>
            ©2022 <span></span>
          </p>
        </div>
        {/* <div className={styles.terms}>
          <a>Privacy Policy</a> | <a>Terms and Conditions</a>
        </div> */}
      </footer>
    </div>
  );
};

export default Footer;
