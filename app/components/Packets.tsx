import Image from "next/image";
import ArrowBack from "../images/logo/arrow-back-outline.svg";
import ArrowNext from "../images/logo/arrow-forward-outline.svg";

export default function Packets() {
  return (
    <div className="px-12">
      <div className="flex gap-x-8 items-center">
        <h3 className="flex-1 font-[family-name:var(--font-inter-semi-bold)] text-5xl">
          Pick Your Perfect Adventure
        </h3>
        <p className="flex-1 font-[family-name:var(--font-inter-semi-bold)] leading-8">
          Whether you&apos;re seeking a relaxing escape or a thrilling dive into
          nature, we have the perfect package to suit your needs. Choose your
          path and let Komodo amaze you.
        </p>
      </div>
      <div className="mt-24 relative">
        <div className="flex gap-x-6">
          <Card
            imgSrc="/packet-1.png"
            expanded
            tag1="3 Days, 2 Nights"
            tag2="$530/Night"
            title="Life On Boat"
            description="Feel the experience life on boat while you see and explore the
        gorgeous of Komodo National Park."
          />
          <Card
            imgSrc="/packet-2.png"
            tag1="5 Days, 4 Nights"
            tag2="$470/Night"
            title="Discover The Stunning Beaches"
            description="Find out the tunning beaches that you never imagine before."
          />
          <Card
            imgSrc="/packet-3.png"
            tag1="7 Days, 6 Nights"
            tag2="$321/Night"
            title="Full Capture The Nature"
            description="Let's see full version of paradise at Komodo National Park with the beauty of nature and culture."
          />
        </div>
        <div className="absolute right-0 bottom-10 w-fit flex items-center gap-x-4">
          <button
            type="button"
            className="rounded-full w-14 h-14 bg-white flex items-center justify-center"
          >
            <Image src={ArrowBack} alt="button back" className="w-8 h-8" />
          </button>
          <button
            type="button"
            className="rounded-full w-14 h-14 bg-bright-turquoise flex items-center justify-center"
          >
            <Image src={ArrowNext} alt="button next" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}

interface CardProps {
  imgSrc: string;
  expanded?: boolean;
  tag1: string;
  tag2: string;
  title: string;
  description: string;
}

function Card(props: CardProps) {
  return (
    <div
      className={`rounded-3xl overflow-hidden relative flex-1 ${
        props.expanded ? "h-[720px]" : "h-[560px]"
      }`}
    >
      <img src={props.imgSrc} className="h-full w-full object-cover" />
      <div
        className={`absolute ${
          props.expanded ? "bg-[#373636]/40" : "bg-[#0E0E0E]/20"
        } w-full h-full top-0`}
      />
      <div className="absolute top-0 w-full h-full flex flex-col">
        <div className="flex-1 flex items-center">
          {props.expanded && (
            <div className="w-48 h-48 mx-auto rounded-full border-white flex items-center justify-center border-4 -rotate-[17.5deg]">
              <p className="font-[family-name:var(--font-inter-medium)] text-lg text-white">
                BOOK SEAT
              </p>
            </div>
          )}
        </div>
        <div className="pl-7 pr-16 py-5">
          <div className="flex gap-x-3">
            <div className="border-2 border-white rounded-full">
              <p className="font-[family-name:var(--font-inter-semi-bold)] text-white px-2.5 py-1 text-xs">
                {props.tag1}
              </p>
            </div>
            <div className="border-2 border-white rounded-full bg-white">
              <p className="font-[family-name:var(--font-inter-semi-bold)] px-2.5 py-1 text-xs">
                {props.tag2}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-[family-name:var(--font-inter-semi-bold)] text-3xl text-white">
              {props.title}
            </p>
          </div>
          {props.expanded && (
            <div className="mt-4">
              <p className="font-[family-name:var(--font-inter)] text-xs text-white">
                {props.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
