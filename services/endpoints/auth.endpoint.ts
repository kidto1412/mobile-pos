import { LoginRequest, LoginResponse } from "@/interfaces/auth.interface";
import { POST } from "@/utils/api.util";

export const AuthAPI = {
  login(payload: LoginRequest) {
    return POST<LoginResponse>("/auth/login", payload);
  },
};
