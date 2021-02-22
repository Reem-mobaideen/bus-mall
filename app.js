let leftImage=document.getElementById('left-image');
let centerImage=document.getElementById('center-image');
let rightImage=document.getElementById('right-image');

let maxTry =25;
let userTryCounter=0;
let rightImageIndex;
let leftImageIndex;
let centerImageIndex;


function Catalog(name,source){
    this.name=name;
    this.source=source;
    this.votesCount=0;

    Catalog.allProducts.push(this);

}
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

centerImageIndex=generateRandomIndex();
rightImageIndex= generateRandomIndex();


do {
    leftImageIndex= generateRandomIndex();

    
} while (leftImageIndex===centerImageIndex || rightImageIndex===centerImageIndex || leftImageIndex===rightImageIndex)

Catalog.allProducts
leftImage.src=Catalog.allProducts[leftImageIndex].source;
centerImage.src=Catalog.allProducts[centerImageIndex].source;
rightImage.src=Catalog.allProducts[rightImageIndex].source;
}

renderThreeImages();

leftImage.addEventListener('click', handleUserClick);
centerImage.addEventListener('click',handleUserClick);
rightImage.addEventListener('click',handleUserClick);

function handleUserClick(event){
    userTryCounter++;

    console.log(event.target.id);

    if(userTryCounter<maxTry){
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
        productResult.textContent=Catalog.allProducts[i]. name + 'has' + Catalog.allProducts[i].votesCount + 'votesCount';
    }

}