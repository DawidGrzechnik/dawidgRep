const mainMenu = document.querySelector( '.main-head' );
window.addEventListener( 'scroll', ()=> {
    if( this.scrollY > 100 ){
        mainMenu.classList.add( 'slidedown' );
    }else{
        mainMenu.classList.remove( 'slidedown' );
    }
} );


function createElement (){
    const button = document.getElementById(".nav-list");

    let newButton = button.createElement("list");
    newButton.value = "Treść";
}

