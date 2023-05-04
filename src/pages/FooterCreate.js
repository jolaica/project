import styles from "@/styles/FooterCreate.module.css";

const Footer = () => {
  return (
    <div className={styles.body}>
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
