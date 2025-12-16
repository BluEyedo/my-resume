import React, { useState, useRef, useEffect } from "react";

interface MultiImagesViewerProps {
  files: string[]; // images or videos
  initialIndex?: number;
  onClose: () => void;
}

export default function MultiImagesViewer({
  files,
  initialIndex = 0,
  onClose,
}: MultiImagesViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [flipX, setFlipX] = useState(1);
  const [flipY, setFlipY] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const currentSrc = files[currentIndex];

  // Detect if file is a video
  const isVideo = (src: string) => /\.(mp4|mov|webm|ogg)$/i.test(src);

  // Guard
  if (!files || files.length === 0) return null;

  // Reset transforms when switching file
  useEffect(() => {
    setScale(1);
    setRotate(0);
    setFlipX(1);
    setFlipY(1);
    setPos({ x: 0, y: 0 });
  }, [currentIndex]);

  // Keyboard listeners
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? files.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === files.length - 1 ? 0 : prev + 1));
  };

  // Start dragging image
  const onMouseDown = (e: React.MouseEvent) => {
    if (isVideo(currentSrc)) return; // no dragging videos
    dragging.current = true;
    dragStart.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
  };

  // Drag move
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    setPos({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const onMouseUp = () => {
    dragging.current = false;
  };

  // Zoom images only
  const onWheel = (e: React.WheelEvent) => {
    if (isVideo(currentSrc)) return; // disable video zoom
    e.preventDefault();
    let zoom = scale - e.deltaY * 0.001;
    zoom = Math.min(Math.max(zoom, 0.3), 5);
    setScale(zoom);
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 z-[99999] flex items-center justify-center select-none"
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onWheel={onWheel}
    >
      <div className="absolute inset-0" onClick={onClose} />

      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-white text-3xl z-[100000]"
        onClick={onClose}
      >
        ✕
      </button>

      {/* Navigation */}
      {files.length > 1 && (
        <>
          <button
            className="absolute left-4 md:left-8 text-white text-3xl bg-black/40 rounded-full w-10 h-10 flex items-center justify-center z-[1000000]"
            onClick={goPrev}
          >
            ‹
          </button>
          <button
            className="absolute right-4 md:right-8 text-white text-3xl bg-black/40 rounded-full w-10 h-10 flex items-center justify-center z-[1000000]"
            onClick={goNext}
          >
            ›
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white bg-black/40 px-3 py-1 rounded-full z-[100000000] text-sm">
            {currentIndex + 1} / {files.length}
          </div>
        </>
      )}

      {/* Controls (Images only) */}
      {!isVideo(currentSrc) && (
        <div className="absolute bottom-6 flex flex-wrap gap-3 bg-black/30 p-3 rounded-xl z-[999999]">
          <button
            className="text-white px-2 py-1 text-sm"
            onClick={() => setScale((s) => Math.min(s + 0.2, 5))}
          >
            Zoom +
          </button>
          <button
            className="text-white px-2 py-1 text-sm"
            onClick={() => setScale((s) => Math.max(s - 0.2, 0.3))}
          >
            Zoom -
          </button>

          <button
            className="text-white px-2 py-1 text-sm"
            onClick={() => setRotate((r) => r - 90)}
          >
            Rotate ↺
          </button>
          <button
            className="text-white px-2 py-1 text-sm"
            onClick={() => setRotate((r) => r + 90)}
          >
            Rotate ↻
          </button>

          <button
            className="text-white px-2 py-1 text-sm"
            onClick={() => setFlipX((f) => f * -1)}
          >
            Flip X ↔
          </button>
          <button
            className="text-white px-2 py-1 text-sm"
            onClick={() => setFlipY((f) => f * -1)}
          >
            Flip Y ↕
          </button>

          <button
            className="text-white px-2 py-1 text-sm"
            onClick={() => {
              setScale(1);
              setRotate(0);
              setFlipX(1);
              setFlipY(1);
              setPos({ x: 0, y: 0 });
            }}
          >
            Reset ↺
          </button>
        </div>
      )}

      {/* Media Viewer */}
      <div className="relative z-[100000]" onClick={(e) => e.stopPropagation()}>
        {isVideo(currentSrc) ? (
          <video
            src={currentSrc}
            controls
            className="max-w-[85vw] max-h-[85vh] rounded-lg"
            style={{
              cursor: "default",
            }}
          />
        ) : (
          <img
            src={currentSrc}
            draggable={false}
            onMouseDown={onMouseDown}
            style={{
              transform: `
                translate(${pos.x}px, ${pos.y}px)
                scale(${scale})
                rotate(${rotate}deg)
                scaleX(${flipX})
                scaleY(${flipY})
              `,
              transition: dragging.current ? "none" : "transform 0.15s ease",
              cursor: dragging.current ? "grabbing" : "grab",
            }}
            className="max-w-[85vw] max-h-[85vh]"
          />
        )}
      </div>
    </div>
  );
}
