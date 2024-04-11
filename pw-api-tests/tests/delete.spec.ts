import { APIResponse } from "@playwright/test";
import { test } from "./support/api-init";

//This method is using a hard coded booking ID. It will need a
//new booking id each time we use it. Refer to CRUD spec file
test("Delete a new created booking", async ({ baseApi }) => {
  const username: any = process.env.RESTBOOKER_USERNAME;
  const password: any = process.env.RESTBOOKER_PASSWORD;
  const authResponse = await baseApi.authApi.getAuthToken(username, password);

  const token: string = JSON.parse(await authResponse.text()).token;

  const deleteApiResponse: APIResponse =
    await baseApi.deleteBookingApi.deleteBookingById(4524, token);

  console.log(await deleteApiResponse.text());
});
