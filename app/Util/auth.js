const backendAddress = `http://10.196.64.208:9000/api`;

const login = async (values, endpoint) => {
  try {
    const response = await fetch(backendAddress + endpoint, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return { data, response };
  } catch (error) {
    console.log(error);
  }
};

const registration = async (payload, endpoint) => {
  try {
    const dataBody = {
      userName: payload.userName,
      email: payload.email,
      passWord: payload.password,
    };
    const response = await fetch(backendAddress + endpoint, {
      method: "POST",
      body: JSON.stringify(dataBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    return { response, data };
  } catch (error) {
    console.log(error);
  }
};

export default {
  login,
  registration,
};
