import { test, expect, APIResponse } from "@playwright/test";

test("POST Api - Create a new booking", async ({ request }) => {
  const payload = {
    firstname: "Joe",
    lastname: "Fox",
    totalprice: 1000,
    depositpaid: true,
    bookingdates: {
      checkin: "2024-11-01",
      checkout: "2024-12-01",
    },
    additionalneeds: "News Paper",
  };

  const createBookingResponse: APIResponse = await request.post("/booking", {
    data: payload,
  });
  //Expecting that a booking has been created
  await expect(createBookingResponse).toBeOK();

  //Log the created booking ID
  const jsonResponse = JSON.parse(await createBookingResponse.text());
  console.log(jsonResponse.bookingid);

  //Cross validate of request fields with response. It also checks
  //nested Json fields.
  expect(jsonResponse.booking.firstname).toBe(payload.firstname);
  expect(jsonResponse.booking.lastname).toBe(payload.lastname);
  expect(jsonResponse.booking.totalprice).toBe(payload.totalprice);
  expect(jsonResponse.booking.depositpaid).toBeTruthy();
  expect(jsonResponse.booking.additionalneeds).toBe(payload.additionalneeds);
  expect(jsonResponse.booking.bookingdates.checkin).toBe(
    payload.bookingdates.checkin
  );
  expect(jsonResponse.booking.bookingdates.checkout).toBe(
    payload.bookingdates.checkout
  );
});
