import * as React from "react";

import Link from "next/link";
import Image from "next/image";
import mainImage from '../mock/asset2.jpg';

// Using require as normal import causes typescript error
const Fade = require("react-reveal/Fade");
import { data } from "../mock/mock";

const bioImageLoader = (props: any) => {
  return props.src.toString();
};

export const Bio: React.SFC = () => {
  return (
    <>
      <section className="py-8 col-span-10 col-start-2 col-end-12 text-center text-d-green font-light">
        <Image
          loader={bioImageLoader}
          src={mainImage}
          alt="Picture for Bio"
          objectFit="contain"
          width={1200}
          height={600}
        />
        <Fade cascade>
          <h1 className="text-xl my-6 w-full md:w-4/5 text-center mx-auto">
            What am I about?
          </h1>
          <p className="text-base my-6 w-full md:w-4/5 text-justify mx-auto break-normal whitespace-normal">
            {data.aboutme_para1}
          </p>
          <p className="text-base my-6 w-full md:w-4/5 text-justify mx-auto break-normal whitespace-normal">
            {data.aboutme_para2}
          </p>
        </Fade>
        <p className="underline cursor-pointer text-sm w-full md:w-4/5 text-center mx-auto hover:text-d-purple">
          <Link href="/admin">Add content</Link>
        </p>
        <Link href="/contact" passHref>
          <button className="text-d-green hover:text-d-purple my-6 bg-gray-600 hover:bg-d-green px-8 py-4 focus:outline-none">
            Get in touch
          </button>
        </Link>
      </section>
    </>
  );
};
