export const WORKSPACE_LAYOUT = {
  studio:
    "grid gap-6 lg:grid-cols-[minmax(0,68fr)_minmax(200px,20fr)_minmax(180px,12fr)]",
  stageRegion: "order-1",
  summaryRegion: "order-2 lg:order-3 lg:max-w-80",
  productRegion: "order-3 lg:order-2",
  stage: "min-h-[360px] lg:min-h-[560px]",
} as const;

export const WORKSPACE_STAGE_LAYOUT = {
  scene: "relative isolate size-full min-h-[inherit] overflow-hidden",
  background: "absolute inset-0 z-10",
  desk: "absolute inset-x-[12%] bottom-[18%] z-50",
  chair: "absolute bottom-[8%] left-[38%] right-[28%] z-50",
  monitor: "absolute left-[38%] right-[34%] top-[28%] z-50",
  laptop: "absolute bottom-[38%] left-[24%] right-[58%] z-50",
  lamp: "absolute bottom-[38%] left-[16%] right-[72%] z-50",
  plant: "absolute bottom-[38%] left-[72%] right-[16%] z-50",
  decor: "absolute bottom-[39%] left-[58%] right-[34%] z-50",
} as const;
