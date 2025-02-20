'use client';
import { useState } from "react";
import Image from "next/image";

type Resonator = {
  name: string;
  faction: string;
  portrait: string;
  weapon: string;
  element: string;
  bgColor: string;
  secondaryColor: string;
};

const BASE_URL = "https://wuwatracker.com/assets";

const resonatorsData: Resonator[] = [
  {
    name: "Aalto",
    faction: "the-black-shores.webp",
    portrait: "aalto.webp",
    weapon: "pistols.webp",
    element: "aero.webp",
    bgColor: "bg-purple-500",
    secondaryColor: "bg-purple-200"
  },
  {
    name: "Baizhi",
    faction: "jinzhou.webp",
    portrait: "baizhi.webp",
    weapon: "rectifier.webp",
    element: "glacio.webp",
    bgColor: "bg-purple-500",
    secondaryColor: "bg-purple-200"
  },
  {
    name: "Calcharo",
    faction: "ghost-hounds.webp",
    portrait: "calcharo.webp",
    weapon: "broadblade.webp",
    element: "electro.webp",
    bgColor: "bg-yellow-500",
    secondaryColor: "bg-yellow-200"
  },
  {
    name: "Camellya",
    faction: "the-black-shores.webp",
    portrait: "camellya.webp",
    weapon: "sword.webp",
    element: "havoc.webp",
    bgColor: "bg-yellow-500",
    secondaryColor: "bg-yellow-200"
  },
  {
    name: "Changli",
    faction: "jinzhou.webp",
    portrait: "changli.webp",
    weapon: "sword.webp",
    element: "fusion.webp",
    bgColor: "bg-yellow-500",
    secondaryColor: "bg-yellow-200"
  },
  {
    name: "Chixia",
    faction: "jinzhou.webp",
    portrait: "chixia.webp",
    weapon: "pistols.webp",
    element: "fusion.webp",
    bgColor: "bg-purple-500",
    secondaryColor: "bg-purple-200"
  },
  {
    name: "Danjin",
    faction: "jinzhou.webp",
    portrait: "danjin.webp",
    weapon: "sword.webp",
    element: "havoc.webp",
    bgColor: "bg-purple-500",
    secondaryColor: "bg-purple-200"
  },
  {
    name: "Encore",
    faction: "the-black-shores.webp",
    portrait: "encore.webp",
    weapon: "rectifier.webp",
    element: "fusion.webp",
    bgColor: "bg-yellow-500",
    secondaryColor: "bg-yellow-200"
  },
  {
    name: "Jianxin",
    faction: "jinzhou.webp",
    portrait: "jianxin.webp",
    weapon: "gauntlets.webp",
    element: "aero.webp",
    bgColor: "bg-yellow-500",
    secondaryColor: "bg-yellow-200"
  },
  {
    name: "Jinhsi",
    faction: "jinzhou.webp",
    portrait: "jinhsi.webp",
    weapon: "broadblade.webp",
    element: "spectro.webp",
    bgColor: "bg-yellow-500",
    secondaryColor: "bg-yellow-200"
  },
  {
    name: "Jiyan",
    faction: "jinzhou.webp",
    portrait: "jiyan.webp",
    weapon: "broadblade.webp",
    element: "aero.webp",
    bgColor: "bg-yellow-500",
    secondaryColor: "bg-yellow-200"
  },
  {
    name: "Lingyang",
    faction: "jinzhou.webp",
    portrait: "lingyang.webp",
    weapon: "gauntlets.webp",
    element: "glacio.webp",
    bgColor: "bg-yellow-500",
    secondaryColor: "bg-yellow-200"
  },
  {
    name: "Mortefi",
    faction: "jinzhou.webp",
    portrait: "mortefi.webp",
    weapon: "pistols.webp",
    element: "fusion.webp",
    bgColor: "bg-purple-500",
    secondaryColor: "bg-purple-200"
  },
  {
    name: "Rover-Havoc",
    faction: "ghost-hounds.webp",
    portrait: "rover-havoc.webp",
    weapon: "sword.webp",
    element: "havoc.webp",
    bgColor: "bg-yellow-500",
    secondaryColor: "bg-yellow-200"
  },
  {
    name: "Rover-Spectro",
    faction: "ghost-hounds.webp",
    portrait: "rover-spectro.webp",
    weapon: "sword.webp",
    element: "spectro.webp",
    bgColor: "bg-yellow-500",
    secondaryColor: "bg-yellow-200"
  },
  {
    name: "Sanhua",
    faction: "jinzhou.webp",
    portrait: "sanhua.webp",
    weapon: "sword.webp",
    element: "glacio.webp",
    bgColor: "bg-purple-500",
    secondaryColor: "bg-purple-200"
  },
  {
    name: "Shorekeeper",
    faction: "the-black-shores.webp",
    portrait: "shorekeeper.webp",
    weapon: "rectifier.webp",
    element: "spectro.webp",
    bgColor: "bg-yellow-500",
    secondaryColor: "bg-yellow-200"
  },
  {
    name: "Taoqi",
    faction: "jinzhou.webp",
    portrait: "taoqi.webp",
    weapon: "broadblade.webp",
    element: "havoc.webp",
    bgColor: "bg-purple-500",
    secondaryColor: "bg-purple-200"
  },
  {
    name: "Verina",
    faction: "jinzhou.webp",
    portrait: "verina.webp",
    weapon: "rectifier.webp",
    element: "spectro.webp",
    bgColor: "bg-yellow-500",
    secondaryColor: "bg-yellow-200"
  },
  {
    name: "Xiangli Yao",
    faction: "jinzhou.webp",
    portrait: "xiangli-yao.webp",
    weapon: "gauntlets.webp",
    element: "electro.webp",
    bgColor: "bg-yellow-500",
    secondaryColor: "bg-yellow-200"
  },
  {
    name: "Yangyang",
    faction: "jinzhou.webp",
    portrait: "yangyang.webp",
    weapon: "sword.webp",
    element: "aero.webp",
    bgColor: "bg-purple-500",
    secondaryColor: "bg-purple-200"
  },
  {
    name: "Yinlin",
    faction: "jinzhou.webp",
    portrait: "yinlin.webp",
    weapon: "rectifier.webp",
    element: "electro.webp",
    bgColor: "bg-yellow-500",
    secondaryColor: "bg-yellow-200"
  },
  {
    name: "Youhu",
    faction: "ghost-hounds.webp",
    portrait: "youhu.webp",
    weapon: "gauntlets.webp",
    element: "glacio.webp",
    bgColor: "bg-purple-500",
    secondaryColor: "bg-purple-200"
  },
  {
    name: "Yuanwu",
    faction: "jinzhou.webp",
    portrait: "yuanwu.webp",
    weapon: "gauntlets.webp",
    element: "electro.webp",
    bgColor: "bg-purple-500",
    secondaryColor: "bg-purple-200"
  },
  {
    name: "Zhezhi",
    faction: "jinzhou.webp",
    portrait: "zhezhi.webp",
    weapon: "rectifier.webp",
    element: "glacio.webp",
    bgColor: "bg-yellow-500",
    secondaryColor: "bg-yellow-200"
  }
];

export default function ResonatorsGrid() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResonators = resonatorsData.filter(resonator =>
    resonator.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mx-auto my-4 flex w-full max-w-screen-xl flex-1 flex-col px-4 sm:my-8 sm:mb-16 md:px-6">
      <div className="col-span-full">
        <div className="flex flex-col gap-4 pb-8">
          <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
            <div className="flex items-center justify-between gap-3">
              <h1 className="scroll-m-20 text-3xl font-bold tracking-tighter md:text-4xl relative mb-0 flex items-center gap-2 sm:justify-start">
                Resonadores
              </h1>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative flex gap-2">
                <input
                  className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-lg ring-offset-background file:border-0 file:bg-transparent file:text-lg file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-lg pr-8 ps-9"
                  placeholder="Buscar personajes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search" aria-hidden="true">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-8">
        {filteredResonators.map((resonator) => (
          <div key={resonator.name} className="group relative flex aspect-[2/3] overflow-clip rounded-md border border-muted bg-card transition hover:rounded-lg dark:bg-background">
            {/* Faction Background */}
            <div className="absolute -translate-x-8 -translate-y-4">
              <Image
                src={`${BASE_URL}/factions/${resonator.faction}`}
                alt={resonator.name}
                width={360}
                height={360}
                className="opacity-5 transition-opacity group-hover:opacity-10"
              />
            </div>

            {/* Character Portrait */}
            <div className="absolute top-2 z-10 transition-all group-hover:scale-110 grayscale group-hover:grayscale-0">
              <Image
                src={`${BASE_URL}/portraits/${resonator.portrait}`}
                alt={resonator.name}
                width={696}
                height={960}
                className="object-cover"
              />
            </div>

            {/* Name */}
            <p style={{ writingMode: 'vertical-rl' }} className="absolute right-1 top-1 font-bold uppercase opacity-30 transition-opacity group-hover:opacity-100 lg:right-2 lg:top-2 text-4xl lg:text-5xl vertical-rl">
              {resonator.name}
            </p>

            {/* Weapon and Element */}
            <div className="absolute bottom-2 right-1 z-10 flex scale-75 items-center opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
              <div className="h-6 w-6 md:h-10 md:w-10">
                <Image
                  src={`${BASE_URL}/icons/weapon-types/${resonator.weapon}`}
                  alt={resonator.weapon.split('.')[0]}
                  width={160}
                  height={160}
                />
              </div>
              <div className="h-8 w-8 md:h-12 md:w-12">
                <Image
                  src={`${BASE_URL}/icons/elements/${resonator.element}`}
                  alt={resonator.element.split('.')[0]}
                  width={128}
                  height={128}
                />
              </div>
            </div>

            {/* Gradient Effect */}
            <div className="absolute bottom-0 h-1/4 w-full bg-background blur-sm"></div>

            {/* Animated Effects */}
            <div className="relative flex w-full items-center overflow-clip">
              <div className="absolute -bottom-2 mt-auto h-4 w-full">
                <div className={`absolute bottom-0 h-5 w-full blur-lg transition-all duration-200 group-hover:h-6 group-hover:-translate-x-1/3 group-hover:rotate-45 ${resonator.bgColor} grayscale group-hover:grayscale-0`}></div>
                <div className={`absolute bottom-0 h-3 w-full blur-sm duration-200 group-hover:h-5 group-hover:-translate-x-1/3 group-hover:rotate-45 group-hover:blur ${resonator.secondaryColor} grayscale group-hover:grayscale-0`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}