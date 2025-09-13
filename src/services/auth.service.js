import axios from "axios";

export const signInService = async ({ email }) => {
  try {
    const user = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/signup`,
      {
        email,
      },
      { withCredentials: true }
    );
    return user.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateUserDetails = async ({ name, password }) => {
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/update-user-details`,
      {
        name,
        password,
      },
      { withCredentials: true } 
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
