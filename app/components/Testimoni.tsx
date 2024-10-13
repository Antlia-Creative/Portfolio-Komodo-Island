import StarIcon from "./icons/Star";

export default function Testimoni() {
  return (
    <div>
      <div>
        <h3 className="font-[family-name:var(--font-inter-semi-bold)] text-center text-3xl">
          What Our Explorers Are Saying
        </h3>
        <p className="mt-6 font-[family-name:var(--font-inter)] text-center text-xl">
          Hear from those who&apos;ve experienced the magic of Komodo. Discover
          why travelers call this a once-in-a-lifetime journey.
        </p>
      </div>
      <div className="mt-16 flex gap-x-4 px-10">
        <Card
          imgSrc="/testimoni-1.png"
          peopleName="Dhimas R"
          peopleLocation="Surakarta, ID"
          shortDescription="Unforgettable experience!"
          description="The guides were knowledgeable and the landscapes were simply breathtaking. Every dive felt like a journey into another world. Highly recommend!"
          stars={5}
        />
        <Card
          imgSrc="/testimoni-2.png"
          peopleName="Rizal A"
          peopleLocation="Purworejo, ID"
          shortDescription="The trip was well-organized and full of adventure!"
          description="From hiking to seeing Komodo dragons up close, everything exceeded our expectations. Just wish we had more time to explore!"
          stars={5}
        />
        <Card
          imgSrc="/testimoni-3.png"
          peopleName="Alfarizi"
          peopleLocation="Oslo, FIN"
          shortDescription="An amazing adventure from start to finish"
          description="The pristine beaches, vibrant coral reefs, and wildlife encounters were beyond words A must-do for nature lovers!"
          stars={5}
        />
      </div>
      <div className="mt-16 flex justify-center gap-x-4 items-center">
        <button
          type="button"
          className="block font-bold text-3xl text-viridian-green"
        >
          {"<"}
        </button>
        <div className="w-3 h-3 rounded-full bg-silver-foil" />
        <div className="w-3 h-3 rounded-full bg-silver-foil" />
        <div className="w-3 h-3 rounded-full bg-bright-turquoise" />
        <div className="w-3 h-3 rounded-full bg-silver-foil" />
        <div className="w-3 h-3 rounded-full bg-silver-foil" />
        <button
          type="button"
          className="block font-bold text-3xl text-viridian-green"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

interface CardProps {
  imgSrc: string;
  peopleName: string;
  peopleLocation: string;
  shortDescription: string;
  description: string;
  stars: number;
}

function Card(props: CardProps) {
  return (
    <div className="rounded-3xl p-8 bg-white">
      <div className="flex gap-x-6">
        <div>
          <img src={props.imgSrc} className="w-16 h-16 rounded-full" />
        </div>
        <div>
          <p className="font-[family-name:var(--font-inter-semi-bold)]">
            {props.peopleName}
          </p>
          <p className="font-[family-name:var(--font-inter)] italic">
            {props.peopleLocation}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <span className="font-[family-name:var(--font-inter-semi-bold)]">
          {props.shortDescription}
        </span>{" "}
        <span className="font-[family-name:var(--font-inter)]">
          {props.description}
        </span>
      </div>
      <div className="mt-6 flex gap-x-2">
        {[...Array(props.stars).keys()].map((i) => {
          return <StarIcon key={i} className="text-dandelion w-8 h-8" />;
        })}
      </div>
    </div>
  );
}
