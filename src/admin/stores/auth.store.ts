import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  isAuthChecked: boolean;
  username: string;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setIsAuthChecked: (isAuthChecked: boolean) => void;
  setUsername: (username: string) => void;
  setAuthState: (
    authState: Pick<AuthState, "isAuthenticated" | "isAuthChecked" | "username">
  ) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  isAuthChecked: false,
  username: "",
  setIsAuthenticated: (isAuthenticated: boolean) => {
    set({ isAuthenticated });
  },
  setIsAuthChecked: (isAuthChecked: boolean) => {
    set({ isAuthChecked });
  },
  setUsername: (username: string) => {
    set({ username });
  },
  setAuthState: ({ isAuthenticated, isAuthChecked, username }) => {
    set({ isAuthenticated, isAuthChecked, username });
  },
}));
