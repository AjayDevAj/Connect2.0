import moment from 'moment';
export const dateToFromNowDaily = (myDate) => {
    // get from-now for this date
    var fromNow = moment( myDate ).fromNow();
  
    // ensure the date is displayed with today and yesterday
    return moment( myDate ).calendar( null, {
        // when the date is closer, specify custom values
        // lastWeek: '[Last] dddd',
        lastDay:  '[Yesterday]',
        sameDay:  'LT',
        nextDay:  'L',
        lastWeek:'dddd',
  
        // nextWeek: 'dddd',
        // when the date is further away, use from-now functionality             
        sameElse: function () {
            return 'DD/MM/YYYY';
        }
    });
  };
  