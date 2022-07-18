/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { signOut } from "next-auth/react";

const NavBar1 = ({ session }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="bg-gray-800">
      <div className="max-w-full px-2 mx-auto sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                // stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                // stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
            <div className="flex items-center flex-shrink-0">
              {/* <img
                className="block w-auto h-8 lg:hidden"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <img
                className="hidden w-auto h-8 lg:block"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              /> */}

              <h1 className="text-3xl font-normal tracking-wide text-white">
                InvoiceApp
              </h1>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {session && (
                  <button
                    className="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md"
                    aria-current="page"
                  >
                    Dashboard
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div className="flex items-center gap-4">
                {session && (
                  <h1 className="hidden text-base font-medium tracking-wide text-white sm:block">{`Hi, ${session.user.name}!`}</h1>
                )}
                <div>
                  <button
                    type="button"
                    onClick={() => handleMenu()}
                    className="relative z-10 flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    {session && (
                      <img
                        className="w-8 h-8 rounded-full"
                        src={session.user.image}
                        alt=""
                      />
                    )}
                  </button>
                </div>
              </div>
              {openMenu && (
                <button
                  tabindex="-1"
                  onClick={() => handleMenu()}
                  className="fixed top-0 left-0 right-0 w-full h-full bg-black cursor-default opacity-20 button-o"
                ></button>
              )}
              <div
                className={
                  openMenu
                    ? `absolute right-0 w-48 py-1 mt-2 origin-top-right  bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`
                    : `hidden`
                }
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
              >
                <button
                  className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  id="user-menu-item-0"
                >
                  Your Profile
                </button>
                <button
                  className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  id="user-menu-item-1"
                >
                  Settings
                </button>
                <button
                  onClick={() => signOut()}
                  className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  id="user-menu-item-2"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {session && (
            <button
              className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md"
              aria-current="page"
            >
              Dashboard
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar1;
