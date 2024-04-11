import { APIRequestContext } from "@playwright/test";

export class AuthTokenApi {
  private request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getAuthToken(username: string, password: string) {
    return await this.request.post("/auth", {
      data: {
        username: username,
        password: password,
      },
    });
  }
}
