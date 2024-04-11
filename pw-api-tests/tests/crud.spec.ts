import { APIResponse, expect } from "@playwright/test";
import { test } from "./support/api-init";

const username: any = process.env.RESTBOOKER_USERNAME;
const password: any = process.env.RESTBOOKER_PASSWORD;

test("CRUD Operation for booking APIs", async ({ baseApi }) => {
  //Create a booking
  const createdBookingResponse: APIResponse =
    await baseApi.createBookingApi.createBooking(
      "Joe",
      "Rose",
      2000,
      false,
      "2024-12-12",
      "2024-12-25",
      "Water"
    );

  //Save the JSON response and booking ID variable
  const jsonResponse = JSON.parse(await createdBookingResponse.text());
  const bookingId = jsonResponse.bookingid;
  console.log(bookingId);

  //Retrieve the created booking by ID
  const getBookingResponse: APIResponse =
    await baseApi.getBookingApi.getBookingById(bookingId);

  expect(getBookingResponse).toBeOK();
  expect(getBookingResponse.status()).toBe(200);
  console.log(`Retrieved Booking Response: ${await getBookingResponse.text()}`);

  //Update the booking
  const authResponse = await baseApi.authApi.getAuthToken(username, password);
  const token: string = JSON.parse(await authResponse.text()).token;
  //Update this booking using HTTP PUT call
  const updateBookingResponse = await baseApi.updateBookingApi.updateBooking(
    "Joe",
    "Rose",
    2000,
    true,
    "2024-10-02",
    "2024-11-15",
    "Mineral Water",
    bookingId,
    token
  );

  const updatedJsonResponse = JSON.parse(await updateBookingResponse.text());
  console.log(await updateBookingResponse.text());

  //Deleting the created booking
  const deleteApiResponse: APIResponse =
    await baseApi.deleteBookingApi.deleteBookingById(bookingId, token);

  console.log(await deleteApiResponse.text());
});
