import { APIRequestContext } from "@playwright/test";

export class GetBookingApi {
  private request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getAllBookingIds() {
    return this.request.get("/booking");
  }

  async getBookingById(bookingId: string) {
    return this.request.get(`/booking/${bookingId}`);
  }
}
