import React, { useState, useRef, useEffect } from "react";

interface MultiImagesViewerProps {
  images: string[]; // multiple images
  initialIndex?: number; // optional starting index
  onClose: () => void;
}

export default function MultiImagesViewer({
  images,
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

  const currentSrc = images[currentIndex];

  // Guard: nothing to show
  if (!images || images.length === 0) return null;

  // Reset transforms/position when switching image
  useEffect(() => {
    setScale(1);
    setRotate(0);
    setFlipX(1);
    setFlipY(1);
    setPos({ x: 0, y: 0 });
  }, [currentIndex]);

  // Keyboard: ESC to close, arrows to navigate
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        goNext();
      } else if (e.key === "ArrowLeft") {
        goPrev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, images.length]);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Start drag
  const onMouseDown = (e: React.MouseEvent) => {
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

  // Scroll to zoom
  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    let zoom = scale - e.deltaY * 0.001;
    zoom = Math.min(Math.max(zoom, 0.3), 5); // clamp between 0.3 and 5x
    setScale(zoom);
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 !z-[99999] flex items-center justify-center select-none"
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onWheel={onWheel}
    >
      {/* Click outside to close (optional, can remove if you don't want it) */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-white text-3xl z-[100000]"
        onClick={onClose}
      >
        ✕
      </button>

      {/* Prev / Next arrows */}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 md:left-8 text-white text-3xl bg-black/40 rounded-full w-10 h-10 flex items-center justify-center z-[100000]"
            onClick={goPrev}
          >
            ‹
          </button>
          <button
            className="absolute right-4 md:right-8 text-white text-3xl bg-black/40 rounded-full w-10 h-10 flex items-center justify-center z-[100000]"
            onClick={goNext}
          >
            ›
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 text-white bg-black/40 px-3 py-1 rounded-full z-[100000] text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}

      {/* Controls */}
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

      {/* Image */}
      <div
        className="relative z-[100000]"
        // stop outside-click from closing when clicking directly on the image
        onClick={(e) => e.stopPropagation()}
      >
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
      </div>
    </div>
  );
}
