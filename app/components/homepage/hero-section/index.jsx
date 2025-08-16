// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span className=" text-pink-500">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={personalData.resume}
              target="_blank"
              className="bg-gradient-to-r from-pink-500 to-violet-600 px-4 py-2 rounded-lg text-white font-semibold hover:from-pink-600 hover:to-violet-700 transition-all duration-300 flex items-center gap-2"
            >
              <MdDownload size={20} />
              Resume
            </Link>
            <Link
              href="#contact"
              className="bg-gradient-to-r from-pink-500 to-violet-600 px-4 py-2 rounded-lg text-white font-semibold hover:from-pink-600 hover:to-violet-700 transition-all duration-300 flex items-center gap-2"
            >
              <RiContactsFill size={20} />
              Contact
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center items-center">
          <div className="relative">
            <Image
              src={personalData.profile}
              alt="profile"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">coder</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">Mehraz Hossain Rumman</span>
            <span className="text-gray-400">{`',`}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">skills:</span>
            <span className="text-gray-400">{`['`}</span>
            <span className="text-amber-300">Python</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">Django</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">Django Rest Framework</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">ClickHouse</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">Next.js</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">Docker</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">Machine Learning</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">Data Analysis</span>
            <span className="text-gray-400">{"'],"}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">location:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">Dhaka, Bangladesh</span>
            <span className="text-gray-400">{`',`}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">experience:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">Software Engineer at Adfinix</span>
            <span className="text-gray-400">{`',`}</span>
          </div>
          <div><span className="text-gray-400">{`};`}</span></div>
        </code>
      </div>
    </section>
  );
};

export default HeroSection;