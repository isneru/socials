import React from "react";
import { motion } from "framer-motion";

import { Link } from "./components";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";

export const App: React.FC = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: { opacity: 0 },
  };

  const profile = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex flex-col justify-center items-center gap-8 w-2/4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={profile}
          className="flex flex-col justify-center items-center">
          <motion.img
            variants={item}
            drag
            whileTap={{ scale: 1.05, zIndex: 99 }}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={1}
            src="https://avatars.githubusercontent.com/u/89457639?v=4"
            alt="Profile Picture"
            className="rounded-full border-4 border-buttonstroke max-h-[14vh] mb-2 cursor-grab"
          />
          <motion.h1 variants={item} className="font-semibold text-headline">
            Diogo Nogueira
          </motion.h1>
          <motion.span
            variants={item}
            className="leading-none text-paragraph font-medium">
            @isneru
          </motion.span>
        </motion.div>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={list}
          className="flex flex-col justify-center items-center gap-5 w-full">
          <Link
            href="https://github.com/isneru"
            text="Github"
            children={
              <GithubLogo
                size={32}
                className="xs:absolute xs:left-5"
                weight="duotone"
              />
            }
          />
          <Link
            href="https://www.linkedin.com/in/diogo-nogueira-944056234/"
            text="LinkedIn"
            children={
              <LinkedinLogo
                size={32}
                className="xs:absolute xs:left-5"
                weight="duotone"
              />
            }
          />
          <Link
            href="https://www.youtube.com/channel/UCb5KD7JmcYh-4FUhnnFpLsQ"
            text="Youtube"
            children={
              <YoutubeLogo
                size={32}
                className="xs:absolute xs:left-5"
                weight="duotone"
              />
            }
          />
          <Link
            href="https://twitter.com/lapela19"
            text="Twitter"
            children={
              <TwitterLogo
                size={32}
                className="xs:absolute xs:left-5"
                weight="duotone"
              />
            }
          />
          <Link
            href="https://www.instagram.com/diog6l"
            text="Instagram"
            children={
              <InstagramLogo
                size={32}
                className="xs:absolute xs:left-5"
                weight="duotone"
              />
            }
          />
        </motion.ul>
      </div>
      <footer className="w-full h-16 flex justify-center items-center fixed bottom-0 bg-background">
        <motion.span
          animate={{ y: [100, 0], opacity: [0, 1] }}
          className="text-highlight font-light">
          Made with 💜 by{" "}
          <a href="https://github.com/isneru" target="_blank">
            Diogo Nogueira
          </a>
        </motion.span>
      </footer>
    </div>
  );
};
