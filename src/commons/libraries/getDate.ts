const getDate = (date: string): string => {
  if (Number.isNaN(new Date(date).getTime())) return "";
  const day = new Date(date);
  day.setHours(day.getHours() - 9);
  console.log(day);
  const fullDate = Intl.DateTimeFormat("ko-KR", {
    dateStyle: "full",
    timeStyle: "long",
  })
    .format(day)
    .slice(5, -8);
  return fullDate;
};

export default getDate;
