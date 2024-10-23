import Image from "next/image";
import InstagramLogo from "../images/logo/logo-instagram.svg";
import TiktokLogo from "../images/logo/logo-tiktok.svg";
import YoutubeLogo from "../images/logo/logo-youtube.svg";
import Link from "next/link";

interface Props {
  className?: string;
}

export default function Footer(props: Props) {
  return (
    <footer className={`px-8 pt-14 pb-4 bg-white ${props.className}`}>
      <div id="contact" className="flex gap-x-4">
        <div className="flex-[3_3_0%]">
          <Link href="/" className="font-bold text-4xl">
            <span>KOMODO</span>{" "}
            <span className="text-bright-turquoise">Park</span>
          </Link>
        </div>
        <div className="flex-[2_2_0%] leading-8">
          <h4>Email Address</h4>
          <div className="text-black-olive font-[family-name:var(--font-segoe-ui-light)]">
            <p>komodo@park.co.id</p>
          </div>
        </div>
        <div className="flex-[2_2_0%] leading-8">
          <h4>Phone Number</h4>
          <div className="text-black-olive font-[family-name:var(--font-segoe-ui-light)]">
            <p>(+62)811-2390-86658</p>
            <p>(021)987-735-0098</p>
          </div>
        </div>
        <div className="flex-[3_3_0%] leading-8">
          <p className="text-black-olive font-[family-name:var(--font-segoe-ui-light)]">
            Tentara-Pelajar Street No.56, Laweyan District Surakarta 55423,
            Indonesia.
          </p>
        </div>
        <div className="flex-[1_1_0%] flex gap-4">
          <Image src={InstagramLogo} alt="Instagram logo" className="w-8 h-8" />
          <Image src={TiktokLogo} alt="TikTok logo" className="w-8 h-8" />
          <Image src={YoutubeLogo} alt="YouTube logo" className="w-8 h-8" />
        </div>
      </div>
      <div className="mt-8">
        <p className="text-center font-[family-name:var(--font-segoe-ui)]">
          All rights reserved @KomodoPark
        </p>
      </div>
    </footer>
  );
}
