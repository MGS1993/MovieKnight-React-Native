const backendAddress = `http://10.196.64.208:9696/api`;

const pushTokenRegistration = async (token, user, endpoint) => {
  try {
    const dataBody = {
      userName: user.userName,
      email: user.email,
      token: token,
    };
    const response = await fetch(backendAddress + endpoint, {
      method: "POST",
      body: JSON.stringify(dataBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("user registered for notifications", data);
    // return { response, data };
  } catch (error) {
    console.log("error registering token", error);
  }
};

export default {
  pushTokenRegistration,
};
