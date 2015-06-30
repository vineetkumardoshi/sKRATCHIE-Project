var tId,pjs,cnt=0;

//initialize 'guess' variable to store the randomly generated hidden number.
var guess = 0;

//Function to store the hidden number in 'guess' variable.
$(document).ready(function() {
  pjs = Processing.getInstanceById("processing-skratchie");
  
  if (!pjs) 
  	tId=setInterval(function() {
    	pjs = Processing.getInstanceById("processing-skratchie");
  
    	if (pjs) {
    		guess = pjs.getNumber()
    		clearInterval(tId);}
  		},500);
  //Submit on Key Press
  $("input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        $("button").click();
    }
});		
});

//function to check if the user input is equal to the 'guess' variable.
function check(){
	if(document.getElementById("guess_input").value == guess){
		
		$('#remark-success').show().addClass('bounceIn animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	      $(this).removeClass().addClass('alert alert-success');
	      $(this).fadeOut(5000);
	  	});

	}
	else{
		
		$('#remark-wrong').show().addClass('bounceIn animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).removeClass().addClass('alert alert-danger');
		$(this).fadeOut(5000);
                });
	
       }
}

