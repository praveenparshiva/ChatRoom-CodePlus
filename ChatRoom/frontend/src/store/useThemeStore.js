import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("ChatRoom-theme") || "night",
  setTheme: (theme) => {
    localStorage.setItem("ChatRoom-theme", theme);
    set({ theme });
  },
}));
