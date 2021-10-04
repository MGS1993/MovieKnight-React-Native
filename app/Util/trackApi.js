import * as Notifications from "expo-notifications";
import differenceInSeconds from "date-fns/differenceInSeconds";
import parseISO from "date-fns/parseISO";

const backendAddress = "http://10.196.64.208:9000/api";

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
    return { data, response };
  } catch (err) {
    console.log(err);
  }
};

const setNotificationSchedule = async (nextAirDate, title) => {
  const today = new Date();
  const airDateParsed = parseISO(nextAirDate);
  const difference = differenceInSeconds(airDateParsed, today);
  console.log("difference:", difference);
  let identifier;
  /*if difference is negative appendNotification will still append to
  db. Update hook will run and apply appropriate data when available*/
  if (difference > 0) {
    identifier = await Notifications.scheduleNotificationAsync({
      content: {
        title: "New Episode Alert",
        body: `New Episode of ${title} out today `,
      },
      trigger: {
        seconds: difference,
      },
    });
  }
  console.log("Notification set. Identifier:", identifier);
  return identifier;
};

const appendNotificationIdentifier = async (_id, identifier) => {
  try {
    const response = await fetch(
      `${backendAddress}/append_schedule/${_id}/${identifier}`
    );
    return await response.json();
  } catch (error) {
    console.log(error);
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
    console.log(data);
    return data;
    // console.log(data.msg, data.data);
  } catch (err) {
    console.log(err);
  }
};

const getScheduledNotifications = async () => {
  const notificationList =
    await Notifications.getAllScheduledNotificationsAsync();

  console.log(notificationList);
};

const cancelScheduledNotification = async (identifier) => {
  try {
    identifier !== undefined
      ? await Notifications.cancelScheduledNotificationAsync(identifier)
      : console.log("Provided Identifier is undefined");
  } catch (error) {
    console.log("Error Canceling Scheduled Notification", error);
  }
};

const cancelAllNotifications = async () => {
  console.log("cancel ran");
  return await Notifications.cancelAllScheduledNotificationsAsync();
};

export default {
  appendNotificationIdentifier,
  cancelAllNotifications,
  cancelScheduledNotification,
  deleteHandler,
  handleGetTracked,
  handleTvTrack,
  setNotificationSchedule,
  getScheduledNotifications,
};
