const ctrlWrapper = ctrl => {
  const func = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      if (error.kind === 'ObjectId') {
        error.status = 404;
        error.message = 'Not found';
      }

      next(error);
    }
  };

  return func;
};

module.exports = ctrlWrapper;
