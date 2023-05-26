import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

export const useStore = create(
  subscribeWithSelector((set) => ({
    // Loading
    loading: true,
    setLoading: (loading) => set({ loading }),

    // Gallery Data
    data: [],
    setData: (data) => set({ data }),

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
    searchKey: '',
    setSearchKey: (searchKey) => set({ searchKey }),

    // Photo Swipe Overlay
    photoSwipe: null,
    setPhotoSwipe: (index) => set(({ data }) => ({ photoSwipe: { ...data[index], index, isLast: !(index < data.length - 1) } })),
    resetPhotoSwipe: () => set({ photoSwipe: null }),
    photoSwipePrev: () =>
      set(({ data, photoSwipe }) =>
        photoSwipe.index > 0 ? { photoSwipe: { ...data[photoSwipe.index - 1], index: photoSwipe.index - 1 }, isLast: false } : {}
      ),
    photoSwipeNext: () =>
      set(({ data, photoSwipe }) =>
        photoSwipe.isLast
          ? {}
          : { photoSwipe: { ...data[photoSwipe.index + 1], index: photoSwipe.index + 1, isLast: !(photoSwipe.index + 1 < data.length - 1) } }
      ),
  }))
);
