import React from "react";
import { motion } from "framer-motion";

interface LinkHelperProps {
  href: string;
  text: string;
  children: JSX.Element;
}

export const Link: React.FC<LinkHelperProps> = ({ children, href, text }) => {
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  return (
    <motion.li
      variants={item}
      className="bg-button hover:bg-highlight text-buttontext py-5 w-full sm:w-3/4 md:w-1/2 xl:1/3 2xl:w-1/3 wide:w-1/4 rounded-xl shadow-xl flex justify-center items-center transition-colors">
      <a
        href={href}
        target="_blank"
        className="w-full flex justify-center items-center font-medium relative ">
        {children}
        <span className="hidden xs:inline">{text}</span>
      </a>
    </motion.li>
  );
};
