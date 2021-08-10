var day = null;
var battery = null;
function update(){
    var date = new Date();
    document.getElementById("_time").textContent = add0(date.getHours()) + ':' + add0(date.getMinutes()) + ':' + add0(date.getSeconds());
    var d = date.getDate();
    if (d !== day) {
        document.getElementById("_date").textContent = add0(day = d) + '.' + add01(date.getMonth()) + '.';
    }
    var b = Math.floor(navigator.webkitBattery.level * 100);
    if (b !== battery) {
        document.getElementById("_battery").textContent = (battery = b) + '%';
    }
    setTimeout(update, 1000);
}
function add0(n){
	if (n < 10) {
		return '0' + n;
	}
	return n;
}
function add01(n){
	var real = n + 1;
	if (real < 10) {
		return '0' + real;
	}
	return real;
}
document.addEventListener("visibilitychange", function(){
    if (!document.hidden) {
        update();
    }
});
update();