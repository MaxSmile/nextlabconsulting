const Logo = () => (
    <div className="font-bold">LOGO</div>
  );
  
  const NavItem = ({ children }) => (
    <div>{children}</div>
  );
  
  const navItems = ["Expertise", "Services", "Our team", "Cases"];
  
  function Header() {
    return (
      <header className="flex gap-5 justify-between px-12 py-6 rounded backdrop-blur-[17.5px] bg-white bg-opacity-10 leading-[140%] max-md:flex-wrap max-md:px-5">
        <nav className="flex gap-4 my-auto text-xl text-blue-950">
          <Logo />
          {navItems.map((item, index) => (
            <NavItem key={index}>{item}</NavItem>
          ))}
        </nav>
        <button className="justify-center px-4 py-3 text-lg text-white rounded-md max-md:px-5">
          Contact us
        </button>
      </header>
    );
  }
  
  export default Header;