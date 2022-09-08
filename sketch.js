var marks = [40,35, 45, 38, 40];


function score_average(a){
  var sum=0;
 for (var i =0; i<a.length; i++){
  sum=sum+a[i];
 }
 var avg = sum/a.length;
 return avg;
 
}
function setup() 
{
  createCanvas(400,400);
  average=score_average(marks);
  console.log(average);
}

function draw() 
{
background(51);

}

