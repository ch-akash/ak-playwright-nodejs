import { APIRequestContext } from "@playwright/test";
export class DeleteBookingApi {
  private request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async deleteBookingById(bookingId: number, token: string) {
    return await this.request.delete(`/booking/${bookingId}`, {
      headers: {
        Cookie: `token=${token}`,
      },
    });
  }
}
