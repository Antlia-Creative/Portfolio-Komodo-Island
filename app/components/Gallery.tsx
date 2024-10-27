"use client";

import { MouseEventHandler, useState } from "react";
import data from "../data/gallery.json";

export default function Gallery() {
  const [index, setIndex] = useState([0, 1, 2, 3, 4]);
  const [isAnimateTo, setIsAnimateTo] = useState<"back" | "next" | "no">("no");

  function back() {
    if (isAnimateTo === "no") {
      setIsAnimateTo("back");
    }
  }

  function next() {
    if (isAnimateTo === "no") {
      setIsAnimateTo("next");
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
    <div id="destination">
      <h3 className="text-center font-[family-name:var(--font-inter-semi-bold)] text-2xl">
        Explore and Dive, Unwind and Thrive in This Hidden Heaven
      </h3>
      <div className="mt-20 overflow-hidden aspect-[18/7]">
        <div
          onTransitionEnd={onTransitionEnd}
          className={`flex items-center px-4 w-[160%] ${
            isAnimateTo === "no"
              ? "-translate-x-[18.6%]"
              : isAnimateTo === "next"
              ? "transition-transform duration-300 -translate-x-[37.9%]"
              : "transition-transform duration-300 translate-x-[0.65%]"
          }`}
        >
          <Card
            imgSrc={data[index[0]].img_src}
            title={data[index[0]].title}
            description={data[index[0]].description}
            onClick={back}
          />
          <Card
            center={isAnimateTo === "back"}
            imgSrc={data[index[1]].img_src}
            title={data[index[1]].title}
            description={data[index[1]].description}
            onClick={back}
            isAnimate={isAnimateTo !== "no"}
          />
          <Card
            center={isAnimateTo === "no"}
            imgSrc={data[index[2]].img_src}
            title={data[index[2]].title}
            description={data[index[2]].description}
            isAnimate={isAnimateTo !== "no"}
          />
          <Card
            center={isAnimateTo === "next"}
            imgSrc={data[index[3]].img_src}
            title={data[index[3]].title}
            description={data[index[3]].description}
            onClick={next}
            isAnimate={isAnimateTo !== "no"}
          />
          <Card
            imgSrc={data[index[4]].img_src}
            title={data[index[4]].title}
            description={data[index[4]].description}
            onClick={next}
          />
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-x-4">
        {data.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === index[2] ? "bg-bright-turquoise" : "bg-silver-foil"
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
  isAnimate?: boolean;
}

function Card(props: CardProps) {
  return (
    <div
      onTransitionEnd={(e) => e.stopPropagation()}
      className={`px-4 ${
        props.isAnimate ? "transition-all duration-300" : ""
      } ${props.center ? "flex-[1.125_1.125_0%]" : "flex-1"}`}
    >
      <div onClick={props.onClick} className="px-7">
        <div className="bg-white rounded-3xl overflow-hidden">
          <img
            src={props.imgSrc}
            className={`w-full ${
              props.isAnimate ? "transition-all duration-300" : ""
            } ${props.center ? "aspect-[440/400]" : "aspect-[400/343]"}`}
          />
          <div className="pt-4 px-8 pb-6">
            <p
              className={`font-[family-name:var(--font-inter-semi-bold)] ${
                props.isAnimate ? "transition-all duration-300" : ""
              } ${props.center ? "text-xl" : "text-base"}`}
            >
              {props.title}
            </p>
            <p
              className={`${
                props.isAnimate ? "transition-all duration-300" : ""
              } ${
                props.center ? "mt-4" : "mt-2"
              } text-sm font-[family-name:var(--font-inter)] line-clamp-3`}
            >
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
