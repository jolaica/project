import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

/* import { useRouter } from "next/router";
import { useEffect } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      const path = url.replace("/directory-name", "");
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

  return <Component {...pageProps} />;
} */
