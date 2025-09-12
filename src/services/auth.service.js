import axios from "axios";

export const signInService = async ({ email }) => {
  try {
    const user = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/signup`, {
      email,
    });
    return user.data;
  } catch (error) {
    return error.response.data;
  }
};


