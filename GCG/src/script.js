/**window.onload=timeout;
function timeout(){
window.setTimeout("redirect()",5000)}

function redirect(){
window.location="./index.html"
return}**/
var over = 1;
function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
    this.over = this.over - 1;
    page(this.over);
  }

  function page(){
      if(this.over==1){
      document.getElementById("page").style.display="none";
      on();
    }
      else{
        document.getElementById("page").style.display="block";
      }
  }