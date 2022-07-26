/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { TbBrightnessUp } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import Link from "next/link";
import { useTheme } from "next-themes";
import ButtonPrimary from "../Button/ButtonPrimary";
import { Router, useRouter } from "next/router";

const NavBar1 = ({ session }) => {
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openMenueMobile, setOpenMenueMobile] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "light") {
      return (
        <div className="p-1 transition duration-300 ease-in-out delay-150 rounded-full hover:bg-gray-100 ">
          <MdDarkMode
            role="button"
            onClick={() => setTheme("dark")}
            style={{ fontSize: "1.5em" }}
          />
        </div>
      );
    } else {
      return (
        <div className="p-1 transition duration-300 ease-in-out delay-150 rounded-full">
          <TbBrightnessUp
            className="dark:hover:text-green-400"
            role="button"
            onClick={() => setTheme("light")}
            style={{ fontSize: "1.5em" }}
          />
        </div>
      );
    }
  };
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="fixed z-30 w-full bg-white dark:bg-slate-900">
      <div className="max-w-full px-2 mx-auto sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setOpenMenueMobile(!openMenueMobile)}
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
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
            <div className="flex items-center flex-shrink-0">
              <Link href="/invoices">
                <a>
                  <h1
                    className={`text-3xl font-semibold ${
                      session ? "visible" : "invisible"
                    }  font-['Open_Sans'] tracking-wide dark:text-slate-200`}
                  >
                    InvoiceApp
                  </h1>
                </a>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {session && (
                  <ButtonPrimary
                    onClick={() => router.push("/graphics")}
                    aria-current="page"
                  >
                    Graphics
                  </ButtonPrimary>
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div className="flex items-center gap-4">
                {renderThemeChanger()}

                {session && (
                  <h1 className="hidden text-base font-medium tracking-wide text-gray-900 dark:text-white sm:block">{`Hi, ${session.user.name}!`}</h1>
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
                <Link href="/profile">
                  <a>
                    <button
                      className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </button>
                  </a>
                </Link>
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
      {openMenueMobile && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 dark:bg-slate-800">
            {session && (
              <ButtonPrimary
                className="block px-3 py-2 ml-6"
                aria-current="page"
                onClick={() => router.push("/graphics")}
              >
                Graphics
              </ButtonPrimary>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar1;
