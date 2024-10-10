import Link from "next/link";

interface Props {
  className?: string;
}

export default function Navbar(props: Props) {
  return (
    <nav className={`flex items-center py-8 px-36 ${props.className}`}>
      <div className="flex-1">
        <Link href="/" className="block w-fit">
          Explore It
        </Link>
      </div>
      <div className="flex-1">
        <Link href="/" className="block w-fit">
          Destination
        </Link>
      </div>
      <div className="flex-2">
        <h1 className="font-bold text-4xl">
          <span>KOMODO</span>{" "}
          <span className="text-bright-turquoise">Park</span>
        </h1>
      </div>
      <div className="flex-1">
        <Link href="/" className="block w-fit ml-auto">
          About Us
        </Link>
      </div>
      <div className="flex-1">
        <Link href="/" className="block w-fit ml-auto">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
