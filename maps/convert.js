xlsxj = require("xlsx-to-json");
  xlsxj({
    input: "PrayerTime2015MAPS.xlsx", 
    output: "SalahSchedules_MAPS.json"
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
  });