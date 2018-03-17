
var lbsInput = document.getElementById('lbsInput');
var ozOutput = document.getElementById('ozOutput');
var kgOutput = document.getElementById('kgOutput');
var gramsOutput = document.getElementById('gramsOutput');
var output = document.getElementById('output');

output.style.visibility = 'hidden';

lbsInput.addEventListener('input', convert);

function convert(e){
  var conv = e.target.value;  
  output.style.visibility = 'visible';

  ozOutput.innerHTML = conv * 16;
  gramsOutput.innerHTML = conv * 453.592;
  kgOutput.innerHTML = conv * 0.453592;  
}