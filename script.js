//Declaring VARIABLES
var oldDiv ='#TwoTonAxleSection';
var oldLinkColor ='#LookAtMeTwoTonDual a:first';

// FUNCTION FOR THE DROP DOWN MENU
function openNav() {
    document.getElementById("mySidenav").style.width = "160px";
    document.getElementById("mySidenav").style.visibility = "visible";
    [].forEach.call(document.querySelectorAll('.closebtn'), function (el) {
  el.style.visibility = 'visible';
});
}

function closeNav() {
    document.getElementById("mySidenav").style.visibility = "hidden";
    [].forEach.call(document.querySelectorAll('.closebtn'), function (el) {
  el.style.visibility = 'hidden';
});
}

//Time delay on the sidebar items appearing
function toggleSideBar(id){
  $(id).toggle(1000);
}


//JQuery Function that Controls what
//Div will be shown on the bin page
var call = function toggleTheDiv(id, linkColor){
  if (id === oldDiv){
    $(id).show();
    $(linkColor).css({'color': '#a60030'});
  }//end if
  else{
    $(id).show();//showing new div
    $(oldDiv).hide();//hiding previous div
    $(linkColor).css({'color': '#a60030'});//changing current link to gold
    $(oldLinkColor).css({'color': '#333'});//changing previous link back to silver

    //resetting previous link to old css style
    //on hover turn gold if not silver
    $(oldLinkColor).hover(function(){
      $(this).css({'color': '#a60030'});
    },function(){
      $(this).css({'color': '#333'});
    });//end hover css change for oldLinkColor

    //setting the id to the variable old ID
    //this way when the next element is selected
    //the styles will change
    oldDiv = id;
    oldLinkColor = linkColor;
  }//end else
}//end toggleTheDiv
