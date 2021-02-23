let leftImage=document.getElementById('left-image');
let centerImage=document.getElementById('center-image');
let rightImage=document.getElementById('right-image');

let maxTry =25;
let userTryCounter=0;
let rightImageIndex;
let leftImageIndex;
let centerImageIndex;
let productNames=[];
let productVotes=[];
let productShown=[];
let newImageArray=[];


function Catalog(name,source){
    this.name=name;
    this.source=source;
    this.votesCount=0;
    this.shown=0;

    Catalog.allProducts.push(this);
    productNames.push(name);

}
console.log('name', productNames);
Catalog.allProducts=[];

new Catalog('bag','images/bag-11.jpg' );
new Catalog('bathroom','images/bathroom-11.jpg' );
new Catalog('banana','images/banana-11.jpg' );
new Catalog('boots','images/boots-11.jpg' );
new Catalog('breakfast','images/breakfast-11.jpg' );
new Catalog('bubblegum','images/bubblegum-11.jpg' );
new Catalog('chair','images/chair-11.jpg' );
new Catalog('cthulhu','images/cthulhu-11.jpg' );
new Catalog('dog-duck','images/dog-duck-11.jpg' );
new Catalog('dragon','images/dragon-11.jpg' );
new Catalog('pen','images/pen-11.jpg' );
new Catalog('pet-sweep','images/pet-sweep-11.jpg' );
new Catalog('scissors','images/scissors-11.jpg' );
new Catalog('shark','images/shark-11.jpg' );
new Catalog('sweep','images/sweep-11.png' );
new Catalog('tauntaun','images/tauntaun-11.jpg' );
new Catalog('usb','images/usb-11.gif' );
new Catalog('water-can','images/water-can-11.jpg' );
new Catalog('wine-glass','images/wine-glass-11.jpg' );

console.log(Catalog.allProducts);

function generateRandomIndex(){
    return Math.floor( Math.random() * Catalog.allProducts.length);
    
}

function renderThreeImages(){

//centerImageIndex=generateRandomIndex();

    newImageArray.push(leftImageIndex);
    newImageArray.push(centerImageIndex);
    newImageArray.push(rightImageIndex);
    //console.log(newImageArray);


    do {
        leftImageIndex=generateRandomIndex();
        centerImageIndex=generateRandomIndex();
        rightImageIndex= generateRandomIndex();  
    }  
    while (leftImageIndex===rightImageIndex || leftImageIndex===centerImageIndex||rightImageIndex===centerImageIndex
        ||newImageArray.includes(leftImageIndex)||newImageArray.includes(centerImageIndex)||newImageArray.includes(rightImageIndex));


    newImageArray=[];
    newImageArray.push(leftImageIndex);
    newImageArray.push(centerImageIndex);
    newImageArray.push(rightImageIndex);

    console.log(newImageArray);



Catalog.allProducts
console.log(Catalog.allProducts[leftImageIndex]);

leftImage.src=Catalog.allProducts[leftImageIndex].source;
Catalog.allProducts[leftImageIndex].shown++
centerImage.src=Catalog.allProducts[centerImageIndex].source;
Catalog.allProducts[centerImageIndex].shown++
rightImage.src=Catalog.allProducts[rightImageIndex].source;
Catalog.allProducts[rightImageIndex].shown++
    }
renderThreeImages();
    

    
leftImage.addEventListener('click', handleUserClick);
centerImage.addEventListener('click',handleUserClick);
rightImage.addEventListener('click',handleUserClick);
console.log(newImageArray);  

function handleUserClick(event){
    userTryCounter++;
//console.log(event.target.id);
    


    if(userTryCounter<=maxTry){
        if(event.target.id==='left-image' ){
            Catalog.allProducts[leftImageIndex].votesCount++

        }

        else if (event.target.id==='centerImage'){ 
            Catalog.allProducts[centerImageIndex].votesCount++

        } else {
            Catalog.allProducts[rightImageIndex].votesCount++
        }
        renderThreeImages();
    
    }
    else{
       
        leftImage.removeEventListener('click', handleUserClick);
        centerImage.removeEventListener('click',handleUserClick);
        rightImage.removeEventListener('click', handleUserClick);

        }
    }
    
let ResultBtn=document.getElementById('ResultButton');
ResultBtn.addEventListener('click', renderResult);

function renderResult(){
    let list=document.getElementById('list-result');
    let productResult;

    for(let i=0; i<Catalog.allProducts.length; i++){
        productResult=document.createElement('li');
        list.appendChild(productResult);
        productResult.textContent=Catalog.allProducts[i]. name +  'has'  +  Catalog.allProducts[i].votesCount + 'votesCount';
    }

    for (let i = 0; i < Catalog.allProducts.length; i++) {
        
        productVotes.push(Catalog.allProducts[i].votesCount);
  
        productShown.push(Catalog.allProducts[i].shown);
      }
      viewChart();
  
    }



function viewChart() {

    let ctx = document.getElementById('myChart').getContext('2d');
  
    let chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',
  
      // The data for our dataset
      data: {
        labels: productNames,
  
        datasets: [
  
  
          {
            label: 'product Names',
            backgroundColor: 'cyan',
            borderColor: 'cyan',
            data: productVotes
          },
        
          {
            label: 'product Shown',
            backgroundColor: 'black',
            borderColor: 'black',
            data: productShown
          },
  
  
        ]
      
      },

// Configuration options go here
options: {}
});
// console.log(chart);

// Chart(ctx,{})

}