//parameters
var size=500;
var angle=Math.PI/4;
var rateReduction=1.35;
var branchWeight=4;
//function branch (recursive)
var branch=function(sizeBranch,branchWeight){
  //draw line
  line(0,0,0,-sizeBranch);
  //translate
  translate(0, -sizeBranch);
  //4 px max
  if(sizeBranch>rateReduction*4){
  //uptade size and weight of branches
  var newSizeBranch=sizeBranch/(random()*rateReduction+1); 
  var newBranchWeight=branchWeight/(rateReduction*1);
    
  strokeWeight(newBranchWeight);
  
  push();
  rotate(random(angle)-angle/2);
  branch(newSizeBranch,newBranchWeight);
  pop();

  push();
  rotate(random(angle)-angle/2);
  branch(newSizeBranch,newBranchWeight);
  pop();

  

  // push();
  // rotate(-angle/2);
  // branch(newSizeBranch,newBranchWeight);
  // pop();

  // push();
  // rotate(angle/2);
  // branch(newSizeBranch,newBranchWeight);
  // pop();
  
   push();
   rotate(random(angle)-angle/2);
   branch(newSizeBranch,newBranchWeight);
   pop();

  }
  
  
};


// setup p5.js
function setup() {
    createCanvas(size, size);
    slider = createSlider(0, TWO_PI/2, PI/4,0.01);
    slider.size(500);
    
    
    noLoop();
}
 
//function draw de p5.js
function draw() {
  background(220);
  strokeWeight(branchWeight);
  stroke(210,105,30);
  translate(width/2, height+60);
  
  angle=slider.value();
  
  branch(height/(random()*rateReduction+4),branchWeight);
  
}
function mouseClicked(){
  redraw();
}
