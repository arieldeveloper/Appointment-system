// All functions pertaining to the appointment system
let testData = [{"user":"admin","_id":"6123cba99675f82c73adb053","day":23,"month":8,"year":2021,"hour":12,"minute":23,"__v":0},
    {"user":"admin","_id":"6123ce632ef8d32cd5083baf","day":23,"month":3,"year":2021,"hour":12,"minute":23,"__v":0},
    {"user":"admin","_id":"6123cf0fcaa6162cf9a95e19","day":23,"month":3,"year":2021,"hour":12,"minute":23,"__v":0},
    {"user":"admin","_id":"6123cf4f777bc62d15c4605a","day":23,"month":3,"year":2021,"hour":12,"minute":23,"__v":0},
    {"user":"arieldeveloper","_id":"6123cf53777bc62d15c4605c","day":23,"month":3,"year":2021,"hour":12,"minute":23,"__v":0},
    {"user":"arieldeveloper","_id":"6123ff50777bc62d15c46064","day":1,"month":1,"year":2021,"hour":12,"minute":0,"__v":0},
    {"user":"arieldeveloper","_id":"6123ff53777bc62d15c46066","day":1,"month":1,"year":2021,"hour":6,"minute":0,"__v":0}];


function generateTimetable(day, month, year, startTime, endTime, interval) {
    // Creates an time table slots given a start time, end time and intervals
    // startTime > 0 && endTime < 24, intervals < 60 (interval given in minutes)
    // ex. generateTimetable(3, 5, 60);
    // [{ date: Date, available: false}, { date: Date, available: true}, { date: Date, available: true}]
    let timeTableObj = [];

    for (var hour = startTime; hour < (endTime + 1); hour++) {
        for (var minute = 0; minute < (60 / interval) * interval; minute += interval) {
            let newObj = {};
            const dateReturned = new Date(year, month, day, hour, minute);
            newObj.date = dateReturned;
            newObj.available = true;
            timeTableObj.push(newObj);
        }
    }
    return timeTableObj;
}

function getDaysBookedSlots(day, month, year, data) {
    // Returns the given days booked slots as objects inside an array
    var newArray = data.filter(function (appointment) {
        return (appointment.day === day && appointment.month === month
            && appointment.year === year);
    });
    return newArray
}


function updateDailyTimetable(startTime, endTime, interval, day, month, year, data) {
    // Example call: console.log(updateDailyTimetable(5, 17, 30,1,1, 2021, testData));

    // Populates a newly generated timetable with the already booked slots
    let newTimeTable = generateTimetable(day, month, year, startTime, endTime, interval); // generate a new table

    // returns all the booked time slots for the current day in JSON
    let bookedTimes = getDaysBookedSlots(day, month, year, data);

    // Loop through all avaiable slots and make them unavailable based on booked time slots
    for (var i = 0; i < newTimeTable.length; i++) {
        for (var j = 0; j < bookedTimes.length; j++) {
            if (bookedTimes[j].hour === newTimeTable[i].hour &&
                bookedTimes[j].minute === newTimeTable[i].minute) {
                // slot is already booked
                newTimeTable[i].available = false;
            }
        }
    }
    return newTimeTable;
    }

export default updateDailyTimetable;

