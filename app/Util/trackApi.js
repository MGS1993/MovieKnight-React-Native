const backendAddress = `http://10.196.64.208:9696/api`;

const handleTvTrack = async (values, endpoint, userEmail) => {
  try {
    let dataBody = {
      title: values.name,
      id: values.id,
      firstAirDate: values.first_air_date,
      lastAirDate: values.last_air_date,
      nextAirDate: values.next_episode_to_air?.air_date,
      noEpisodes: values.number_of_episodes,
      noSeasons: values.number_of_seasons,
      trackedBy: userEmail,
      status: values.status,
    };

    const response = await fetch(backendAddress + endpoint, {
      method: "POST",
      body: JSON.stringify(dataBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data.msg);
    return { response, data };
  } catch (err) {
    console.log(err);
  }
};

const handleGetTracked = async (userEmail) => {
  try {
    const response = await fetch(
      `${backendAddress}/get_tracked_shows/${userEmail}`
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const deleteHandler = async (userEmail, showId) => {
  try {
    const response = await fetch(
      `${backendAddress}/delete_tv_show/${showId}/${userEmail}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data.msg, data.data);
  } catch (err) {
    console.log(err);
  }
};

export default {
  deleteHandler,
  handleGetTracked,
  handleTvTrack,
};
