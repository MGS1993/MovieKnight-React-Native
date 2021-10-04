import { useEffect, useContext } from "react";
import parseISO from "date-fns/parseISO";
import differenceInSeconds from "date-fns/differenceInSeconds";

import AuthContext from "../auth/context";
import mediaCalls from "../Util/mediaCalls";
import trackApi from "../Util/trackApi";

export default useUpdateNotifications = () => {
  const { user } = useContext(AuthContext);
  const today = new Date();

  useEffect(() => {
    checkForUpdates();
  }, []);

  const checkForUpdates = async () => {
    const dbData = await trackApi.handleGetTracked(user.email);
    // console.log("dbData", dbData);
    try {
      dbData?.forEach(async (item) => {
        const apiData = await mediaCalls.getMediaDetails("tv", item.id);
        const { air_date: apiAirDate } = apiData.next_episode_to_air;
        const { name } = apiData;

        const airDateParsed = parseISO(item.nextAirDate);
        const difference = differenceInSeconds(airDateParsed, today);

        if (item.identifier === undefined) {
          console.log("Saved when next episode was not updated on the db.");
          //get mongodb schema and update with schedule and identifier
          const newParsedAirDate = parseISO(apiAirDate);
          const newDifference = differenceInSeconds(newParsedAirDate, today);

          if (newDifference > 0) {
            const identifier = await trackApi.setNotificationSchedule(
              apiAirDate,
              name
            );
            await trackApi.appendNotificationIdentifier(item._id, identifier);
          }
        }

        if (item.identifier !== undefined && difference < 0) {
          //get data from api and check if next air date has changed.
          const newParsedAirDate = parseISO(apiAirDate);
          const newDifference = differenceInSeconds(newParsedAirDate, today);
          console.log(`${item.title} newDifference: ${newDifference}`);

          if (newDifference > 0) {
            console.log(`New date available in api: ${item.title} `);
            let identifier = await trackApi.setNotificationSchedule(
              apiAirDate,
              name
            );
            await trackApi.appendNotificationIdentifier(item_id, identifier);
          }

          if (newDifference < 0) {
            console.log("api still has not updated");
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
};
