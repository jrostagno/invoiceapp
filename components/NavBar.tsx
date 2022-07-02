/* eslint-disable @next/next/no-img-element */
const NavBar = () => {
  return (
    <nav className="fixed z-10 flex items-center justify-between w-full py-3 text-gray-500 bg-gray-100 shadow-lg hover:text-gray-700 focus:text-gray-700">
      <div className="flex flex-wrap items-center justify-between w-full px-6">
        <h1 className="text-2xl">Facturacion AFIP</h1>
        <div className="w-[45px] h-[45px] overflow-hidden rounded-full">
          <img
            className="object-cover w-full h-full"
            src="./fotogithub.JPG"
            alt="profile"
          ></img>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
