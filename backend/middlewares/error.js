class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err.message = new ErrorHandler(message, 400);
  }
  if (err.code === "JsonWebTokenError") {
    const message = `Json Web Token Is Invalid., Try Again!`;
    err.message = new ErrorHandler(message, 400);
  }
  if (err.code === "TokenExpredError") {
    const message = `Json Web Token Is Expired. Try Again!`;
    err.message = new ErrorHandler(message, 400);
  }
  if (err.code === "castError") {
    const message = `Invalid ${err.path}`;
    err.message = new ErrorHandler(message, 400);
  }

  const errorMessage = err.errors
    ? Object.values(err.errors)
        .map((error) => error.message)
        .join("")
    : err.message;
   return res.status(err.statusCode).json({
    success:false,
    message: errorMessage,
   });
};

export default ErrorHandler;
