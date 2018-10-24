//Javascript
function checkKey(e) {

    e = e || window.event;
    if (document.getElementById("PlayTime").innerHTML==" 0 s.")
        {
            startTime();
        }
    if (e.keyCode == '38') {
        // up arrow
        if (moveBoxesUp()==1) {
            document.getElementById("Points").innerHTML = backgroundColorChange();
            addNumber();
        } else {
            if (isNull()==0) {
                alert ("Koniec gry");
                return;
            }
        }
    }
    else if (e.keyCode == '40') {
        // down arrow
        if (moveBoxesDown()==1) {
            document.getElementById("Points").innerHTML = backgroundColorChange();
            addNumber();
        } else {
            if (isNull()==0) {
                alert ("Koniec gry");
                return;
            }
        }
    }
    else if (e.keyCode == '37') {
       // left arrow
        if (moveBoxesLeft()==1) {
            document.getElementById("Points").innerHTML = backgroundColorChange();
            addNumber();
        } else {
            if (isNull()==0) {
                alert ("Koniec gry");
                return;
            }
        }
    }
    else if (e.keyCode == '39') {
       // right arrow
        if (moveBoxesRight()==1) {
            document.getElementById("Points").innerHTML = backgroundColorChange();
            addNumber();
        } else {
            if (isNull()==0) {
                alert ("Koniec gry");
                return;
            }
        }
    }

}

function startTime(index) {
    var myVar = setInterval(myTimer, 100);
    if (index==1){
        clearInterval(myVar);
        text=0.0;
        return;
    }
    var text=0.0;
    function myTimer() {
        text=text + 0.1;        
        document.getElementById("PlayTime").innerHTML = parseFloat(text).toFixed(1) + " s.";
    }
}
function Restart() {
    startTime(1);
    document.getElementById("PlayTime").innerHTML = "0 s."
    document.getElementById("Points").innerHTML = "4";
    document.getElementById("1x1").value=2;
    document.getElementById("1x2").value=2;
    for (i=1; i<5; i++) {
        for (k=1; k<5; k++) {
            document.getElementById(k + "x" + i).value=""; 
        }
    }
    document.location.reload()
}
function moveBoxesLeft() {
    var moved=0;
    var box1;
    var box2;
    var box3;
    var box4;
    for (i=1; i<5; i++){
        if (i!=4){
            for (k=1; k<5; k++){
                for (j=i; j<5; j++){
                    if (document.getElementById(k + "x" + i).value==""){
                        if (document.getElementById(k + "x" + (i+1)).value!=""){
                            moved=1;
                        }
                            document.getElementById(k + "x" + i).value=document.getElementById(k + "x" + (i+1)).value;
                            document.getElementById(k + "x" + (i+1)).value="";
                        switch (i) { 
                            case 1:
                                document.getElementById(k + "x" + (i+1)).value=document.getElementById(k + "x" + (i+2)).value;
                                document.getElementById(k + "x" + (i+2)).value="";
                                document.getElementById(k + "x" + (i+2)).value=document.getElementById(k + "x" + (i+3)).value;
                                document.getElementById(k + "x" + (i+3)).value="";
                                break;
                            case 2:
                                document.getElementById(k + "x" + (i+1)).value=document.getElementById(k + "x" + (i+2)).value;
                                document.getElementById(k + "x" + (i+2)).value="";
                                break;
                        }
                    }
                }
            }
        }
    }
    
    for (i=4; i>0; i--){
        box1 = document.getElementById(i+"x1");
        box2 = document.getElementById(i+"x2");
        box3 = document.getElementById(i+"x3");
        box4 = document.getElementById(i+"x4");
        if (box1.value==box2.value && box1.value!="") {
            moved=1;
            box1.value=2 * box1.value;
            bigBox(box1);
            box2.value=box3.value;
            box3.value=box4.value;
        }
        if (box2.value==box3.value && box2.value!="") {
            moved=1;
            box2.value=2 * box2.value;
            bigBox(box2);
            box3.value=box4.value;
        }
        if (box3.value==box4.value && box3.value!="") {
            moved=1;
            box3.value=2 * box3.value;
            bigBox(box3);
            box4.value="";
        }
    }
     return moved;
}
  function moveBoxesRight() {
    var moved=0;
    var box1;
    var box2;
    var box3;
    var box4;
     for (i=4; i>0; i--){
        if (i!=1){
            for (k=1; k<5; k++){
                for (j=i; j>0; j--){
                    if (document.getElementById(k + "x" + i).value==""){
                        if (document.getElementById(k + "x" + (i-1)).value!=""){
                            moved=1;
                        }
                            document.getElementById(k + "x" + i).value=document.getElementById(k + "x" + (i-1)).value;
                            document.getElementById(k + "x" + (i-1)).value="";
                        switch (i) { 
                            case 4:
                                document.getElementById(k + "x" + (i-1)).value=document.getElementById(k + "x" + (i-2)).value;
                                document.getElementById(k + "x" + (i-2)).value="";
                                document.getElementById(k + "x" + (i-2)).value=document.getElementById(k + "x" + (i-3)).value;
                                document.getElementById(k + "x" + (i-3)).value="";
                                break;
                            case 3:
                                document.getElementById(k + "x" + (i-1)).value=document.getElementById(k + "x" + (i-2)).value;
                                document.getElementById(k + "x" + (i-2)).value="";
                                break;
                        }
                    }
                }
            }
        }
    }
    for (i=1; i<5; i++){
        box4 = document.getElementById(i+"x1");
        box3 = document.getElementById(i+"x2");
        box2 = document.getElementById(i+"x3");
        box1 = document.getElementById(i+"x4");
        if (box1.value==box2.value && box1.value!="") {
            moved=1;
            box1.value=2 * box1.value;
            bigBox(box1);
            box2.value=box3.value;
            box3.value=box4.value;
        }
        if (box2.value==box3.value && box2.value!="") {
            moved=1;
            box2.value=2 * box2.value;
            bigBox(box2);
            box3.value=box4.value;
        }
        if (box3.value==box4.value && box3.value!="") {
            moved=1;
            box3.value=2 * box3.value;
            bigBox(box3);
            box4.value="";
        }
        
    }
      return moved;
}
function moveBoxesUp() {
    var moved=0;
    var box1;
    var box2;
    var box3;
    var box4;
     for (i=1; i<5; i++){
        if (i!=4){
            for (k=1; k<5; k++){
                for (j=i; j<5; j++){
                    if (document.getElementById(i + "x" + k).value==""){
                        if (document.getElementById((i+1) + "x" + k).value!=""){
                            moved=1;
                        }
                            document.getElementById(i + "x" + k).value=document.getElementById((i+1) + "x" + k).value;
                            document.getElementById((i+1) + "x" + k).value="";
                        switch (i) { 
                            case 1:
                                document.getElementById((i+1) + "x" + k).value=document.getElementById((i+2) + "x" + k).value;
                                document.getElementById((i+2) + "x" + k).value="";
                                document.getElementById((i+2) + "x" + k).value=document.getElementById((i+3) + "x" + k).value;
                                document.getElementById((i+3) + "x" + k).value="";
                                break;
                            case 2:
                                document.getElementById((i+1) + "x" + k).value=document.getElementById((i+2) + "x" + k).value;
                                document.getElementById((i+2) + "x" + k).value="";
                                break;
                        }
                    }
                }
            }
        }
    }
    for (i=4; i>0; i--){
        box1 = document.getElementById("1x" + i);
        box2 = document.getElementById("2x" + i);
        box3 = document.getElementById("3x" + i);
        box4 = document.getElementById("4x" + i);
        if (box1.value==box2.value && box1.value!="") {
            moved=1;
            box1.value=2 * box1.value;
            bigBox(box1);
            box2.value=box3.value;
            box3.value=box4.value;
        }
        if (box2.value==box3.value && box2.value!="") {
            moved=1;
            box2.value=2 * box2.value;
            bigBox(box2);
            box3.value=box4.value;
        }
        if (box3.value==box4.value && box3.value!="") {
            moved=1;
            box3.value=2 * box3.value;
            bigBox(box3);
            box4.value="";
        }
    }
     return moved;
} 
function moveBoxesDown() {
    var moved=0;
    var box1;
    var box2;
    var box3;
    var box4;
     for (i=4; i>0; i--){
        if (i!=1){
            for (k=1; k<5; k++){
                for (j=i; j>0; j--){
                    if (document.getElementById(i + "x" + k).value==""){
                        if (document.getElementById((i-1) + "x" + k).value!=""){
                            moved=1;
                        }
                            document.getElementById(i + "x" + k).value=document.getElementById((i-1) + "x" + k).value;
                            document.getElementById((i-1) + "x" + k).value="";
                        switch (i) { 
                            case 4:
                                document.getElementById((i-1) + "x" + k).value=document.getElementById((i-2) + "x" + k).value;
                                document.getElementById((i-2) + "x" + k).value="";
                                document.getElementById((i-2) + "x" + k).value=document.getElementById((i-3) + "x" + k).value;
                                document.getElementById((i-3) + "x" + k).value="";
                                break;
                            case 3:
                                document.getElementById((i-1) + "x" + k).value=document.getElementById((i-2) + "x" + k).value;
                                document.getElementById((i-2) + "x" + k).value="";
                                break;
                        }
                    }
                }
            }
        }
    }
    for (i=4; i>0; i--){
        box4 = document.getElementById("1x" + i);
        box3 = document.getElementById("2x" + i);
        box2 = document.getElementById("3x" + i);
        box1 = document.getElementById("4x" + i);
        if (box1.value==box2.value && box1.value!="") {
            moved=1;
            box1.value=2 * box1.value;
            bigBox(box1);
            box2.value=box3.value;
            box3.value=box4.value;
        }
        if (box2.value==box3.value && box2.value!="") {
            moved=1;
            box2.value=2 * box2.value;
            bigBox(box2);
            box3.value=box4.value;
        }
        if (box3.value==box4.value && box3.value!="") {
            moved=1;
            box3.value=2 * box3.value;
            bigBox(box3);
            box4.value="";
        }
    }
    return moved;
}  
function addNumber() {
    var temp=0;
    var rowIndex=0;
    var colIndex=0;
      while (temp==0){
          rowIndex=parseFloat((Math.random()*3)+1).toFixed(0);
          colIndex=parseFloat((Math.random()*3)+1).toFixed(0);
          if (document.getElementById(rowIndex + "x" + colIndex).value == "") {
              document.getElementById(rowIndex + "x" + colIndex).value=2;
              
              temp=1;
          }
      }
}
function isNull() {
    for (i=1; i<5; i++) {
        for (k=1; k<5; k++) {
            if (document.getElementById(k + "x" + i).value=="") {
                return 1;
            } 
        }
    }
return 0;}
function bigBox(box){
    box.className=box.className.replace("box","boX");
    setTimeout(function(){
        box.className=box.className.replace("boX","box");},200);
}
function backgroundColorChange(){
    var sumPoint=2;
    for (i=1; i<5; i++) {
        for (k=1; k<5; k++) {
            var text=document.getElementById(k + "x" + i).className;
                document.getElementById(k + "x" + i).className=text.substring(0,8);
            if (document.getElementById(k + "x" + i).value!="") {
                document.getElementById(k + "x" + i).className=document.getElementById(k + "x" + i).className + " " + "background" + 
                document.getElementById(k + "x" + i).value;
                sumPoint=sumPoint + parseFloat(document.getElementById(k + "x" + i).value);
            }
        }
    }
    return sumPoint*2;
}