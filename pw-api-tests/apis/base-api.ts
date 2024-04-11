import { APIRequestContext } from "@playwright/test";
import { AuthTokenApi } from "./auth-api";
import { CreateBookingApi } from "./create-booking";
import { UpdateBookingApi } from "./update-booking";
import { DeleteBookingApi } from "./delete-api";
import { GetBookingApi } from "./get-api";

export class BaseApi {
  readonly authApi: AuthTokenApi;
  readonly createBookingApi: CreateBookingApi;
  readonly updateBookingApi: UpdateBookingApi;
  readonly deleteBookingApi: DeleteBookingApi;
  readonly getBookingApi: GetBookingApi;

  constructor(request: APIRequestContext) {
    this.authApi = new AuthTokenApi(request);
    this.createBookingApi = new CreateBookingApi(request);
    this.updateBookingApi = new UpdateBookingApi(request);
    this.deleteBookingApi = new DeleteBookingApi(request);
    this.getBookingApi = new GetBookingApi(request);
  }
}
