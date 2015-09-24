var accelerationWatch = null;
function updateAcc(acc) {
    socket.emit('accX',acc.x);
    socket.emit('accY',acc.y);
    socket.emit('accZ',acc.z);
    updatePlot(acc.x, dataX, plotX);
    updatePlot(acc.y, dataY, plotY);
    updatePlot(acc.z, dataZ, plotZ);
}

function getAcc() {
    if (accelerationWatch !== null) {
        navigator.accelerometer.clearWatch(accelerationWatch);
        updateAcc({x : "", y : "", z : ""});
        accelerationWatch = null;
        document.getElementById("button").textContent = "Start";
    } else {
        document.getElementById("button").textContent = "Stop";
        accelerationWatch = navigator.accelerometer.watchAcceleration(
            updateAcc, function(ex) {
                alert("getAcc failed (" + ex.name + ": " + ex.message + ")");
            }, {frequency:100});
    }
};
