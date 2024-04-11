import Logo from "./Logo";
import { MainMenu } from "./constants";

const NavItem = ({ title, url }) => (
  <a href={url} className="text-blue-950 hover:text-blue-800">{title}</a>
);

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-50 backdrop-blur-[17.5px] bg-opacity-10 px-12 py-4 shadow-xl hover:shadow-inner">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <nav className="flex gap-4 text-xl text-blue-950">
          {MainMenu.map((item, index) => (
            <NavItem key={index} title={item.title} url={item.url} />
          ))}
        </nav>
        <a href="#contact" className="bg-[#2877D3] px-4 py-3 text-lg text-white rounded-[5px]">
          Contact us
        </a>
      </div>
    </header>
  );
}

export default Header;
