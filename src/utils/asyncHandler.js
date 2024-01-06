//Yeh Promise wala wrapper
const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//   } catch (err) {
//     res.status(err.code || 500).json({                //Yeh Try Catch wala wrapper
//       success: false,
//       message: err.message,
//     });
//   }
// };