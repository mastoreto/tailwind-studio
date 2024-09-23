import { create } from 'zustand';
type ElementPropsState = {
  width: number;
  height: number;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
};

// Remove the duplicate import statement for InitialValues
// import { InitialValues } from '@arc/utils/types';
export const useElementSlice = create<ElementPropsState>((set) => ({
  width: 1,
  height: 1,
  setWidth: (width: number) => set({ width }),
  setHeight: (height: number) => set({ height }),
}));
