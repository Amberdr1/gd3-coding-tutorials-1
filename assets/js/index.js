const helloWorld = () => {
  console.log("Hello World");
};

helloWorld();

document.querySelectorAll(".list__item__header").forEach( item => {
  item.addEventListener("click",() => {
    item.nextElementSibling.style.display="block";
    
    document.querySelectorAll(".list__item__header").forEach( otheritem => {
        if ( otheritem != item ) otheritem.nextElementSibling.style.display="none";
    } );
    
    console.log("list item is clicked");
  });


  
});


document.querySelectorAll(".list__item__artist").forEach( artist => {
  let artist_text = artist.innerText;
  let artist_text_parts = artist_text.split( '(' );
  
  let artist_base = artist_text_parts.shift( );            // Simone Leigh
  let artist_data = artist_text_parts.pop( );              // American, b. 1967)
  
  let artist_year = artist_data.split( ' ' ).pop( );       // 1967)
  
  artist.innerText = artist_base + '(' + artist_year;
} );





// document.querySelectorAll(".list__item__header").forEach((item)=> {
//   item.addEventListener("click",() => {

//     item.nextElementSibling.style.display="block"

//     console.log("list item is clicked");
//   });
// });


