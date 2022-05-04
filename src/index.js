// write your code here

//****************************1st ATTEMPT****************************

//function useData(){
    //     fetchData()
    // }
//useData()


// function fetchData () {
//     fetch('http://localhost:3000/ramens').then(resp => resp.json()).then(data => {

//         let ramenMenu = document.querySelector('#ramen-menu');
//         data.forEach((ramen) => {
//             let oldRamenImages = document.createElement('img');
//             oldRamenImages.innerHTML = data.image;
//             // oldRamenImages.innerHTML = ramen.image;
//             ramenMenu.append(oldRamenImages);
//         })
//     }
// }

// const fetchData = () => {
//     fetch('http://localhost:3000/ramens').then(resp => resp.json()).then(data => {
//         let ramenMenu = document.querySelector('#ramen-menu');
//         data.forEach(ramen => {
//             //trying to get images from db.json
//             let oldRamenImages = document.createElement('img');
//             console.log(data.image);
//             oldRamenImages.innerHTML = data.image;
//             ramenMenu.append(oldRamenImages);
//         })
//         //creating form

        
//     })
// }

// function someCbFunction(ramen){
//     let ramenMenu = document.querySelector('#ramen-menu');
//     ramen.forEach((ramen) => {
//         let oldRamenImages = document.createElement('img');
//         oldRamenImages.innerHTML = 
//         // oldRamenImages.innerHTML = ramen.image;
//         ramenMenu.append(oldRamenImages);
//     })

// }


// document.addEventListener('DOMContentLoaded', fetchData);
// someCbFunction();
//****************************1st ATTEMPT****************************

//****************************2nd ATTEMPT****************************
const fetchData = () => {
    fetch('http://localhost:3000/ramens').then(resp => resp.json()).then(data => {
        let ramenMenu = document.querySelector('#ramen-menu');
        data.forEach(ramen => {
            let oldRamenImages = new Image();
            let oldRamenName = document.createElement('p');
            let oldRestaurant = document.createElement('p');
            let oldRatings = document.createElement('p');
            let oldComment = document.createElement('p');
            // let ramenName = document.querySelector()

            //gets images
            oldRamenImages.src = ramen.image;
            oldRamenImages.setAttribute('class' , 'oldPics')

            //gets image details
            oldRamenName.setAttribute('class' , 'oldName');
            oldRamenName.textContent = data.name;

            //get restaurant details
            oldRestaurant.setAttribute('class' , 'oldRestName');
            oldRestaurant.textContent = data.restaurant;

            //get rating details
            oldRatings.setAttribute('class' , 'oldRating');
            oldRatings.textContent = data.rating;

            //get rating details
            oldComment.setAttribute('class' , 'oldComment');
            oldComment.textContent = data.comment;


            ramenMenu.appendChild(oldRamenImages);


            //click event to display ramen data
            oldRamenImages.addEventListener('click' , let clickEvent = () => {
                let displayedImage = document.querySelector('.detail-image');
                let displayedName = document.querySelector('.name');
            })

        })
        //creating form

        
    })
}
//****************************2nd ATTEMPT****************************


document.addEventListener('DOMContentLoaded', fetchData);