'use client';
import Image from "next/image";

type Resonator = {
  name: string;
  faction: string;
  portrait: string;
  weapon: string;
  element: string;
};

export default function ResonatorCard({ data }: { data: Resonator }) {
  return (
    <div className="group relative flex aspect-[2/3] overflow-clip rounded-md border border-muted bg-card transition-all hover:rounded-lg">
      {/* Faction Background */}
      <div className="absolute -translate-x-8 -translate-y-4">
        <Image
          src={`/assets/factions/${data.faction}.webp`}
          alt={data.name}
          width={360}
          height={360}
          className="opacity-5 transition-opacity group-hover:opacity-10"
        />
      </div>

      {/* Character Portrait */}
      <div className="absolute top-2 z-10 transition-all group-hover:scale-110">
        <Image
          src={`/assets/portraits/${data.portrait}.webp`}
          alt={data.name}
          width={696}
          height={960}
          className="grayscale group-hover:grayscale-0"
        />
      </div>

      {/* Name - Texto vertical */}
      <p
        className="absolute right-1 top-1 font-bold uppercase opacity-30 transition-opacity group-hover:opacity-100 lg:right-2 lg:top-2 text-4xl lg:text-5xl"
        style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed'
        }}
      >
        {data.name}
      </p>

      {/* Weapon and Element */}
      <div className="absolute bottom-2 right-1 z-10 flex scale-75 items-center opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
        <div className="h-6 w-6 md:h-10 md:w-10">
          <Image
            src={`/assets/icons/weapon-types/${data.weapon}.webp`}
            alt={data.weapon}
            width={160}
            height={160}
          />
        </div>
        <div className="h-8 w-8 md:h-12 md:w-12">
          <Image
            src={`/assets/icons/elements/${data.element}.webp`}
            alt={data.element}
            width={128}
            height={128}
          />
        </div>
      </div>
    </div>
  );
}