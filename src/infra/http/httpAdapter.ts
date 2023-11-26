export interface HttpResponse {
  status: Number;
  body?: any;
  message?: string;
}

export interface HttpRequest {
  body?: any;
  user_id?: string;
}
