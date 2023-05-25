import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

export const useStore = create(
  subscribeWithSelector((set) => ({
    // Loading
    isLoading: true,
    data: [],

    // Overlay
    overlay: false,
    toggleOverlay: () => set((state) => ({ overlay: !state.overlay })),

    // Mobile Menu
    mobileMenuOpen: false,
    openMobileMenu: () => set({ mobileMenuOpen: true, overlay: true }),
    closeMobileMenu: () => set({ mobileMenuOpen: false, overlay: false }),
    toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen, overlay: !state.overlay })),

    // Create Page
    isGenerating: false,

    // Gallery Page
    photoSwipe: null,
    setPhotoSwipe: (index) => set((state) => ({ photoSwipe: { ...state.data[index], index: index } })),
    photoSwipePrev: () =>
      set(({ data, photoSwipe }) => (photoSwipe.index > 0 ? { photoSwipe: { ...data[photoSwipe.index - 1], index: photoSwipe.index - 1 } } : {})),
    photoSwipeNext: () =>
      set(({ data, photoSwipe }) =>
        photoSwipe.index < data.length - 1 ? { photoSwipe: { ...data[photoSwipe.index + 1], index: photoSwipe.index + 1 } } : {}
      ),
  }))
);
