// hooks/useAuth.ts
import { useState } from "react";

import { AuthAPI } from "@/services/endpoints/auth.endpoint";
import { useAuthStore } from "@/stores/auth.store";
import { useRouter } from "expo-router";

export function useAuth() {
  const router = useRouter();
  const setAuth = useAuthStore((s) => s.setAuth);

  const [loading, setLoading] = useState(false);

  const login = async (username: string, password: string) => {
    try {
      setLoading(true);

      const res = await AuthAPI.login({ username, password });

      await setAuth(res.data.access_token);

      router.replace("/(main)");
    } catch (err: any) {
      console.log(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
}
