import { APIRequestContext } from "@playwright/test";

export class UpdateBookingApi {
  private request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }

  payload = {
    firstname: "Jim",
    lastname: "Brown",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: "2018-01-01",
      checkout: "2019-01-01",
    },
    additionalneeds: "Breakfast",
  };

  async updateBooking(
    firstname: string,
    lastname: string,
    totalprice: number,
    depositpaid: boolean,
    checkin: string,
    checkout: string,
    additionalneeds: string,
    bookingId: number,
    token: string
  ) {
    this.payload.additionalneeds = additionalneeds;
    this.payload.firstname = firstname;
    this.payload.lastname = lastname;
    this.payload.totalprice = totalprice;
    this.payload.depositpaid = depositpaid;
    this.payload.bookingdates.checkin = checkin;
    this.payload.bookingdates.checkout = checkout;

    return await this.request.put(`/booking/${bookingId}`, {
      data: this.payload,
      headers: {
        Cookie: `token=${token}`,
      },
    });
  }
}
