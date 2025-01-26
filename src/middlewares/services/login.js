import { URL_API } from "../config";

export const login = async (username, password) => {
  const url = `${URL_API}/login-inner`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.status === 401) {
      const { errors } = await response.json() || {};
      throw new Error(errors?.detail);
    }

  } catch (error) {
    console.error(error);
  }

};
