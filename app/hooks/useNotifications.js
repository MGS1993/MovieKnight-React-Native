import { useEffect, useContext } from "react";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

import AuthContext from "../auth/context";
import expoPushTokens from "../Util/expoPushTokens";

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
      expoPushTokens.pushTokenRegistration(
        token,
        userContext.user,
        "/registerToken"
      );
      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: false,
        }),
      });

      if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });
      }

      // Notifications.scheduleNotificationAsync({
      //   content: {
      //     title: "Time's up!",
      //     body: "Change sides!",
      //   },
      //   trigger: {
      //     seconds: 15,
      //   },
      // });
    } catch (error) {
      console.log("Error registering token", error);
    }
  };
};
