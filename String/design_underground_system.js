// Problem Link: https://leetcode.com/problems/design-underground-system/
// Difficulty: Medium

// Solution: https://www.youtube.com/watch?v=C-WgQDqOxHs

// Tip: Use two hashmaps

// Time Complexity: O(1) for all functions because we're inserting, reading, and deleting from hashmaps
// Space Complexity: O(N^2 + M), N = stations, M = passengers

var UndergroundSystem = function() {
    this.checkInMap = {}
    this.tripMap = {}
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkInMap[id] = [stationName, t]
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  const [checkInStationName, checkInTime] = this.checkInMap[id]
  const tripKey = `${checkInStationName}-${stationName}`
    
  if (!this.tripMap[tripKey]) {
    this.tripMap[tripKey] = [t - checkInTime, 1]
  } else {
    this.tripMap[tripKey][0] += t - checkInTime
    this.tripMap[tripKey][1]++
  }

  // remove check in so that hashmap only stores active trips and keeps hashmap small
  delete this.checkInMap[id]
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const tripkey = `${startStation}-${endStation}`
    const [totalTripTime, totalTrips] = this.tripMap[tripkey]
    return totalTripTime / totalTrips
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */