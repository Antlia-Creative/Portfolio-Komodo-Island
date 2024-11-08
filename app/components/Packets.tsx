"use client";

import Image from "next/image";
import ArrowBack from "../images/logo/arrow-back-outline.svg";
import ArrowNext from "../images/logo/arrow-forward-outline.svg";
import { useState } from "react";
import data from "../data/packet.json";

export default function Packets() {
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
    <div id="explore">
      <div className="flex gap-x-8 items-center px-12">
        <h3 className="flex-1 font-[family-name:var(--font-inter-semi-bold)] text-5xl">
          Pick Your Perfect Adventure
        </h3>
        <p className="flex-1 font-[family-name:var(--font-inter-semi-bold)] leading-8">
          Whether you&apos;re seeking a relaxing escape or a thrilling dive into
          nature, we have the perfect package to suit your needs. Choose your
          path and let Komodo amaze you.
        </p>
      </div>
      <div className="mt-24 relative overflow-hidden h-[720px]">
        <div
          onTransitionEnd={onTransitionEnd}
          className={`flex gap-x-6 w-[220%] px-12 ${
            isAnimateTo === "no"
              ? "-translate-x-[20.4%]"
              : isAnimateTo === "next"
              ? "transition-tranform duration-300 -translate-x-[39.8%]"
              : "transition-tranform duration-300 -translate-x-[1%]"
          }`}
        >
          <Card
            imgSrc={data[index[0]].img_src}
            tag1={data[index[0]].tag1}
            tag2={data[index[0]].tag2}
            title={data[index[0]].title}
            description={data[index[0]].description}
            expanded={isAnimateTo === "back"}
            isAnimate={isAnimateTo !== "no"}
          />
          <Card
            imgSrc={data[index[1]].img_src}
            tag1={data[index[1]].tag1}
            tag2={data[index[1]].tag2}
            title={data[index[1]].title}
            description={data[index[1]].description}
            expanded={isAnimateTo === "no"}
            isAnimate={isAnimateTo !== "no"}
          />
          <Card
            imgSrc={data[index[2]].img_src}
            tag1={data[index[2]].tag1}
            tag2={data[index[2]].tag2}
            title={data[index[2]].title}
            description={data[index[2]].description}
            expanded={isAnimateTo === "next"}
            isAnimate={isAnimateTo !== "no"}
          />
          <Card
            imgSrc={data[index[3]].img_src}
            tag1={data[index[3]].tag1}
            tag2={data[index[3]].tag2}
            title={data[index[3]].title}
            description={data[index[3]].description}
          />
          <Card
            imgSrc={data[index[4]].img_src}
            tag1={data[index[4]].tag1}
            tag2={data[index[4]].tag2}
            title={data[index[4]].title}
            description={data[index[4]].description}
          />
        </div>
        <div className="absolute right-10 bottom-10 w-fit flex items-center gap-x-4">
          <button
            type="button"
            onClick={back}
            className="rounded-full w-14 h-14 bg-white flex items-center justify-center"
          >
            <Image src={ArrowBack} alt="button back" className="w-8 h-8" />
          </button>
          <button
            type="button"
            onClick={next}
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
  isAnimate?: boolean;
}

function Card(props: CardProps) {
  return (
    <div
      onTransitionEnd={(e) => e.stopPropagation()}
      className={`group rounded-3xl overflow-hidden relative flex-1 ${
        props.isAnimate ? "transition-all duration-300" : ""
      } ${props.expanded ? "h-[720px]" : "h-[560px]"}`}
    >
      <img src={props.imgSrc} className="h-full w-full object-cover" />
      <div
        className={`absolute bg-[#0E0E0E]/20 ${
          props.expanded ? "group-hover:bg-[#373636]/60" : ""
        } w-full h-full top-0`}
      />
      <div className="absolute top-0 w-full h-full flex flex-col">
        <div className="flex-1 flex items-center">
          {props.expanded && (
            <div className="hidden group-hover:flex w-48 h-48 mx-auto rounded-full border-white items-center justify-center border-4 -rotate-[17.5deg]">
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
          <div
            className={`overflow-hidden ${
              props.isAnimate ? "transition-all duration-300" : ""
            } ${props.expanded ? "mt-4 h-8" : "mt-0 h-0"}`}
          >
            <p className="font-[family-name:var(--font-inter)] text-xs text-white">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
