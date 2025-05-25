const myBtn = document.querySelector('#myBtn');
const nameInput = document.querySelector("#name")
const nameInput2 = document.querySelector("#name2")
const nameInput3 = document.querySelector("#name3")
const list = document.querySelector('#list');
const model = document.querySelector("#model");
const cenle = document.querySelector("#cenle");
const delButModel = document.querySelector("#del");
const total = document.querySelector("#total")
let currentItem;

let sum = 0

myBtn.addEventListener('click', Task)

function Task() {
    if (nameInput.value != "" && nameInput2.value != "" && nameInput3.value != "") {
        const cenle = document.querySelector("#cenle");

        const model = document.querySelector("#model");
        const newItem = document.createElement("li")

        newItem.classList.add('item');

        const deleteButton = document.createElement('button')
        newItem.innerHTML = `
            <h3 class="expense expense-name">${nameInput.value}</h3>
            <p class="expense expense-category">${nameInput3.value}</p>        
            <p class="expense expense-value">${nameInput2.value}</p>
        `;

        sum = sum + +nameInput2.value;
        console.log(sum);
        total.textContent = sum;

        list.appendChild(newItem);
        cenle.textContent = 'NO'
        deleteButton.textContent = 'YES'
        deleteButton.textContent = 'УДАЛИТЬ';
        newItem.appendChild(deleteButton)

        nameInput.value = '';

        deleteButton.addEventListener('click', () => {
            currentItem = newItem;
            model.style.display = 'flex';
        });
    } else {
        alert('Заполните поле');
    }

    deleteButton.addEventListener('click', () => {


        model.stley.display = 'block';

        function removeTask() {
            list.removeChild(newItem);
            model.style.display = 'none';
            sum = sum - +newItem.querySelector('.expense-value').textContent;
            console.log(sum)
            list.removeChild(newItem)

        }

        list.addEventListener('click', removeTask)


        deleteButton.addEventListener('click', removeTask)
        block.classList.add("model")





        cenle.addEventListener('click', () => {
            model.style.display = 'none';
            currentItem = null;


        })


    })
    nameInput.value = '';
}

delButModel.addEventListener('click', () => {
    if (currentItem) {
        list.removeChild(currentItem);
        model.style.display = 'none';
        currentItem = null;

    }
});

cenle.addEventListener('click', () => {
    model.style.display = 'none';
    currentItem = null;
});



// myBtn.addEventListener('click', Task2)

// function Task2() {
//     if (nameInput2.value != "") {
//         const cenle = document.querySelector("#cenle");

//         const model = document.querySelector("#model");
//         const newItem = document.createElement("li")

//         newItem.classList.add('item');

//         const deleteButton = document.createElement('button')
//         newItem.innerHTML = `<span>${nameInput2.value}</span>`;


//         list.appendChild(newItem);
//         cenle.textContent = 'NO'
//         deleteButton.textContent = 'YES'
//         deleteButton.textContent = 'УДАЛИТЬ';
//         newItem.appendChild(deleteButton)

//         nameInput2.value = '';

//         deleteButton.addEventListener('click', () => {
//             currentItem = newItem;
//             model.style.display = 'flex';
//         });
//     } else {
//         alert('Заполните поле');
//     }

//     deleteButton.addEventListener('click', () => {

//         model.stley, display = 'block';


//         function removeTask() {
//             list.removeChild(newItem);
//             model.style.display = 'none';

//         }

//         list.addEventListener('click', removeTask)


//         deleteButton.addEventListener('click', removeTask)
//         block.classList.add("model")





//         cenle.addEventListener('click', () => {
//             model.style.display = 'none';
//             currentItem = null;


//         })


//     })
//     nameInput.value = '';
// }

// delButModel.addEventListener('click', () => {
//     if (currentItem) {
//         list.removeChild(currentItem);
//         model.style.display = 'none';
//         currentItem = null;
//     }
// });

// cenle.addEventListener('click', () => {
//     model.style.display = 'none';
//     currentItem = null;
// });



// myBtn.addEventListener('click', Task3)

// function Task3() {
//     if (nameInput3.value != "") {
//         const cenle = document.querySelector("#cenle");

//         const model = document.querySelector("#model");
//         const newItem = document.createElement("li")

//         newItem.classList.add('item');

//         const deleteButton = document.createElement('button')
//         newItem.innerHTML = `<span>${nameInput3.value}</span>`;


//         list.appendChild(newItem);
//         cenle.textContent = 'NO '
//         deleteButton.textContent = 'YES'
//         deleteButton.textContent = 'УДАЛИТЬ';
//         newItem.appendChild(deleteButton)

//         nameInput.value = '';

//         deleteButton.addEventListener('click', () => {
//             currentItem = newItem;
//             model.style.display = 'flex';
//         });
//     } else {
//         alert('Заполните поле');
//     }

//     deleteButton.addEventListener('click', () => {

//         model.stley, display = 'block';


//         function removeTask() {
//             list.removeChild(newItem);
//             model.style.display = 'none';

//         }

//         list.addEventListener('click', removeTask)


//         deleteButton.addEventListener('click', removeTask)
//         block.classList.add("model")





//         cenle.addEventListener('click', () => {
//             model.style.display = 'none';
//             currentItem = null;


//         })


//     })
//     nameInput.value = '';
// }

// delButModel.addEventListener('click', () => {
//     if (currentItem) {
//         list.removeChild(currentItem);
//         model.style.display = 'none';
//         currentItem = null;
//     }
// });

// cenle.addEventListener('click', () => {
//     model.style.display = 'none';
//     currentItem = null;
// });


let captionsList = document.querySelectorAll('.caption-item');
let unitsList = document.querySelectorAll('.unit');

captionsList.forEach(function (item, index) {
    item.addEventListener('mouseover', function () {
        unitsList[index].classList.add('hovered');
    });

    item.addEventListener('mouseout', function () {
        unitsList[index].classList.remove('hovered');
    });
});




