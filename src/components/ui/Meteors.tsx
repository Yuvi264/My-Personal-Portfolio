// src/components/ui/Meteors.tsx

import { motion } from "framer-motion";

interface MeteorProps {
  number?: number;
}

const Meteors: React.FC<MeteorProps> = ({ number = 20 }) => {
  const meteors = new Array(number).fill(true);

  return (
    <>
      {meteors.map((_, idx) => {
        const delay = Math.random() * 5;
        const left = Math.floor(Math.random() * window.innerWidth);
        return (
          <motion.span
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1,
              delay,
              repeat: Infinity,
              repeatDelay: Math.random() * 5,
            }}
            className="absolute top-0 h-[1px] w-[100px] bg-gradient-to-r from-white to-transparent"
            style={{
              left,
              transform: `rotate(${Math.random() * 45}deg)`,
            }}
          />
        );
      })}
    </>
  );
};

export  {Meteors};
