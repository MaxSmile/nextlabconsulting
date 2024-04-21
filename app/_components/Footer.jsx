import * as React from "react";
import Logo from "./Logo";
import { MainMenu } from "./constants";

export default function Footer() {
  return (
    <div className="flex flex-col lg:px-12 pb-10 mt-32 w-full lg:max-w-7xl mx-auto">
      <div className="flex gap-0 justify-between items-center px-12 py-4 text-white bg-tertiary  rounded-lg  lg:rounded-none  max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="hidden md:flex text-2xl font-medium tracking-tight leading-6 hover:opacity-80">
          <Logo color="white" />
        </div>
        <div className="hidden lg:flex flex-1 self-stretch px-16 my-auto text-base leading-6 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-4">
            {MainMenu.map((item, index) => (
              <a className="hover:opacity-80" href={item.url} key={index}>{item.title}</a>
            ))}
          </div>
        </div>
        <div className="flex gap-5 justify-end self-stretch py-px pl-9 my-auto text-2xl leading-7 text-white">
          <div className="grow my-auto">Follow&nbsp;us</div>
          <a href="https://www.linkedin.com/company/nextlab-consulting/" target="_blank" rel="noreferrer" className="hover:opacity-80"><img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/18ded3b9b1719cf8aee952513ab1cdd98eb9c7ea4cd22116b9a6c1a4acedfd38?apiKey=a077d5b1349f48f38f4ae0cc0f777298&"
            className="shrink-0 max-w-full aspect-[4] w-[126px]"
          /></a>
        </div>
      </div>
      <div className="flex gap-5 mt-6 text-sm leading-5 text-secondary max-md:flex-wrap max-md:max-w-full px-4">
        <div className="flex max-md:max-w-full">
          © 2023 - {new Date().getFullYear()} NextLab Consulting PTY LTD
          <br/>
ABN 77675166793 
        </div>
        <div className="flex text-right max-md:max-w-full">
          <a href="/privacy-policy" className="hover:opacity-80">Privacy Policy</a> &nbsp;|&nbsp; <a className="hover:opacity-80" href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </div>
  );
}
