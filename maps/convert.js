var _ = require('underscore'),
  fs = require('fs'),
  xlsxj = require("xlsx-to-json");

xlsxj({
  input: "PrayerTime2015MAPS_2.xlsx",
  output: "SalahSchedules_MAPS.json"
}, function (err, result) {
  if (err) {
    console.error(err);
  } else {
    convert(result);
    console.log(result);    
  }
});

function convert(result) {
  result.forEach(function (item) {
    item.day = parseInt(item.day);
  });
  fs.writeFileSync('SalahSchedules.json', JSON.stringify(result));
}