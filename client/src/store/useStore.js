import { create } from 'zustand';

export const useStore = create((set) => ({
  overlay: true,
  toggleOverlay: () => set((state) => ({ overlay: !state.overlay })),
  mobileMenuOpen: false,
  enableMobileMenu: () => set({ mobileMenuOpen: true, overlay: true }),
  enableMobileMenu: () => set({ mobileMenuOpen: false, overlay: false }),
  toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen, overlay: !state.overlay })),
}));
