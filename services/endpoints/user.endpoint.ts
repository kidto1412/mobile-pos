import { PaginationRequest } from "@/interfaces/pagination.interface";
import { UserRequest, UserResponse } from "@/interfaces/user.interface";
import { DELETE, GET_PAGINATED, POST } from "@/utils/api.util";

export const UserEndpoint = {
  create(payload: UserRequest) {
    return POST("/users", payload);
  },
  getPagination(params: PaginationRequest) {
    return GET_PAGINATED<UserResponse>("/users/pagination", { params });
  },
  //   update(payload: LoginRequest) {
  //     return POST<LoginResponse>("/users", payload);
  //   },
  delete(id: string) {
    return DELETE(`/users/${id}`);
  },
};
