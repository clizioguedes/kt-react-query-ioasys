import api from "@/services/api";
import { User } from "@/types/User";

export async function getUsers(): Promise<User[]> {
  return api.get("/users").then((response) => response.data);
}

export async function createUser(data: User): Promise<User> {
  return api
    .post("/user", { site: true, ...data })
    .then((response) => response.data);
}
