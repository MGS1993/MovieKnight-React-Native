import trackApi from "./trackApi";
import formatDistance from "date-fns/formatDistance";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import format from "date-fns/format";
import arrayManipulate from "./arrayManipulate";

const checkForNextEpisode = async (userEmail) => {
  /*FUCK ALL THIS. make a function to schedule the reminder based on the next
  air date. make it so that after it fires it checks the next air date 
  and if it is not equal to the current date fire a new reminder*/

  // const today = format(new Date(), "yyyy-MM-dd");

  // const todayParsed = Date.parse(today);
  const tracked = await trackApi.handleGetTracked(userEmail);

  // console.log(todayParsed);
  // const test = formatDistance(new Date(today), new Date(tracked));

  // arrayManipulate.parseStringDate(today);
  tracked.forEach((item) => {
    if (item.nextAirDate !== undefined)
      console.log(formatDistanceToNow(Date.parse(item.nextAirDate)));
  });
};

export default checkForNextEpisode;
