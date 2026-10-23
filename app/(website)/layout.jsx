// import { Children } from "react";
import WebNav from "../../src/components/website-page/WebNav";
import Footer from "../../src/components/website-page/Footer";
export default function WebsiteLayout({ children }) {
  return (
    <>
      <WebNav />
      {children}
      <Footer />
    </>
  );
}
