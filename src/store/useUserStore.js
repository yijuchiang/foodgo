import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist(
    (set) =>({
      userInfo: '',
      setUerInfo: (userInfo) => set({ userInfo: { username: userInfo.username } })
    }),
    {
      name: 'user'
    }
  )
)