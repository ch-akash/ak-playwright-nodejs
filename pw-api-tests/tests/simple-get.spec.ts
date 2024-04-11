import test, { APIResponse, expect } from "@playwright/test";
import exp from "constants";

test("Simple GET Call", async ({ request }) => {
  const getResponse: APIResponse = await request.get("/booking/1");

  //To validate if response was success
  expect(getResponse).toBeOK();
  expect(getResponse.ok()).toBeTruthy();

  //To validate HTTP Status code
  expect(getResponse.status()).toBe(200);

  //To extract a field from response using JSON path
  const firstName: string = JSON.parse(await getResponse.text()).firstname;
  const checkInDate: string = JSON.parse(await getResponse.text()).bookingdates
    .checkin;
  console.log(firstName);
  console.log(checkInDate);

  //Poll until our assertion has passed.
  //We are polling a code block inside an async expect
  await expect
    .poll(async () => {
      //Your code block goes here which we need to poll
      const rs = await request.get("/booking/1");
      console.log("Polling API request to GET Api");
      return rs.statusText();
    })
    .toBe("OK"); //Condition needs to fulfilled until

  //toPass method has 0 timeout
  //You need to set custom timeout
  await expect(async () => {
    //Your code block goes here which we need to poll
    const rs = await request.get("/booking/1");
    console.log("Polling API request to GET Api");
    expect(rs.statusText()).toBe("OK");
    expect(rs.status()).toBe(200);
  }).toPass({ timeout: 5000 });
});
