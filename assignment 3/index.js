function flow() {
    var name = document.getElementById("input")
    var data = name.value;
    var dart = document.getElementById("head")
    dart.innerHTML ="Hey " + data;
    console.log(dart);

}