/* eslint-disable @next/next/no-img-element */
const NavBar = ({ guest }) => {
  return (
    <nav className="fixed z-10 flex items-center justify-between w-full py-3 bg-orange-200 shadow-lg ">
      <div className="flex flex-wrap items-center justify-between w-full px-6">
        <h1 className="text-2xl text-orange-800">InvoiceApp</h1>
        {!guest && (
          <div className="w-[45px]  h-[45px] overflow-hidden rounded-full">
            <img
              className="object-cover w-full h-full"
              src="./fotogithub.JPG"
              alt="profile"
            ></img>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
