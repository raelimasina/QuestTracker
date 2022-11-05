
//===========================================================================================================

const arrOfListItems = document.querySelectorAll('.listItem')


//                             -----------------------------------------------
//convert listItemID to displayContentClass (these should match in HTML),
//then toggle its stick (display: block)

arrOfListItems.forEach((el, i) => el.addEventListener('click', () => {
    var listItemID = arrOfListItems[i].id
    var displayContentClass = '.' + listItemID
    clearPrevListItemSelectedColor()
    clearPrevDisplayedContent()
    document.getElementById(listItemID).classList.toggle('listItemSelectedColor')
    document.querySelector(displayContentClass).classList.toggle('stick')

}))
function clearPrevListItemSelectedColor() {
    const listItemsSelected = document.querySelectorAll('.listItem')
    listItemsSelected.forEach(el => {
        el.classList.remove('listItemSelectedColor')
    })
}
function clearPrevDisplayedContent() {
    const stickItems = document.querySelectorAll('.displayContent')
    stickItems.forEach(el => {
        el.classList.remove('stick')
    })
}
