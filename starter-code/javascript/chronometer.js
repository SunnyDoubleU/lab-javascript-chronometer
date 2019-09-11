class Chronometer {
  constructor() {
    this.intervalId = ""
    this.currentTime = 0 // this second
  }
  startClick() {
    var fixThis = this
    // save the interval ref somewhere in this object
    fixThis.intervalId = setInterval(function() {
      fixThis.currentTime++
      // printTime()
    }, 1000)
  }
 
getMinutes() {
  var fixThis = this
  fixThis.minNum = 0
  fixThis.minNum = Math.floor(fixThis.currentTime / 60)
  return fixThis.minNum
  }

getSeconds() {
  var fixThis = this 
  var minNum = Math.floor(fixThis.currentTime / 60)
  fixThis.secNum = 0
  fixThis.secNum = fixThis.currentTime - (minNum * 60)
  return fixThis.secNum
}

getMilli() {
}

twoDigitsNumber(num) {
  this.twoDigNum = ""

  if (num < 10) {
    this.twoDigNum = `0${num}` 
  }
  else {
    this.twoDigNum = `${num}`
  } 

  return this.twoDigNum
}

stopClick() {
  clearInterval(this.intervalId)
}

resetClick() {
  this.currentTime = 0
}
splitClick() {
  this.minute = `${this.twoDigitsNumber(this.getMinutes())}`
  this.second = ` ${this.twoDigitsNumber(this.getSeconds())}`
  this.timeNow = `${this.minute}:${this.second}`
  return this.timeNow
}
}