// Initial Data

// Events

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
})

document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', dragDrop);
});

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dragDropNeutral);

// function item

function dragStart(e) {
    e.currentTarget.classList.add('dragging');
}

function dragEnd(e) {  
    e.currentTarget.classList.remove('dragging');
}

// function area

function dragOver(e) {
    if(e.currentTarget.querySelector('.item') === null){
        e.preventDefault();
        e.currentTarget.classList.add('hover')
    }
    
    
}

function dragLeave(e) {
    e.currentTarget.classList.remove('hover')
}

function dragDrop(e) {
    e.currentTarget.classList.remove('hover')

   

    if(e.currentTarget.querySelector('.item') === null){
        let item = document.querySelector('.item.dragging')
        e.currentTarget.appendChild(item);
    }

}

//fcuntion neutralArea

function dragOverNeutral(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover')
}

function dragLeaveNeutral(e) {
    e.currentTarget.classList.remove('hover')
}

function dragDropNeutral(e){
    e.currentTarget.classList.remove('hover')
    let item = document.querySelector('.item.dragging')
    e.currentTarget.appendChild(item);
}