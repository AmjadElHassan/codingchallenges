function humanReadable(seconds) {
    //okay first thing we have to do is create the variables that will eventually be displayed
    let hours = Math.floor((seconds / 3600))//padStart method turns a string to a minimum number of characters and replaces spaces with the value i specify
    let secTot = seconds % 3600//the remaining seconds left after subtracting hours
    let min = Math.floor(secTot / 60)//organizes post-hour seconds into the nearest minutes
    let sec = secTot % 60//this represents the remaining seconds after hour and minute calculation
    if (hours > 99) {//if it goes past our design parameter of 100 hours
        return "99:59:59"
    } else {//otherwise return our info organized and processed
        return `${hours.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, '0')}`
    }

}



function bestPractice(seconds) {
    var pad = function (x) { return (x < 10) ? "0" + x : x; }
    return pad(parseInt(seconds / (60 * 60))) + ":" +
        pad(parseInt(seconds / 60 % 60)) + ":" +
        pad(seconds % 60)
}

