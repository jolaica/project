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
      </footer>
    </div>
  );
};

export default Footer;
