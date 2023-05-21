import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';


export const useStore = create(
  subscribeWithSelector((set) => ({
    // Overlay
    overlay: false,
    toggleOverlay: () => set((state) => ({ overlay: !state.overlay })),

    // Mobile Menu
    mobileMenuOpen: false,
    openMobileMenu: () => set({ mobileMenuOpen: true, overlay: true }),
    closeMobileMenu: () => set({ mobileMenuOpen: false, overlay: false }),
    toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen, overlay: !state.overlay })),
  }))
);
