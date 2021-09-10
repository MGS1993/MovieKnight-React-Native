const backendAddress = `http://10.196.64.208:9696/api`;

const registration = async (payload, endpoint) => {
  /* GO TO BACKEND FOR DONEWITH IT AND GO TO AUTH ROUTE. MAKE A TOKEN WHEN
  YOU REGISTER A USER TO MONGO DB */
  try {
    const dataBody = {
      userName: payload.userName,
      email: payload.email,
      passWord: payload.password,
    };
    // console.log(dataBody);
    const response = await fetch(backendAddress + endpoint, {
      method: "POST",
      body: JSON.stringify(dataBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default {
  registration,
};
