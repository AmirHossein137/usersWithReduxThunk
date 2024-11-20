import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto px-3 w-full min-h-screen">
        <Navbar />
      {children}
      <Toaster />
    </div>
  );
};

export default Layout;
