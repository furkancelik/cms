import { URL, ENDPOINT_URL, SECRET_KEY } from "./config";

export const getApi = async query => {
  const response = await fetch(
    `${URL + ENDPOINT_URL}?${query}&SECRET_KEY=${SECRET_KEY}`,
    {
      method: "GET",
      headers: {
        Connection: "close",
        Accept: "application/json",
        "Content-Type": "multipart/form-data"
      }
    }
  );
  const responseData = await response.json();
  return responseData;
};

export const postApi = async formData => {
  const response = await fetch(
    `${URL + ENDPOINT_URL}?SECRET_KEY=${SECRET_KEY}`,
    {
      method: "POST",
      headers: {
        Connection: "close",
        // Accept: "application/json",
        // "Content-Type": "multipart/form-data",
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: formData
    }
  );
  console.log(response);
  const responseData = await response.json();
  return responseData;
};
export const error = async message => {
  console.error("Error", message);
};

// export default {
//   getApi: async query => {
//     const response = await fetch(
//       `${URL + ENDPOINT_URL}?${query}&SECRET_KEY=${SECRET_KEY}`,
//       {
//         method: "GET",
//         headers: {
//           Connection: "close",
//           Accept: "application/json",
//           "Content-Type": "multipart/form-data"
//         }
//       }
//     );
//     const responseData = await response.json();
//     return responseData;
//   },
//   postApi: async formData => {
//     const response = await fetch(
//       `${URL + ENDPOINT_URL}?SECRET_KEY=${SECRET_KEY}`,
//       {
//         method: "POST",
//         headers: {
//           Connection: "close",
//           Accept: "application/json",
//           "Content-Type": "multipart/form-data"
//         },
//         body: formData
//       }
//     );
//     const responseData = await response.json();
//     return responseData;
//   },
//   error: async message => {
//     console.error(message);
//   }
// };
