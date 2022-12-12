import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="w-4/5 mx-auto my-10">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
