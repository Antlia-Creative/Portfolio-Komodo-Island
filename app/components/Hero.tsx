import Link from "next/link";

interface Props {
  className?: string;
}

export default function Hero(props: Props) {
  return (
    <div
      className={`p-12 bg-komodo-park min-h-screen bg-center bg-cover flex flex-col ${props.className}`}
    >
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="font-[family-name:var(--font-caveat-bold)] text-7xl text-white text-center">
          A Timeless Paradise
          <br />
          Where Wonders Always Rise
        </h2>
        <Link
          href="/"
          className="mt-12 font-[family-name:var(--font-inter-extra-bold)] text-white text-xl border border-4 rounded-full py-2 px-5 w-fit mx-auto"
        >
          Book Your Trip, Now!
        </Link>
      </div>
      <div>
        <p className="font-[family-name:var(--font-inter-extra-bold)] italic text-white text-center text-2xl">
          Pandar Island, Indonesia
        </p>
      </div>
    </div>
  );
}
