import { useState, useEffect } from 'react';

export default function Spotlight() {
  const [x, setX] = useState<number | undefined>();
  const [y, setY] = useState<number | undefined>();

  useEffect(() => {
    const update = (e: MouseEvent) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    window.addEventListener('mousemove', update);

    return () => {
      window.removeEventListener('mousemove', update);
    };
  }, [setX, setY]);

  return (
    x &&
    y && (
      <div className="hidden xl:block fixed w-screen h-screen overflow-hidden pointer-events-none inset-0">
        <div
          className="absolute w-24 h-24 rounded-full bg-zinc-800/5 pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{ top: y, left: x }}
        ></div>
      </div>
    )
  );
}
