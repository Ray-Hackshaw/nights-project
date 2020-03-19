var index = 0;
var ref_val = 0;
function myFunction() {

    var lines = ["light the way", "make you cry", "fade with time", "are half your life", 
    "let you decide", "hold you forever", "make you happy", "find your heart", "crash around you", 
    "swallow the world", "feel like the tides", "are so noisy and bright", "make you realise"]
    if (index < lines.length) {
        document.getElementById("demo").innerHTML = lines[index];
        index = index + 1;
    }
    else{
        document.getElementById("demo").innerHTML = "are all the same in the end.";
        document.getElementById("demo").style.color="black";
        ref_val = ref_val + 1;
        console.log(ref_val);
    }
    if (ref_val > 1){
        document.getElementById("demo").onclick=window.location.reload();
    }
}
