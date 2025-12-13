import React from "react";

type Props = { images: any; height: number; onClick: () => void };

export default function ThumbnailGallery({
  images = [],
  height = 120,
  onClick,
}: Props) {
  return (
    <div className="inline-flex flex-wrap px-auto gap-2 py-1 border-blue-500 border rounded-xl bg-white shadow-sm w-[600px]">
      {images.map((img, index) => {
        if (index < 3) {
          return (
            <img
              key={index}
              src={img}
              onClick={() => {
                onClick();
              }}
              className="rounded-md cursor-pointer object-cover"
              style={{ height: `${height}px`, width: "85px" }}
            />
          );
        }
      })}
    </div>
  );
}
