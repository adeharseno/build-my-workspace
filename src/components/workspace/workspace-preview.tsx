"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useWorkspaceStore } from "@/store/workspace-store";
import type { ProductColor } from "@/types/workspace";

const colors: Record<ProductColor, string> = {
  oak: "#c89258",
  walnut: "#65402f",
  white: "#e9e8df",
  black: "#252827",
  sage: "#80957c",
  clay: "#aa7862",
};

const furnitureMotion = {
  initial: { opacity: 0, y: 18, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 10, scale: 0.98 },
  transition: { type: "spring" as const, stiffness: 240, damping: 25 },
};

export function WorkspacePreview() {
  const { selectedDesk, selectedChair, accessories } = useWorkspaceStore();
  const hasWorkspace = selectedDesk || selectedChair;

  return (
    <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] bg-[#e7e6df] lg:min-h-[610px]">
      <div className="absolute left-6 top-6 z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#72746f]">
          Live preview
        </p>
      </div>
      <svg
        viewBox="0 0 720 650"
        className="absolute inset-0 size-full"
        role="img"
        aria-label="Preview of your configured workspace"
      >
        <defs>
          <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#eeede7" />
            <stop offset="1" stopColor="#deddd5" />
          </linearGradient>
          <linearGradient id="floor" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#c8c5ba" />
            <stop offset="1" stopColor="#aaa79c" />
          </linearGradient>
          <filter id="shadow">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>
        <rect width="720" height="430" fill="url(#wall)" />
        <path d="M0 430H720V650H0z" fill="url(#floor)" />
        <path d="M0 430H720" stroke="#b2b0a8" strokeWidth="3" />
        <path d="M75 80h185v190H75z" fill="#dddcd5" stroke="#d2d0c8" />
        <path d="M94 98h147v151H94z" fill="#b9c5bf" />
        <circle cx="168" cy="157" r="38" fill="#d5d4cb" opacity=".8" />
        <path d="M130 217c24-52 66-71 110-42v74H94z" fill="#84968b" />
        <ellipse
          cx="380"
          cy="570"
          rx="270"
          ry="38"
          fill="#5b5b56"
          opacity=".18"
          filter="url(#shadow)"
        />

        <AnimatePresence mode="wait">
          {selectedDesk && (
            <motion.g key={selectedDesk.id} {...furnitureMotion}>
              <rect
                x="160"
                y={selectedDesk.id === "desk-arc" ? 346 : 365}
                width="410"
                height="34"
                rx="7"
                fill={colors[selectedDesk.color]}
              />
              <path
                d="M190 397v148M540 397v148"
                stroke={selectedDesk.color === "white" ? "#aaa9a2" : "#353634"}
                strokeWidth="14"
                strokeLinecap="round"
              />
              {selectedDesk.id === "desk-arc" && (
                <path d="M181 400h378" stroke="#f5f4ee" strokeWidth="7" />
              )}
            </motion.g>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {selectedChair && (
            <motion.g key={selectedChair.id} {...furnitureMotion}>
              <rect
                x="305"
                y="415"
                width="128"
                height="107"
                rx={selectedChair.id === "chair-aero" ? 26 : 44}
                fill={colors[selectedChair.color]}
              />
              <rect
                x="292"
                y="495"
                width="154"
                height="38"
                rx="19"
                fill={colors[selectedChair.color]}
              />
              <path d="M369 530v68M318 606h102" stroke="#343533" strokeWidth="12" strokeLinecap="round" />
              <circle cx="311" cy="610" r="9" fill="#343533" />
              <circle cx="427" cy="610" r="9" fill="#343533" />
            </motion.g>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {accessories.map((item, index) => {
            const x = 240 + index * 78;
            return (
              <motion.g key={item.id} {...furnitureMotion}>
                {item.id === "accessory-lamp" && (
                  <>
                    <path d={`M${x} 362v-78l38-23`} stroke="#292b2a" strokeWidth="8" strokeLinecap="round" />
                    <path d={`M${x + 22} 254h44l-10 24h-50z`} fill="#292b2a" />
                  </>
                )}
                {item.id === "accessory-plant" && (
                  <>
                    <path d={`M${x} 362c-22-46 4-69 14-82 8 24 19 48-4 82z`} fill="#627d62" />
                    <path d={`M${x + 9} 362c7-48 37-56 52-57-5 30-13 51-42 57z`} fill="#82967a" />
                    <rect x={x - 5} y="357" width="43" height="39" rx="5" fill="#af7d67" />
                  </>
                )}
                {item.id === "accessory-tray" && (
                  <ellipse cx={x} cy="383" rx="34" ry="10" fill="#a87862" />
                )}
                {item.id === "accessory-speaker" && (
                  <>
                    <rect x={x - 20} y="334" width="48" height="62" rx="10" fill="#efeee7" stroke="#d1d0c8" />
                    <circle cx={x + 4} cy="359" r="14" fill="#343735" />
                  </>
                )}
              </motion.g>
            );
          })}
        </AnimatePresence>
      </svg>
      {!hasWorkspace && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-x-0 bottom-8 mx-auto w-fit rounded-full bg-white/80 px-4 py-2 text-sm text-[#6f726f] shadow-sm backdrop-blur"
        >
          Choose a desk to get started
        </motion.div>
      )}
    </div>
  );
}
