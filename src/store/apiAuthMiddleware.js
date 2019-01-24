import { RSAA } from "redux-api-middleware";

export default function({ getState }) {
  return function(next) {
    return function(action) {
      const rsaa = action[RSAA];
      if (rsaa) {
        // if Redux Standard API-calling Action
        const token = getState().token;
        if (token) {
          // inject authentication token
          rsaa.headers = {
            Authorization: `Bearer ${token}`,
            ...rsaa.headers
          };
        }
      }
      return next(action);
    };
  };
}
