import NavBar from "./NavBar";

const AppLayout = ({ children }) => {
  return (
    <div className="h-full min-h-screen bg-[#FAFAFA]">
      <NavBar></NavBar>
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
