abstract class HttpServer {
  abstract listen(port: number, callback: Function): void;
}

export default HttpServer;
