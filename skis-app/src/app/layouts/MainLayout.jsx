import Navbar from "../components/Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="w-4/5 mx-auto my-10">{children}</main>
    </>
  );
};

export default MainLayout;
