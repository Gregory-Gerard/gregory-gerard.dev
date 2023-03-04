'use client';

import { useState, useEffect } from 'react';

export default function Spotlight() {
  const [x, setX] = useState<number | undefined>();
  const [y, setY] = useState<number | undefined>();
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    const update = (e: MouseEvent) => {
      setX(e.clientX);
      setY(e.clientY);

      setIsHovering(!!document.querySelector('a:hover'));
    };

    window.addEventListener('mousemove', update);

    return () => {
      window.removeEventListener('mousemove', update);
    };
  }, [setX, setY]);

  return (
    (x && y && (
      <div
        className="[@media(hover:none)]:hidden xl:block fixed w-screen h-screen overflow-hidden pointer-events-none inset-0 z-10"
        aria-hidden="true"
      >
        <div
          className={`absolute w-6 h-6 rounded-full bg-zinc-100/80 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[transform,background-color] duration-200 ${
            isHovering ? 'scale-150 !bg-zinc-100/40' : ''
          }`}
          style={{ top: y, left: x }}
        ></div>
      </div>
    )) ||
    null
  );
}
