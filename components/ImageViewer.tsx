import React, { useState, useRef, useEffect } from "react";

interface ImageViewerProps {
  src: string;
  onClose: () => void;
}

export default function ImageViewer({ src, onClose }: ImageViewerProps) {
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [flipX, setFlipX] = useState(1);
  const [flipY, setFlipY] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  // ESC to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

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

  const onMouseUp = () => (dragging.current = false);

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

      {/* Controls */}
      <div className="absolute bottom-6 flex gap-3 bg-black/30 p-3 rounded-xl z-[999999]">
        <button className="text-white" onClick={() => setScale(scale + 0.2)}>
          Zoom +
        </button>
        <button className="text-white" onClick={() => setScale(scale - 0.2)}>
          Zoom -
        </button>

        <button className="text-white" onClick={() => setRotate(rotate - 90)}>
          Rotate ↺
        </button>
        <button className="text-white" onClick={() => setRotate(rotate + 90)}>
          Rotate ↻
        </button>

        <button className="text-white" onClick={() => setFlipX(flipX * -1)}>
          Flip X ↔
        </button>
        <button className="text-white" onClick={() => setFlipY(flipY * -1)}>
          Flip Y ↕
        </button>

        <button
          className="text-white"
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

      <img
        src={src}
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
        className="max-w-[85%] max-h-[85%]"
      />
    </div>
  );
}
