import Link from "next/link";

export default function Closing() {
  return (
    <div className="bg-komodo-park bg-center bg-cover py-40 px-36">
      <p className="font-[family-name:var(--font-inter-extra-bold)] text-center text-white text-3xl leading-10">
        Ready to Explore More?
        <br />
        Start Your Komodo Adventure Today, Let Nature Lead the Way!
      </p>
      <Link
        href="/"
        className="block w-fit mx-auto mt-8 font-[family-name:var(--font-inter-extra-bold)] text-white text-xl border border-4 rounded-full py-2 px-5 w-fit mx-auto"
      >
        Book Your Trip, Now!
      </Link>
    </div>
  );
}
