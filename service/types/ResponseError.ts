// Response Error
interface ResponseError extends Error {
  responseStatusCode: number;
}

export default ResponseError;
