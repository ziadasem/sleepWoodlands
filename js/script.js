//window.alert("hello");
var x=1 ;
var y=1;
var z=1;
var o=1;
var n=1;
var q=1;
function hide() {
    /* window.alert("hello");  */
    if (x==1) {
        document.getElementById("conter").style.display = "none";
       /*  document.getElementById("foot").style.margin= "39% 0% 0% 0%"; */
       document.getElementById("change").innerHTML = 'Problem & Solution <i class="fas fa-angle-double-down"></i>';
        x=x+1;
    } else if(x==2){
        document.getElementById("conter").style.display = "block";
       /*  document.getElementById("foot").style.margin= "0% 0% 0% 0%"; */
       document.getElementById("change").innerHTML = 'Problem & Solution <i class="fas fa-angle-double-up"></i>';
        x=x-1;
    }
    
    
    
    
};

/*  */
function show() {
    /* window.alert("hello");  */
    if (y==1) {
        document.getElementById("conter1").style.display = "block";
        /* document.getElementById("foot").style.margin= "30% 0% 0% 0%"; */
//        document.getElementById("change1").innerHTML = 'Target Customers <i class="fas fa-angle-double-up"></i>';

        y=y+1;
    } else if (y==2){
        document.getElementById("conter1").style.display = "none";
        /* document.getElementById("foot").style.margin= "40% 0% 0% 0%"; */
//        document.getElementById("change1").innerHTML = 'Target Customers <i class="fas fa-angle-double-down"></i>';

        y=y-1;
        
    }
    
    
};

function show2() {
    /* window.alert("hello");  */
    if (z==1) {
        document.getElementById("conter111").style.display = "block";
        /* document.getElementById("foot").style.margin= "25% 0% 0% 0%"; */
//        document.getElementById("change11").innerHTML = 'where are we ? <i class="fas fa-angle-double-up"></i>';
        z=z+1
    } else if(z==2){
        document.getElementById("conter111").style.display = "none"; 
       /*  document.getElementById("foot").style.margin= "40% 0% 0% 0%"; */
//       document.getElementById("change11").innerHTML = 'where are we ? <i class="fas fa-angle-double-down"></i>';
        z=z-1;
        
    }
    
    /* document.getElementById("foot").style.margin= "23% 0% 0% 0%"; */
};

function show3() {
    
    if (o==1) {
        document.getElementById("conter11").style.display = "block";
        /* document.getElementById("foot").style.margin= "25% 0% 0% 0%"; */
//        document.getElementById("change111").innerHTML = 'Price <i class="fas fa-angle-double-up"></i>';
        o=o+1;
    } else if(o==2){
        document.getElementById("conter11").style.display = "none"; 
       /*  document.getElementById("foot").style.margin= "40% 0% 0% 0%"; */
//       document.getElementById("change111").innerHTML = 'Price <i class="fas fa-angle-double-down"></i>';
        o=o-1;
        
    }
};
function show4() {
    
    if (n==1) {
        document.getElementById("conter110").style.display = "block";
        /* document.getElementById("foot").style.margin= "25% 0% 0% 0%"; */
//        document.getElementById("change111").innerHTML = 'Price <i class="fas fa-angle-double-up"></i>';
        n=n+1;
    } else if(n==2){
        document.getElementById("conter110").style.display = "none"; 
       /*  document.getElementById("foot").style.margin= "40% 0% 0% 0%"; */
//       document.getElementById("change111").innerHTML = 'Price <i class="fas fa-angle-double-down"></i>';
        n=n-1;
        
    }
};
function show5() {
    
    if (q==1) {
        document.getElementById("conter120").style.display = "block";
        /* document.getElementById("foot").style.margin= "25% 0% 0% 0%"; */
//        document.getElementById("change111").innerHTML = 'Price <i class="fas fa-angle-double-up"></i>';
        q=q+1;
    } else if(q==2){
        document.getElementById("conter120").style.display = "none"; 
       /*  document.getElementById("foot").style.margin= "40% 0% 0% 0%"; */
//       document.getElementById("change111").innerHTML = 'Price <i class="fas fa-angle-double-down"></i>';
        q=q-1;
        
    }
};