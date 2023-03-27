import React, { useEffect } from "react";
import styles from "@/styles/Empty.module.css";
import Sidebar from "./Sidebar";
import Top from "./Top";
import { useRouter } from "next/router";

const Empty = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      const path = url.replace("/Empty.js", "");
      if (shallow) {
        window.history.replaceState(null, null, path);
      } else {
        window.history.pushState(null, null, path);
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div>
      <Top />
      <Sidebar />
      <div className={styles.title}>
        <h1> GOOD DAY!</h1>
      </div>
      <div className={styles.image_body}>
        <img src="./empty_cover.png" alt="empty" />
      </div>
      <div className={styles.sub_title}>
        <p>Nothing to show</p>
        <p>It's empty here you don't have any post</p>
        <button className={styles.create_btn}>
          {" "}
          <a href="./Create">Create</a>
        </button>
      </div>
    </div>
  );
};

export default Empty;
