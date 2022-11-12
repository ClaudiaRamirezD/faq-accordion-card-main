//Order of code steps:

//1. Grab our items
const items = [...document.querySelectorAll(".accordion_item")];
console.log(items);
//2. Add event listeners to our items that handle an item click.
//3. HandleItemClick function ->
//3.1 Grab the clicked item
//3.2 Grab the itemDetail as we need to add maxHeight
//3.3 Check if the item has .active class
//3.4 If it does, remove the maxHeight and remove the .active class
//3.5 If it doesnt, add the maxHeight and add the .active class

items.forEach((item) => {
    item.addEventListener("click", (e) => {
        const clickedItem = e.target.closest(".accordion_item");
        const itemDetail = clickedItem.querySelector('.accordion_content');
        const clickedItemActive = clickedItem.classList.contains("active");
        clickedItem.classList.toggle("active");
        if (clickedItemActive) {
            itemDetail.style.maxHeight = null;
        } else {
            const scrollHeight = itemDetail.scrollHeight;
            itemDetail.style.maxHeight = `${scrollHeight}px`;
        }

    });
    
});

