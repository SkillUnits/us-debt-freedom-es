var slider = document.getElementById("range-slider");
var output = document.getElementById("selected-value");
var finalValue = document.getElementById("final-value");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    if (this.value < 30000) {
        var finalValue = Math.floor(this.value * 0.55);
        document.getElementById("final-value").innerHTML = finalValue;
    } else if (this.value >= 30000 && this.value < 70000) {
        var finalValue = Math.floor(this.value * 0.49);
        document.getElementById("final-value").innerHTML = finalValue;
    } else if (this.value >= 70000 && this.value <= 100000) {
        var finalValue = Math.floor(this.value * 0.39);
        document.getElementById("final-value").innerHTML = finalValue;
    }
}