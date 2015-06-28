var _ = require('underscore'),
	fs = require('fs'),
	icoeTimes = require('./SalahSchedules_ICOE.json'),
	mapsTimes = require('./SalahSchedules_MAPS.json'),
	mergedTimes = [];
	
icoeTimes.forEach(function(icoe){
	var maps = _.findWhere(mapsTimes, {month: icoe.month, day: icoe.day.toString() });
	// maps day is string so change it to number first
	maps.day = parseInt(maps.day);
	var merged = _.extend(icoe, maps);
	mergedTimes.push(merged);
});

fs.writeFileSync('SalahSchedules.json', JSON.stringify(mergedTimes));