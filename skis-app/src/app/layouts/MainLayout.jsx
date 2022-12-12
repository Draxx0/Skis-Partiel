import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="w-4/5 mx-auto my-10">{children}</main>
      <footer className="w-full shadow-md p-3 flex justify-center bg-indigo-500 mt-64">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
