import { useEffect, useContext } from "react";
import * as Notifications from "expo-notifications";

import AuthContext from "../auth/context";
import backendCalls from "../Util/backendCalls";

export default useNotifications = (notificationListener) => {
  const userContext = useContext(AuthContext);

  useEffect(() => {
    registerForPushNotifications();
    if (notificationListener)
      Notifications.addNotificationResponseReceivedListener(
        notificationListener
      );
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Notifications.getPermissionsAsync();
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      backendCalls.pushTokenRegistration(
        token,
        userContext.user,
        "/registerToken"
      );
    } catch (error) {
      console.log("Error registering token", error);
    }
  };
};
