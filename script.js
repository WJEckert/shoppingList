function deleteShoppingItem(){
    $('ul').on('click','.shopping-item-delete',  function(event){

        $(event.currentTarget).closest("li").remove();
        
    })
}

function checkShoppingItem(){
    $(`ul`).on('click','.shopping-item-toggle', function(event){
        $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
    })
}

function addItem() {
    $("#js-shopping-list-form").submit(event => {
        event.preventDefault();  
        const item = $(event.currentTarget).find("#shopping-list-entry").val();
        console.log(item);

        $(".shopping-list").append(`<li><span class="shopping-item"> ${item} </span> <div class="shopping-item-controls">
        <button class="shopping-item-toggle"> <span class="button-label">check</span> </button>
        <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);


    })
}



function main() {
    addItem();    
    deleteShoppingItem();
    checkShoppingItem();

}



$(main);