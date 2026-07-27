export interface Workspace {
  desk: string | null;
  chair: string | null;
  monitor: string | null;
  laptop: string | null;
  lamp: string | null;
  plant: string | null;
  decor: string | null;
}

export interface WorkspaceActions {
  selectDesk: (productId: string | null) => void;
  selectChair: (productId: string | null) => void;
  selectMonitor: (productId: string | null) => void;
  selectLaptop: (productId: string | null) => void;
  selectLamp: (productId: string | null) => void;
  selectPlant: (productId: string | null) => void;
  selectDecor: (productId: string | null) => void;
  resetWorkspace: () => void;
}

export type WorkspaceStore = Workspace & WorkspaceActions;
