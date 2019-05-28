import { Error } from "../models/Error";

export function createError(err) {
  if (err.response)
    return new Error(err.response.data);
  if (err.message)
    return new Error({ errorConstant: err.message, errorMessage: '' });

  return new Error({ errorConstant: 'Unexpected Error Occured', errorMessage: '' });
}