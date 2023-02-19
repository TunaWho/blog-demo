import moment from 'moment';

export function dateTimeFormatHuman(dateTime) {
  const humanDateTime = moment(dateTime);
  return humanDateTime.fromNow();
}
