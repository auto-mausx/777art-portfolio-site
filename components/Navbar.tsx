import * as React from "react";
import { useState } from "react";

import Link from "next/link";

import { ListMobile } from "./ListMobile";

import { AnimatePresence } from "framer-motion";
import { data } from "../mock/mock";

export const Navbar: React.SFC = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <nav className="py-8 col-span-10 col-start-2 col-end-12 flex flex-row justify-between items-center">
        <Link href="/" passHref>
          <span className="font-extralight text-d-green text-2xl cursor-pointer">
            {data.name}
          </span>
        </Link>
        <ul className="hidden md:flex flex-row items-center gap-2">
          <li className="py-1 px-2 text-sm font-light text-d-green hover:text-blue-200">
            <Link href="/" passHref>
              <span className="cursor-pointer">Home</span>
            </Link>
          </li>
          <li className="py-1 px-2 text-sm font-light text-d-green hover:text-blue-200">
            <Link href="/portfolio" passHref>
              <span className="cursor-pointer">Portfolio</span>
            </Link>
          </li>
          <li className="py-1 px-2 text-sm font-light text-d-green hover:text-blue-200">
            <Link href="/bio" passHref>
              <span className="cursor-pointer">Bio</span>
            </Link>
          </li>
          <li className="py-1 px-2 text-sm font-light text-d-green hover:text-blue-200">
            <Link href="/contact" passHref>
              <span className="cursor-pointer">Contact</span>
            </Link>
          </li>
          <li className="py-1 px-2 text-sm font-extralight grid place-items-center">
            <a href={data.facebook_link} className="leading-none">
              <svg
                className="fill-current stroke-current text-d-green hover:text-blue-200 w-4 h-4"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook</title>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </li>
          <li className="py-1 px-2 text-sm font-extralight">
            <a href={data.instagram_link} className="leading-none text-red-500">
              <svg
                className="fill-current stroke-current text-d-green hover:text-blue-200 w-4 h-4"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>
          </li>
        </ul>
        <button
          onClick={() => {
            setIsMobile(!isMobile);
          }}
          className={`${
            isMobile ? "fixed" : "block"
          } right-6 sm:right-8 md:hidden z-20 h-8 w-8 focus:outline-none`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current text-gray-600 hover:text-gray-900 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>
      <AnimatePresence>{isMobile && <ListMobile />}</AnimatePresence>
    </>
  );
};
