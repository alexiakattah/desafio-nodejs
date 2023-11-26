class HttpError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.message = message;
    this.status = status;
  }
}
export default HttpError;
