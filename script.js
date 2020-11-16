function main() {
    $("#js-shopping-list-form").submit(event => {
        event.preventDefault();  
        const item = $(event.currentTarget).find("#shopping-list-entry").val();
        console.log(item);

        $(".shopping-list").append(`<li><span class="shopping-item"> ${item} </span> <div class="shopping-item-controls">
        <button class="shopping-item-toggle"> <span class="button-label">check</span> </button>
        <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);

        itemDelete();
        itemChecked();

    })
    itemDelete();
    itemChecked();

}

function itemDelete(){
    $('.shopping-item-delete').on('click',  function(event){

        $(event.currentTarget).closest("li").remove();
        
    })
}

function itemChecked() {
    $(`.shopping-item-toggle`).on('click', function(event){
        $(event.currentTarget).closest('.shopping-list li').toggleClass('shopping-item__checked')
    })
}


$(main);