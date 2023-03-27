import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "#bae8e8",
        transition: "background-color 0.2s ease-in-out",
      }}
    >
      <div
        className="1nurse-logo"
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "5%",
        }}
      >
        <img
          /* src="/1nurse-cover-logo.png" */
          style={{
            width: "190px",
            height: "55px",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        />
      </div>
      <div className={styles.menu}>
        <a href="./Create">Create</a>
        <a>Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
