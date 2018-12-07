//Javascript
function checkKey(e) {

    e = e || window.event;
    if (document.getElementById("PlayTime").innerHTML==" 0 s.")
        {
            startTime();
        }
    switch (e.keyCode){
        case 38:
                // up arrow
            if (UpMove()==1) addNumber();
            document.getElementById("Points").innerHTML = backgroundColorChange();
            break;
        case 40:
               // down arrow
            if (DownMove()==1) addNumber();
            document.getElementById("Points").innerHTML = backgroundColorChange();
            break;
        case 37:
               // left arrow
            if (LeftMove()==1) addNumber();
            document.getElementById("Points").innerHTML = backgroundColorChange();
            break;
        case 39:
            // right arrow
            if (RightMove()==1) addNumber();
            document.getElementById("Points").innerHTML = backgroundColorChange();
            break;
    }
    
}
function endOfGame() {
    alert("Koniec gry")
}
function startTime(index) {
    let myVar = setInterval(myTimer, 100);
    if (index==1){
        clearInterval(myVar);
        text=0.0;
        return;
    }
    let text=0.0;
    function myTimer() {
        text=text + 0.1;        
        document.getElementById("PlayTime").innerHTML = parseFloat(text).toFixed(1) + " s.";
    }
}
function Restart() {
    /*startTime(1);
    document.getElementById("PlayTime").innerHTML = "0 s."
    document.getElementById("Points").innerHTML = "4";
    document.getElementById("1x1").value=2;
    document.getElementById("1x2").value=2;
    for (i=1; i<5; i++) {
        for (k=1; k<5; k++) {
            document.getElementById(k + "x" + i).value=""; 
        }
    }*/
    document.location.reload()
}
function LeftMove(){
    let mouved = 0;
    let tab=[0,0,0,0,0];
    for (let k=1; k<5; k++){
        tab=[0,0,0,0,0];
        ActualTab(tab, k, 0);
        for (let i=1; i<5; i++){
            if (mouved == 0 ) mouved = Move(tab,i-1,0, k, 0);
            else Move(tab,i-1,0, k, 0);
            if (isNaN(tab[i-1]) || tab[i-1]==undefined) tab[i-1]=0;
            if (tab[i-1]!=0) document.getElementById(k + "x" + i).value=tab[i-1];
            else document.getElementById(k + "x" + i).value="";
        }
    }
    return mouved;
}
function UpMove(){
    let mouved = 0;
    let tab=[0,0,0,0,0];
    for (let k=1; k<5; k++){
        tab=[0,0,0,0,0];
        ActualTab(tab, k, 1);
        for (let i=1; i<5; i++){
            if (mouved == 0 ) mouved = Move(tab,i-1,0, k, 1);
            else Move(tab,i-1,0, k, 1);
            if (isNaN(tab[i-1]) || tab[i-1]==undefined) tab[i-1]=0;
            if (tab[i-1]!=0) document.getElementById(i + "x" + k).value=tab[i-1];
            else document.getElementById(i + "x" + k).value="";
        }
    }
    return mouved;
}
function RightMove(){
    let mouved = 0;
    let tab=[0,0,0,0,0];
    for (let k=1; k<5; k++){
        tab=[0,0,0,0,0];
        ActualTab(tab, k, 0);
        for (let i=4; i>0; i--){
            if (mouved == 0 ) mouved = Move(tab,i-1,1, k, 0);
            else Move(tab,i-1,1, k, 0);
            if (isNaN(tab[i-1]) || tab[i-1]==undefined) tab[i-1]=0;
            if (tab[i-1]!=0) document.getElementById(k + "x" + i).value=tab[i-1];
            else document.getElementById(k + "x" + i).value="";
        }
    }
    return mouved;
}
function DownMove(){
    let mouved = 0;
    let tab=[0,0,0,0,0];
    for (let k=1; k<5; k++){
        tab=[0,0,0,0,0];
        ActualTab(tab, k, 1);
        for (let i=4; i>0; i--){
            if (mouved == 0 ) mouved = Move(tab,i-1,1, k, 1);
            else Move(tab,i-1,1, k, 1);
            if (isNaN(tab[i-1]) || tab[i-1]==undefined) tab[i-1]=0;
            if (tab[i-1]!=0) document.getElementById(i + "x" + k).value=tab[i-1];
            else document.getElementById(i + "x" + k).value="";
        }
    }
    return mouved;
}
function ActualTab(tab, k, direction) {
    //direction = 0 horizontal
    //direction = 1 vertical
    for (let i=1; i<5; i++){
            switch (direction){
                case 0:
                    tab[i-1]=parseFloat(document.getElementById(k + "x" + i).value);
                    break;
                case 1:
                    tab[i-1]=parseFloat(document.getElementById(i + "x" + k).value);    
                    break;
            }
            if (isNaN(tab[i-1])) tab[i-1]=0;
        }
                return tab;
}
function Move(tab,startIndex,direction, line, vertical){
    let mouved=0;
    //alert(tab + " - " + startIndex + " - " + direction);
    mouved = moveTab(tab,startIndex,direction);
    moveTab(tab,startIndex,direction);
    moveTab(tab,startIndex,direction);
    if (MergeAdjoin(tab,startIndex,direction, line, vertical)==1) {
        moveTab(tab,startIndex,direction);
        mouved = 1;
    }
    //alert("zwrócono " + mouved);
    return mouved;
}
function MergeAdjoin(tab, startIndex, direction, line, vertical) {
    //direction = 0 - left or down
    //direction = 1 - right or up
    switch (direction){
        case 0:
            i=startIndex;
            index=1;
            break;
        case 1:
            i=startIndex;
            index=-1;
            break;
    }
    let returnedValue=0;
    while (i>=0 && i<4) {
        if (tab[i]==tab[i+index] && tab[i]!=0) {
            //alert(line + " " + vertical);
            let box;
            if (vertical==0) box=document.getElementById(line + "x" + tab[i]);
            else box=document.getElementById(tab[i] + "x" + line);
            //let box=document.getElementById(line + "x" + tab[i]);
            //bigBox(box);
            tab[i]=2*tab[i];
            tab[i+index]=0;
            returnedValue=1;
        }
        i=i+index;
    }
    return returnedValue;
}
function moveTab(tab,startIndex, direction){
    //direction = 0 - left or down
    //direction = 1 - right or up
    let mouved=0;
    let oldTab=tab;
    switch (direction){
        case 0:
            i=startIndex;
            index=1;
            break;
        case 1:
            i=startIndex;
            index=-1;
            break;
    }
    while (i>=0 && i<4) {
        if (tab[i]==0 || tab[i]=="") {
            if (tab[i+index]==undefined) tab[i+index]=0;
            if (tab[i+index]!=0 && tab[i+index]!="") mouved = 1;
            tab[i]=tab[i+index];
            tab[i+index]=0;
        }
        i=i+index;
    }
    if (oldTab != tab) mouved = 1;
    return mouved;
}
/*function moveBoxesLeft() {
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
}  */
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