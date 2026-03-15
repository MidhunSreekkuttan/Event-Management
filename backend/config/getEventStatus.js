const getEventStatus = (startTime, endTime) => {
  const now = new Date();

  if (now < new Date(startTime)) {
    return "upcoming";
  }

  if (now >= new Date(startTime) && now <= new Date(endTime)) {
    return "ongoing";
  }

  return "completed";
};
export default getEventStatus;
