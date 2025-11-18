// stores/auth.store.ts
import * as SecureStore from "expo-secure-store";
import { create } from "zustand";

type AuthState = {
  token: string | null;
  //   user: any | null;
  setAuth: (token: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  //   user: null,

  setAuth: async (token) => {
    await SecureStore.setItemAsync("token", token);
    set({ token });
  },

  logout: async () => {
    await SecureStore.deleteItemAsync("token");
    set({ token: null });
  },
}));
