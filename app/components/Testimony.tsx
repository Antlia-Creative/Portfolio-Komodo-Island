"use client";

import { useState } from "react";
import StarIcon from "./icons/Star";
import data from "../data/testimony.json";

export default function Testimony() {
  const [index, setIndex] = useState([0, 1, 2, 3, 4]);
  const [isAnimateTo, setIsAnimateTo] = useState<"back" | "next" | "no">("no");

  function next() {
    if (isAnimateTo === "no") {
      setIsAnimateTo("next");
    }
  }

  function back() {
    if (isAnimateTo === "no") {
      setIsAnimateTo("back");
    }
  }

  function onTransitionEnd() {
    const animateTo = isAnimateTo;
    switch (animateTo) {
      case "back":
        setIndex((state) => {
          return [
            getIndex("back", state[0], 0, data.length - 1),
            getIndex("back", state[1], 0, data.length - 1),
            getIndex("back", state[2], 0, data.length - 1),
            getIndex("back", state[3], 0, data.length - 1),
            getIndex("back", state[4], 0, data.length - 1),
          ];
        });
        break;
      case "next":
        setIndex((state) => {
          return [
            getIndex("next", state[0], 0, data.length - 1),
            getIndex("next", state[1], 0, data.length - 1),
            getIndex("next", state[2], 0, data.length - 1),
            getIndex("next", state[3], 0, data.length - 1),
            getIndex("next", state[4], 0, data.length - 1),
          ];
        });
        break;
      case "no":
    }
    setIsAnimateTo("no");
  }

  function getIndex(
    action: "next" | "back",
    data: number,
    min: number,
    max: number
  ) {
    if (action === "back") {
      if (data === min) {
        data = max;
      } else {
        data--;
      }
    } else {
      if (data === max) {
        data = min;
      } else {
        data++;
      }
    }
    return data;
  }

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
      <div className="mt-16 overflow-hidden">
        <div
          onTransitionEnd={onTransitionEnd}
          className={`flex w-[200%] px-4 ${
            isAnimateTo === "no"
              ? "-translate-x-[19.75%]"
              : isAnimateTo === "next"
              ? "transition-transform duration-300 -translate-x-[39.5%]"
              : "transition-transform duration-300 -translate-x-0"
          }`}
        >
          <Card
            imgSrc={data[index[0]].img_src}
            peopleName={data[index[0]].people_name}
            peopleLocation={data[index[0]].people_location}
            shortDescription={data[index[0]].short_description}
            description={data[index[0]].description}
            stars={data[index[0]].stars}
          />
          <Card
            imgSrc={data[index[1]].img_src}
            peopleName={data[index[1]].people_name}
            peopleLocation={data[index[1]].people_location}
            shortDescription={data[index[1]].short_description}
            description={data[index[1]].description}
            stars={data[index[1]].stars}
          />
          <Card
            imgSrc={data[index[2]].img_src}
            peopleName={data[index[2]].people_name}
            peopleLocation={data[index[2]].people_location}
            shortDescription={data[index[2]].short_description}
            description={data[index[2]].description}
            stars={data[index[2]].stars}
          />
          <Card
            imgSrc={data[index[3]].img_src}
            peopleName={data[index[3]].people_name}
            peopleLocation={data[index[3]].people_location}
            shortDescription={data[index[3]].short_description}
            description={data[index[3]].description}
            stars={data[index[3]].stars}
          />
          <Card
            imgSrc={data[index[4]].img_src}
            peopleName={data[index[4]].people_name}
            peopleLocation={data[index[4]].people_location}
            shortDescription={data[index[4]].short_description}
            description={data[index[4]].description}
            stars={data[index[4]].stars}
          />
        </div>
      </div>
      <div className="mt-16 flex justify-center gap-x-4 items-center">
        <button
          type="button"
          onClick={back}
          className="block font-bold text-3xl text-viridian-green"
        >
          {"<"}
        </button>
        {data.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === index[2] ? "bg-bright-turquoise" : "bg-silver-foil"
            }`}
          />
        ))}
        <button
          type="button"
          onClick={next}
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
    <div className="flex-1 px-4">
      <div className="h-full flex flex-col rounded-3xl p-8 bg-white">
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
        <div className="flex-1 mt-6">
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
    </div>
  );
}
