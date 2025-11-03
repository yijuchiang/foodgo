import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useLikesStore = create(
  persist(
    (set) =>({
      likes: [],
      addLikes: (product) => set((state) => {
        return { likes: [...state.likes, product] }
      }),
      removeLikes: (id) => set((state) => {
        return { likes: state.likes.filter((item) => item.id !== id)}
      })
    }),
    {
      name: 'food-likes'
    }
  )
)