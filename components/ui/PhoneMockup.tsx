import Image from "next/image";

interface PhoneMockupProps {
  imageSrc: string;
  imageAlt: string;
  className?: string;
  priority?: boolean;
}

export function PhoneMockup({ imageSrc, imageAlt, className = "", priority = false }: PhoneMockupProps) {
  return (
    <div
      className={`relative inline-block rounded-[40px] bg-navy border-[8px] border-navy shadow-2xl overflow-hidden ${className}`}
    >
      {/* Notch / Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 w-[90px] h-[26px] bg-navy rounded-full" />

      {/* Inner screen area */}
      <div className="rounded-[32px] overflow-hidden bg-white aspect-[9/19.5]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={375}
          height={812}
          className="w-full h-full object-cover"
          priority={priority}
        />
      </div>
    </div>
  );
}
