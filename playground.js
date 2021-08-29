// practicing filtering

let a = [{"user":"admin","_id":"6123cba99675f82c73adb053","day":23,"month":8,"year":2021,"hour":12,"minute":23,"__v":0},{"user":"admin","_id":"6123ce632ef8d32cd5083baf","day":23,"month":3,"year":2021,"hour":12,"minute":23,"__v":0},{"user":"admin","_id":"6123cf0fcaa6162cf9a95e19","day":23,"month":3,"year":2021,"hour":12,"minute":23,"__v":0},
    {"user":"admin","_id":"6123cf4f777bc62d15c4605a","day":23,"month":3,"year":2021,"hour":12,"minute":23,"__v":0},
    {"user":"arieldeveloper","_id":"6123cf53777bc62d15c4605c","day":23,"month":3,"year":2021,"hour":12,"minute":23,"__v":0}];

var newArray = a.filter(function (app) {
    return app.user == "arieldeveloper";
});
console.log(newArray);
