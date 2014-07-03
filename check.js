var tId,pjs,cnt=0;
var guess = 0;

$(document).ready(function() {
  pjs = Processing.getInstanceById("processing-skratchie");
  console.log(cnt+':'+pjs);
  if (!pjs) 
  	tId=setInterval(function() {
    	pjs = Processing.getInstanceById("processing-skratchie");
    	console.log(cnt+':'+pjs);
    	if (pjs) {
    		guess = pjs.getNumber()
    		clearInterval(tId);}
  		},500);
});
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