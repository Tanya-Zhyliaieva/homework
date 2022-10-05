// import tours from '../commons/tours.json';


// window.onload = filterTours(tours);

// function filterTours(tours){
//     for (let i = 0; i < tours.length; i++) {
//         console.log(tours[i]);
//     }
// }


//
const tours = []; // получаем массив туров из JSON





$.ajax({
    async: false,
    url: '../commons/tours.json',
    type: 'get',
    dataType: 'json',
    success: function (JSON) {
        for (let i = 0; i < JSON.length; i++) {
            tours.push(JSON[i]);
        }
    }
});



// let people = 6;
// let place = 'Lviv';

// function filter(array, property, value) {
//     let result = [];
//     let copy = [...array];
//     for (const item of copy) {
//         if (item[property] == value) {
//             result.push(item);
//         }
//     }
//     return result
// }

// let sortTours = filter(tours, 'person', people);
// console.log(sortTours);
// sortTours = filter(sortTours, 'place', place);
// console.log(sortTours);

$("#slider-range").slider({
    range: true,
    orientation: "horizontal",
    min: 0,
    max: 10000,
    values: [0, 10000],
    step: 100,
    slide: function (event, ui) {
        if (ui.values[0] == ui.values[1]) {
            return false;
        }
        $("#min_price").val(ui.values[0]);
        $("#max_price").val(ui.values[1]);
    }
});


function filterRange(array, property, min, max) {
    let result = [];
    let copy = [...array];
    for (const item of copy) {
        if (item[property] >= min && item[property] <= max) {
            result.push(item);
        }
    }
    return result
}

let sortTours = filterRange(tours, 'price', 500, 1000);
console.log(sortTours);