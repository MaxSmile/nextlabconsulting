import Image from "next/image";

const Logo = ({ color = '#183050' }) => (
  <div className="font-bold mt-1">
    <a href="/#top">
      {color === 'white' ? 
        <Image src="/logo-white.png" width={1256/8} height={245/8} alt="NextLab logo" loading="lazy" /> 
        : 
        <Image src="/logo-blue.png" width={1256/8} height={245/8} alt="NextLab logo" loading="lazy" />}
      
    </a>
  </div>
);
export default Logo;