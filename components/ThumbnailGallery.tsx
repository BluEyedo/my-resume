import React from "react";

type Props = {
  images: string[];
  containerWidth?: number;
  onClick: (index: number) => void;
};

export default function ThumbnailGallery({
  images = [],
  containerWidth = 10,
  onClick,
}: Props) {
  const isVideo = (src: string) => /\.(mp4|mov|webm|ogg)$/i.test(src);
  const displayImages = images.slice(0, 4);
  const remainingCount = images.length - 4;

  const gridCols = displayImages.length === 1 ? "grid-cols-1" : "grid-cols-2";

  // Calculate thumbnail size based on container width and number of images
  // Account for padding (8px * 2 = 16px) and gap (8px)
  let thumbnailSize;
  let thumbnailHeight;

  if (displayImages.length === 1) {
    // Single image: full width minus padding
    thumbnailSize = containerWidth - 16;
    thumbnailHeight = thumbnailSize;
  } else if (displayImages.length === 2) {
    // Two images: full height, half width each
    thumbnailSize = (containerWidth - 16 - 8) / 2;
    thumbnailHeight = containerWidth - 16; // Full container height
  } else {
    // 3-4 images: square grid
    thumbnailSize = (containerWidth - 16 - 8) / 2;
    thumbnailHeight = thumbnailSize;
  }

  return (
      <div
          className={`inline-grid ${gridCols}   shadow-md border rounded-xl  w-[300px] lg:w-[${containerWidth}vw] 2xl:w-full h-[160px] duration-200 
      hover:-translate-y-1 hover:scale-105 hover:shadow-lg overflow-hidden bg-gray-200`}
      >
          {displayImages.map((src, index) => (
              <div
                  key={index}
                  className="relative cursor-pointer overflow-hidden"
                  style={{
                      height: `${thumbnailHeight}px`,
                      width: `${thumbnailSize}px`,
                  }}
                  onClick={() => onClick(index)}
              >
                  {/* IMAGE OR VIDEO POSTER */}
                  {isVideo(src) ? (
                      <video src={src} className="object-cover w-full h-full" muted preload="metadata" />
                  ) : (
                      <img src={src} alt={`Thumbnail ${index + 1}`} className="object-cover w-full h-full" />
                  )}

                  {/* PLAY ICON OVERLAY FOR VIDEOS */}
                  {isVideo(src) && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="text-white text-3xl opacity-90">▶</div>
                      </div>
                  )}

                  {/* MORE COUNT OVERLAY (only on 4th image if more exist) */}
                  {index === 3 && remainingCount > 0 && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <div className="text-white text-2xl font-semibold">+{remainingCount}</div>
                      </div>
                  )}
              </div>
          ))}
      </div>
  );
}

export { ThumbnailGallery };
