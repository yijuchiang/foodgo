import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useLikesStore = create(
  persist(
    (set) =>({
      likes: [],
      addLikes: (product) => set((state) => {
        // const exists = state.likes.find((item) => item.id === product.id)
        // if (exists) return state
        return { likes: [...state.likes, product] }
      }),
      removeLikes: (id) => set((state) => {
        const newLikes = state.likes.filter((item) => item.id !== id)
        return { newLikes }
      })
    }),
    {
      name: 'food-likes'
    }
  )
)