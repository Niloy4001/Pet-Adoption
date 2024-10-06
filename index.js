
// category btn section
const fetchCategoryBtn = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
    const data = await res.json()
    showCategoryBtn(data.categories);

}
fetchCategoryBtn();
// show category btn
const showCategoryBtn = (array) => {
    const categoryBtnDiv = document.getElementById('category-btn-parent');
    array.forEach(item => {
        const { id, category, category_icon } = item;
        categoryBtnDiv.innerHTML +=
            `
        <div>
            <button class="btn w-full h-[70px] lg:h-24 rounded-2xl flex items-center justify-center space-x-2 common-category" onclick=fetchAllPets(this,'${category}')>
                <div><img src="${category_icon} " class="w-14 h-14" alt=""></div>
                <div class=" text-base md:text-xl lg:text-2xl font-bold text-primary font-inter">${category} </div>
            </button>
        </div>
        `

    });

}
// active category btn
const activeBtn = (btnElement) => {
    allBtn = document.getElementsByClassName('common-category');
    for (let item of allBtn) {
        item.classList.remove('active');
        item.classList.add('rounded-2xl');

    }
    btnElement.classList.remove('rounded-2xl')
    btnElement.classList.add('active')

}



// animal card section
const fetchAllPets = async (btnElement, categoryName) => {
    document.getElementById('spinner').classList.add('hidden');
    if (categoryName) {
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
        const data = await res.json()
        showAllPets(data.data);
        activeBtn(btnElement);

    }
    else {
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
        const data = await res.json()
        showAllPets(data.pets);
    }

}

fetchAllPets()



// sort element
const sortElement = (array) => {
    const cardParentDiv = document.getElementById('animal-card-parent-div')
    cardParentDiv.innerHTML = '';
    if (array.length == 0) {
        document.getElementById('empty-section').classList.remove('hidden');

    } else {
        document.getElementById('empty-section').classList.add('hidden');
    }
    array.forEach((item) => {
        const { breed, category, date_of_birth, gender, image, petId, pet_details, pet_name, price, vaccinated_status } = item
        cardParentDiv.innerHTML +=
            `
        <div class="p-5 rounded-xl border border-solid border-[primary]/[0.1]">
            <div class="mb-6"><img src="${image} " class="w-full rounded-lg h-[300px] md:h-[330px] lg:h-[360px] object-cover" alt=""></div>
            <h1 class="text-base md:text-lg lg:text-xl font-bold font-inter text-primary mb-4">${pet_name} </h1>
            <div class="text-sm md:text-sm lg:text-base font-normal text-primary/[0.7] mb-4 space-y-1">
                <p class="flex items-center">
                    <span class="mr-2"><img src="images/icon/square.png" class="w-5 h-5" alt=""></span>
                    <span>Breed: ${breed ? breed : `Not found`} </span>
                </p>
                <p class="flex items-center">
                    <span class="mr-2"><img src="images/icon/calender.png" class="w-5 h-5"  alt=""></span>
                    <span>Birth: ${date_of_birth ? date_of_birth : `Not found`} </span>
                </p>
                <p class="flex items-center">
                    <span class="mr-2"><img src="images/icon/gender.png" class="w-5 h-5" alt=""></span>
                    <span>Gender: ${gender ? gender : `Not found`} </span>
                </p>
                <p class="flex items-center">
                    <span class="mr-2"><img src="images/icon/dollar.png" class="w-5 h-5" alt=""></span>
                     <span>Price : ${price ? price + '$' : `Not found`}</span>
                </p>
        </div>
        <div class="border border-solid border-[primary]/[0.1] my-4"></div>
        <div class="flex justify-between items-center">
            <button
                    class="btn bg-white text-base md:text-lg lg:text-xl font-bold text-secondary text-center border border-solid border-[secondary] hover:bg-secondary hover:text-white" onclick= showImage('${image}')><i
                    class="fa-regular fa-thumbs-up"></i>
            </button>
            <button
                class="btn bg-white text-base md:text-lg lg:text-xl font-bold text-secondary text-center border border-solid border-[secondary] hover:bg-secondary hover:text-white" onclick = "showAdoptionModal(this)">Adopt
            </button>
            <button
                class="btn bg-white text-base md:text-lg lg:text-xl font-bold text-secondary text-center border border-solid border-[secondary] hover:bg-secondary hover:text-white" data-title = "${pet_details}" onclick = "showModal(this,'${breed ? breed : ``}','${date_of_birth ? date_of_birth : ``}','${gender ? gender : ``}','${image}','${pet_name}','${price ? price : ``}','${vaccinated_status ? vaccinated_status : ``}')">Details
            </button>
        </div>
    </div>
        `

    })
    console.log(array);

}
// show all pets
const showAllPets = (array) => {

    document.getElementById('sort-btn').addEventListener('click', function () {
        array.sort((a, b) => b.price - a.price);
        sortElement(array);

    })

    const cardParentDiv = document.getElementById('animal-card-parent-div')
    cardParentDiv.innerHTML = '';
    document.getElementById('spinner').classList.remove('hidden');
    document.getElementById('animal-card-section').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('spinner').classList.add('hidden');
        document.getElementById('animal-card-section').classList.remove('hidden');
        if (array.length == 0) {
            document.getElementById('empty-section').classList.remove('hidden');

        } else {
            document.getElementById('empty-section').classList.add('hidden');
        }
        array.forEach((item) => {
            const { breed, category, date_of_birth, gender, image, petId, pet_details, pet_name, price, vaccinated_status } = item
            cardParentDiv.innerHTML +=
                `
            <div class="p-5 rounded-xl border border-solid border-[primary]/[0.1]">
                <div class="mb-6"><img src="${image} " class="w-full rounded-lg h-[300px] md:h-[330px] lg:h-[360px] object-cover" alt=""></div>
                <h1 class="text-base md:text-lg lg:text-xl font-bold font-inter text-primary mb-4">${pet_name} </h1>
                <div class="text-sm md:text-sm lg:text-base font-normal text-primary/[0.7] mb-4 space-y-1">
                    <p class="flex items-center">
                        <span class="mr-2"><img src="images/icon/square.png" class="w-5 h-5" alt=""></span>
                        <span>Breed: ${breed ? breed : `Not found`} </span>
                    </p>
                    <p class="flex items-center">
                        <span class="mr-2"><img src="images/icon/calender.png" class="w-5 h-5"  alt=""></span>
                        <span>Birth: ${date_of_birth ? date_of_birth : `Not found`} </span>
                    </p>
                    <p class="flex items-center">
                        <span class="mr-2"><img src="images/icon/gender.png" class="w-5 h-5" alt=""></span>
                        <span>Gender: ${gender ? gender : `Not found`} </span>
                    </p>
                    <p class="flex items-center">
                        <span class="mr-2"><img src="images/icon/dollar.png" class="w-5 h-5" alt=""></span>
                         <span>Price : ${price ? price + '$' : `Not found`}</span>
                    </p>
            </div>
            <div class="border border-solid border-[primary]/[0.1] my-4"></div>
            <div class="flex justify-between items-center">
                <button
                        class="btn bg-white text-base md:text-lg lg:text-xl font-bold text-secondary text-center border border-solid border-[secondary] hover:bg-secondary hover:text-white" onclick= showImage('${image}')><i
                        class="fa-regular fa-thumbs-up"></i>
                </button>
                <button
                    class="btn bg-white text-base md:text-lg lg:text-xl font-bold text-secondary text-center border border-solid border-[secondary] hover:bg-secondary hover:text-white" onclick = "showAdoptionModal(this)">Adopt
                </button>
                <button
                    class="btn bg-white text-base md:text-lg lg:text-xl font-bold text-secondary text-center border border-solid border-[secondary] hover:bg-secondary hover:text-white" data-title = "${pet_details}" onclick = "showModal('${petId}')">Details
                </button>
            </div>
        </div>
            `

        })
    }, 2000)
}

// animal card section right div 
const showImage = (imageLink) => {
    const imageParentDiv = document.getElementById('image-parent-div');
    imageParentDiv.innerHTML += `
    <div class="p-2 border border-solid border-[primary]/[0.1] rounded-lg">
        <img src="${imageLink}" class="w-full rounded-lg" alt="">
    </div>
    `
}


// show modal 
const showModal = (petId) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
        .then(res => res.json())
        .then(data => displayModalData(data.petData))

    const displayModalData = (data) => {
        const { breed, category, date_of_birth, gender, image, petId, pet_details, pet_name, price, vaccinated_status } = data;

        const modalParentDiv = document.getElementById('my_modal_4')
        modalParentDiv.innerHTML = '';
        modalParentDiv.innerHTML =
            `
    <div class="modal-box w-11/12 max-w-5xl">
       <div class="p-5 rounded-xl border border-solid border-[primary]/[0.1]">
           <div class="mb-6"><img src="${image}" class="w-full rounded-lg" alt=""></div>
           <h1 class="text-base md:text-lg lg:text-xl font-inter font-bold text-primary mb-4">${pet_name}</h1>
           <div class="text-sm md:text-sm lg:text-base font-normal text-primary/[0.7] mb-4 grid grid-cols-6">
               <div class="col-span-3 lg:col-span-2">
                   <p class="flex items-center mb-3">
                       <span class="mr-2"><img src="images/icon/square.png" class="w-5 h-5" alt=""></span>
                       <span>Breed: ${breed ? breed : `Not found`}</span>
                   </p>
                   <p class="flex items-center mb-3">
                       <span class="mr-2"><img src="images/icon/calender.png" class="w-5 h-5" alt=""></span>
                       <span>Birth: ${date_of_birth ? date_of_birth : `Not found`}</span>
                   </p>
                   <p class="flex items-center mb-3">
                       <span class="mr-2"><img src="images/icon/vaccine.png" class="w-5 h-5" alt=""></span>
                       <span>Vaccinated status: ${vaccinated_status ? vaccinated_status : `Not found`}</span>
                   </p>
               </div>
               <div class="col-span-3 lg:col-span-4">
                   <p class="flex items-center mb-3">
                       <span class="mr-2"><img src="images/icon/gender.png" class="w-5 h-5" alt=""></span>
                       <span>Gender: ${gender ? gender : `Not found`}</span>
                   </p>
                   <p class="flex items-center mb-3">
                       <span class="mr-2"><img src="images/icon/dollar.png" class="w-5 h-5" alt=""></span>
                       <span>Price : ${price ? price + '$' : `Not found`}</span>
                   </p>
               </div>
           </div>
           <div class="border border-solid border-[primary]/[0.1] my-4"></div>
           <h1 class="text-sm md:text-sm lg:text-base font-semibold font-inter text-primary mb-2">Details Information</h1>
           <p class="text-sm md:text-sm lg:text-base font-normal text-primary/[0.7]">${pet_details}</p>
           <ul class="list-disc list-inside">
               <li class="text-sm md:text-sm lg:text-base font-normal text-primary/[0.7] ">${pet_details}</li>
           </ul>

           <div class="modal-action w-full">
               <form method="dialog" class="w-full">
                   <!-- if there is a button, it will close the modal -->
                   <button
                       class="btn w-full bg-[#E6F1F2] text-base md:text-lg lg:text-xl font-bold text-secondary text-center border border-solid border-[secondary] hover:bg-secondary hover:text-white">Close</button>
               </form>
           </div>
       </div>
   </div>
`


        my_modal_4.showModal();

    }



}


// show adoption btn modal
const showAdoptionModal = (btnElement) => {
    document.getElementById('modal-count').innerText = 3;
    my_modal_2.showModal()

    let count = 3;
    const timer = setInterval(() => {
        count--;
        if (count < 1) {
            clearInterval(timer);
            my_modal_2.close();
            btnElement.setAttribute("disabled", true)
            btnElement.innerText = 'Adopted'
            console.log(btnElement);


        }
        else {
            document.getElementById('modal-count').innerText = count;
        }
    }, 900)



}



// show navbar
const showNavbar = () => {
    document.getElementById('navbar-div').classList.toggle('hidden')
    document.getElementById('navbar').classList.toggle('mb-14')
}