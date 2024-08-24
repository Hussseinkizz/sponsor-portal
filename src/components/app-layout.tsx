"use client";

// import { Toaster } from "sonner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppHeader } from "./app-header";
import { AppFooter } from "./app-footer";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Splash } from "./splash";

interface Props {
  children: React.ReactNode;
}

const AppLayout = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const pathName: string = location.pathname;
  const authPaths = ["/login", "/signup"];
  let isAuthPath = false;

  authPaths.forEach((authPath) => {
    if (pathName.startsWith(authPath)) {
      isAuthPath = true;
    }
  });

  useEffect(() => {
    // auto remove loader for now till auth is fixed
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    let user = null;

    if (!isLoading && !user && !isAuthPath) {
      navigate("/login");
    } else {
      // setIsLoading(false);
    }

    return () => clearTimeout(timeoutId);
  }, [location.pathname, navigate]);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <main
      className={
        "relative flex h-dvh min-h-screen flex-col items-start justify-between bg-gray-50 text-gray-800"
      }
    >
      {/* {!isAuthPath && <AppHeader />} */}
      {/* The Page Content */}
      <section className="container relative flex w-full flex-col items-start justify-start">
        {props.children}
      </section>
      {/* {!isAuthPath && <AppFooter />} */}
      {/* The Toast Layer */}
      {/* <Toaster position="top-center" /> */}
      <ToastContainer autoClose={5000} />
    </main>
  );
};

export default AppLayout;
