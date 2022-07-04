import React from "react";

import { Link } from "./components";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";

export const App: React.FC = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex flex-col justify-center items-center gap-8 w-2/4">
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://avatars.githubusercontent.com/u/89457639?v=4"
            alt="Profile Picture"
            className="rounded-full border-4 border-buttonstroke max-h-[14vh] mb-2"
          />
          <h1 className="font-semibold text-headline">Diogo Nogueira</h1>
          <span className="leading-none text-paragraph font-medium">
            @isneru
          </span>
        </div>
        <ul className="flex flex-col justify-center items-center gap-5 w-full">
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
        </ul>
      </div>
      <footer className="w-full h-16 flex justify-center items-center fixed bottom-0 bg-background">
        <span className="text-highlight font-light">
          Made with 💜 by{" "}
          <a href="https://github.com/isneru" target="_blank">
            Diogo Nogueira
          </a>
        </span>
      </footer>
    </div>
  );
};
