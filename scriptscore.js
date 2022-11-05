var x, y;



        function aNumber() {
        return 1 + Math.round(Math.random() * 11);
        }

        function genQuestion(){
            x = aNumber();
            y = aNumber();
            dout = document.getElementById("question");
            dout.value = x + " times " + y;
         }

        function buttonPressed() {
        var mult = document.getElementById("answer").value;



         var posStatements = [
            "Very Good", 
            "Excellent", 
            "Correct - Nice Work!", 
            "Correct - Keep up the good work"];

        var negStatements = [
            "No. Please try again", 
            "Wrong. Try once more", 
            "Incorrect - Don't give up", 
            "No - keep trying"];

         if (mult == x*y) 
            {
                window.alert(posStatements[Math.round(Math.random() * 3)]);
        }
        else 
        {
                window.alert(negStatements[Math.round(Math.random() * 3)]);
        }

        location.reload();
        }

var score=0 
var score = document.getElementById("score-box").value;
function scoreboard() {
    if (mult == x*y)
        {score= score +1}
}

window.onload = function timer() {
var secs = 0;
    var id = setInterval(function timer(){ 
        secs++; console.log(secs);
      if(secs> 9){
        clearInterval(id);
        alert("Time's up!");
       }
    }, 1000);
}    