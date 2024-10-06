// category btn section
const fetchCategoryBtn = async() =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
    const data = await res.json()
    showCategoryBtn(data.categories);
    
}
fetchCategoryBtn();

const showCategoryBtn = (array) =>{
    const categoryBtnDiv = document.getElementById('category-btn-parent');
    array.forEach(item => {
        const {id, category, category_icon} = item;
        categoryBtnDiv.innerHTML += 
        `
        <div>
            <button class="btn w-full h-[70px] lg:h-24 rounded-2xl flex items-center justify-center space-x-2">
                <div><img src="${category_icon} " class="w-14 h-14" alt=""></div>
                <div class=" text-base md:text-xl lg:text-2xl font-bold text-primary">${category} </div>
            </button>
        </div>
        `
        
    });
    
}



// animal card section
const fetchAllPets = async() =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    const data = await res.json()
    showAllPets(data.pets);
    
}
fetchAllPets()

const showAllPets = (array) =>{
    const cardParentDiv = document.getElementById('animal-card-parent-div')
    array.forEach((item) =>{
        const {breed, category, date_of_birth, gender, image, petId, pet_details, pet_name, price, vaccinated_status } = item
        cardParentDiv.innerHTML +=
        `
        <div class="p-5 rounded-xl border border-solid border-[primary]/[0.1]">
            <div class="mb-6"><img src="${image} " class="w-full rounded-lg h-[300px] md:h-[330px] lg:h-[360px] object-cover" alt=""></div>
            <h1 class="text-base md:text-lg lg:text-xl font-bold text-primary mb-4">${pet_name} </h1>
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
                     <span>Price : ${price ? price+'$'  : `Not found`}</span>
                </p>
        </div>
        <div class="border border-solid border-[primary]/[0.1] my-4"></div>
        <div class="flex justify-between items-center">
            <button
                    class="btn bg-white text-base md:text-lg lg:text-xl font-bold text-secondary text-center border border-solid border-[secondary] hover:bg-secondary hover:text-white"><i
                    class="fa-regular fa-thumbs-up"></i>
            </button>
            <button
                class="btn bg-white text-base md:text-lg lg:text-xl font-bold text-secondary text-center border border-solid border-[secondary] hover:bg-secondary hover:text-white">Adopt
            </button>
            <button
                class="btn bg-white text-base md:text-lg lg:text-xl font-bold text-secondary text-center border border-solid border-[secondary] hover:bg-secondary hover:text-white">Details
            </button>
        </div>
    </div>
        `
        
    })
}


