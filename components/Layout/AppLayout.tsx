import NavBar from "../NavBar";

const AppLayout = ({ children, guest }) => {
  return (
    <div className="h-full min-w-full min-h-screen bg-orange-50">
      <NavBar guest={guest}></NavBar>
      <main className="p-14">{children}</main>
    </div>
  );
};

export default AppLayout;
