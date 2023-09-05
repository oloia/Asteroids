export const formattedDate = (date: Date) => {
  let year = date.getFullYear().toString();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();
  if (+day < 10) {
    day = "0" + day;
  }
  if (+month < 10) {
    month = "0" + month;
  }
  return `${year}-${month}-${day}`;
}

const parts = formattedDate(new Date()).split('-');
export const day = parts[2];
