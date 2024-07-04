import axios from "axios";
import { storage } from "shared/common";
import { User } from "shared/entities/User";

const axiosInstance = axios.create({
  baseURL: "https://api.lettobet.dev.bet4skill.com/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export class Api {
  async login(body: { login: string; password: string }) {
    const response = axiosInstance.post<User>("/client-login", body);

    response.then((response) => {
      if (response.status === 200) {
        storage.setItem("isAuth", true);
      }
    });
    return response;
  }

  me() {
    const response = axiosInstance.get<User>("/auth/me");

    response.catch(() => {
      storage.removeItem("isAuth");
    });

    return response;
  }
}

export const AppApi = new Api();
