$(document).ready(function() {
        var greetings = function() {
          var ans = prompt("How is your day so far?");
          alert("So your day is " + ans + "?");
          var first = ans .charAt(0);
          var second = ans.charAt(ans.length - 1);
          alert("So the beginning letter is " + first + " and the ending letter of the line is " + second)
          var reverse = second + first;
          alert("So in reverse your selected letters are " + reverse);
        };


        greetings();
});
