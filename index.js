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




