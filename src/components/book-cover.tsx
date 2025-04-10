import { VARIANT_STYLES } from "@/constants";
import { cn } from "@/lib/utils";
import { BookCoverProps } from "@/types/types";
import Image from "next/image";
import { BookCoverSvg } from "./book-cover-svg";

export function BookCover({
  variant = "regular",
  className,
  coverColor = "#012B48",
  coverUrl = "https://placehold.co/400x600.png",
}: BookCoverProps) {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        VARIANT_STYLES[variant],
        className
      )}
    >
      <BookCoverSvg coverColor={coverColor} />

      <div
        className="absolute z-10"
        style={{ left: "12%", width: "87.5%", height: "88%" }}
      >
        <Image
          src={coverUrl}
          alt="Book Cover"
          fill
          className="rounded-sm object-fill"
        />
      </div>
    </div>
  );
}
