var img=["Father pic.png","mother pic.jpg","sister pic.jpg","brother pic.jpg"];
var a=["Father","Mother","Sister","Brother"];
var i = 0;

function nextslide(){
    document.getElementById("album").src = img[i];
    document.getElementById("f2").innerHTML = a[i];
    i ++;
    if(i > 3)
    {
        i = 0;
    }
}


