import React from "react";

interface LinkHelperProps {
  href: string;
  text: string;
  children: JSX.Element;
}

export const Link: React.FC<LinkHelperProps> = ({ children, href, text }) => {
  return (
    <li className="bg-button hover:bg-highlight text-buttontext py-4 w-3/4 md:w-1/2 rounded-xl shadow-xl flex justify-center items-center transition-colors">
      <a
        href={href}
        target="_blank"
        className="w-full flex justify-center items-center font-medium relative">
        {children}
        <span className="">{text}</span>
      </a>
    </li>
  );
};
