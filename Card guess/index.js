let cards=[

    {
        image:"https://up3.typepad.com/6a010535647bf3970b0120a5c98295970b-220si",
        value:1,
        status:"closed"
    },


    {
        image:"https://up3.typepad.com/6a010535647bf3970b0120a5c98295970b-220si",
        value:1,
        status:"closed"
    },


    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPPQfNoCgMGNF4duZXqZzsMOb_liWoIEceA&usqp=CAU",
        value:2,
        status:"closed"
    },


    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPPQfNoCgMGNF4duZXqZzsMOb_liWoIEceA&usqp=CAU",
        value:2,
        status:"closed"
    },


    {
        image:"https://images.pexels.com/photos/162318/cheetahs-cubs-two-together-162318.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        value:3,
        status:"closed"
    },


    {
        image:"https://images.pexels.com/photos/162318/cheetahs-cubs-two-together-162318.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        value:3,
        status:"closed"
    },



    {
        image:"https://animalhow.com/wp-content/uploads/2019/01/cute-kittin-cat-baby.jpg",
        value:4,
        status:"closed"
    },
 

    {
        image:"https://animalhow.com/wp-content/uploads/2019/01/cute-kittin-cat-baby.jpg",
        value:4,
        status:"closed"
    },


    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpzpeocx-X-AF0_Hs20J8PlE-_2vZIqM7sUw&usqp=CAU",
        value:5,
        status:"closed"
    },


    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpzpeocx-X-AF0_Hs20J8PlE-_2vZIqM7sUw&usqp=CAU",
        value:5,
        status:"closed"
    }

]
let temp;
for(let i=cards.length-1;i>=0;i--){

    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardCopy=cards;




 function displayCards(data){

       let cardsString="";

       data.forEach(function(card,index){
           cardsString+=`
           

           <div class="card" style="background-image:url('${card.image}')">
           <div class="overlay ${card.status}" onclick="openCard(${index})">
           </div>
           </div>
        `;
       })

       document.getElementById('cards').innerHTML=cardsString;

 }

 displayCards(cards);




let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

    console.log(cards);

cards[index].status="opened";
     if(cardCount===1){
         val1=cards[index].value;
         cardCount++;
    
     }
    else if(cardCount===2){
        val2=cards[index].value;

          if(val1===val2){
               score++; 
               document.getElementById('score').innerText=score; 
               

               
               val1=null;
               val2=null;
               cardCount=1;
          }
        else{
            
            alert("game over");
           location.reload();
        }
    }
displayCards(cards);
}


