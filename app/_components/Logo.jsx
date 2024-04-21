import Image from "next/image";


export default function Logo({ color = '#183050' }) {
  const dWhite = 8;
  const dBlue = 25;
  return (
    <div className="font-bold mt-1">
      <a href="/#top">
        {color === 'white' ?
          <Image src="/logo-white.png" width={1256 / dWhite} height={245 / dWhite} alt="NextLab logo" loading="lazy" />
          :
          <Image src="/Logo_Short_Blue_TransparentBackground.png" width={1256 / dBlue} height={245 / dBlue} alt="NextLab logo" loading="lazy" />}

      </a>
    </div>
  )
}
