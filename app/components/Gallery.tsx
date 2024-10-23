"use client";

import { MouseEventHandler, useState } from "react";
import data from "../data/gallery.json";

export default function Gallery() {
  const [index, setIndex] = useState([0, 1, 2]);

  function back() {
    setIndex((state) => {
      return [
        getIndex("back", state[0], 0, data.length - 1),
        getIndex("back", state[1], 0, data.length - 1),
        getIndex("back", state[2], 0, data.length - 1),
      ];
    });
  }

  function next() {
    setIndex((state) => {
      return [
        getIndex("next", state[0], 0, data.length - 1),
        getIndex("next", state[1], 0, data.length - 1),
        getIndex("next", state[2], 0, data.length - 1),
      ];
    });
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
    <div id="destination">
      <h3 className="text-center font-[family-name:var(--font-inter-semi-bold)] text-2xl">
        Explore and Dive, Unwind and Thrive in This Hidden Heaven
      </h3>
      <div className="mt-20 flex items-center gap-x-4">
        <Card
          imgSrc={data[index[0]].img_src}
          title={data[index[0]].title}
          description={data[index[0]].description}
          onClick={back}
        />
        <Card
          center
          imgSrc={data[index[1]].img_src}
          title={data[index[1]].title}
          description={data[index[1]].description}
        />
        <Card
          imgSrc={data[index[2]].img_src}
          title={data[index[2]].title}
          description={data[index[2]].description}
          onClick={next}
        />
      </div>
      <div className="mt-16 flex justify-center gap-x-4">
        {data.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === index[1] ? "bg-bright-turquoise" : "bg-silver-foil"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

interface CardProps {
  center?: boolean;
  imgSrc: string;
  title: string;
  description: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function Card(props: CardProps) {
  return (
    <div
      onClick={props.onClick}
      className={`px-7 ${props.center ? "flex-[1.125_1.125_0%]" : "flex-1"}`}
    >
      <div className="bg-white rounded-3xl overflow-hidden">
        <img
          src={props.imgSrc}
          className={`w-full ${
            props.center ? "aspect-[440/400]" : "aspect-[400/343]"
          }`}
        />
        <div className="pt-4 px-8 pb-6">
          <p
            className={`font-[family-name:var(--font-inter-semi-bold)] ${
              props.center ? "text-xl" : ""
            }`}
          >
            {props.title}
          </p>
          <p
            className={`${
              props.center ? "mt-4" : "mt-2"
            } text-sm font-[family-name:var(--font-inter)] line-clamp-3`}
          >
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
