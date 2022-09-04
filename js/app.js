// load all dependencies
const categoryDiv = document.getElementById('categories')
const newsDisplay = document.getElementById('newses')
const spinner = document.getElementById('spinner')
const errMsg = document.getElementById('errMsg')
const Detailmodal = document.getElementById('Detailmodal')
let short = ''

// nwes details on modal

const modalInfo = (data) => {

  Detailmodal.innerHTML = ''


  const { image_url,title,details,author} = data
  const{img,name,published_date,total_view}= author

 


  const div = document.createElement('div')
  div.innerHTML = `

  <div>
  
  <img src="${image_url}" alt="" />
  </div>
  <div>
  <div class="content m-4">
  <h2 class="card-title">
    ${title}
  </h2>
  <p class="text-gray-700 pt-5 details">${details}</p>
</div>
  </div>
  <div class="authorInfo flex justify-around items-center">

  <!-- author info  -->

  <div class="flex  items-center justify-center">
    <div class="image">
      <img class="h-16 w-16 rounded-full" src="${img}" alt="">
    </div>
    <!-- author name -->
    <div class=" flex flex-col mx-3 justify-center">
      <h5 class="font-bold text-lg text-primary">${name ? name : 'unknown'}</h5>
      <h6 class="font-bold text-sm text-gray-500">${published_date}</h6>
    </div>

  </div>
  <!-- view -->
  <div class="flex items-center justify-center">
    <h5 class="font-bold text-lg text-gray-500"> <span class=""><i class="fa-regular fa-eye"></i></span>
      ${total_view ? total_view : 0}</h5>
  </div>
  <!-- rating -->
  <div>
    <span class="text-orange-600">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star-half-stroke"></i>

    </span>
  </div>
 



</div>
  


 
  
  `
  Detailmodal.appendChild(div)
}






// show or hide toggle

document.getElementById('categorySection').addEventListener('click', () => {
  document.getElementById('clickedToggle').classList.toggle('toggleList')
})



document.getElementById('selected-news').addEventListener('change', (newses) => {
  
})


// load preloaders



//  


const sortItem = (newses) => {




  newses.sort((a, b) => {

    return b.total_view - a.total_view
  })
  displayNews(newses)
}




// change event listenber


// errMsg.innerText=foundNumber
// load news

const displayNews = async (newses) => {

  errMsg.innerText = `${newses.length} news Found`;

  document.getElementById('selected-news').addEventListener('change', () => {

  })





  newsDisplay.innerHTML = ''

  newses.forEach(news => {


    const { title, author, thumbnail_url, total_view, details, _id } = news

    const { img, name, published_date } = author



    const singleNewsDiv = document.createElement('div')
    singleNewsDiv.innerHTML = `
        <div class="card w-3/4 mx-auto my-5 bg-base-100 shadow-xl">
        <div class="card-body ">

          <div class="grid grid-cols-6 gap-4">
            <div class="image-grid xs:col-start-1 xs:col-end-7 sm:col-start-1 sm:col-end-7  md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-3  m-auto">
              <figure><img class="rounded-xl" src="${thumbnail_url}" alt="Album"></figure>
            </div>
            <div class="cart-grid  sm:col-start-1 sm:col-end-7 md:col-start-1 md:col-end-7 lg:col-start-3 lg:col-end-7">
              <div class="content m-4">
                <h2 class="card-title">
                 ${title}
                </h2>
                <p class="text-gray-700 pt-5 details">${details.length > 100 ? details.slice(0, 250) : details}</p>
              </div>

              <div class="authorInfo flex justify-around items-center">

                <!-- author info  -->

                <div class="flex items-center justify-center">
<div class="image">
  <img class="h-16 w-16 rounded-full" src="${img}" alt="">
</div>
<!-- author name -->
<div class=" flex flex-col mx-3 justify-center">
  <h5 class="font-bold text-lg text-primary">${name ? name : 'unknown'}</h5>
  <h6 class="font-bold text-sm text-gray-500">${published_date?published_date:'unknown'}</h6>
</div>

                </div>
                <!-- view -->
                <div class="flex items-center justify-center">
                  <h5 class="font-bold text-lg text-gray-500"> <span class=""><i class="fa-regular fa-eye"></i></span> ${total_view ? total_view : 0}</h5>
                </div>
                <!-- rating -->
                <div>
                <span class="text-orange-600">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                
                </span>
                </div>
                <div>
                <label for="my-modal-5" class=" modal-button" onclick="loadNewsDetails('${_id}')"> <span class="modal-button"><i class="fa-solid fa-arrow-right text-primary text-3xl font-bold"></i></span></label>


                </div>

              </div>

            </div>
          </div>



        </div>
      </div>
        
        `
    newsDisplay.appendChild(singleNewsDiv)
    const numberNews = document.getElementById('newses').children.length
    errMsg.innerText = `${numberNews ? numberNews : 0} news Found`;


    // invisible preloader 

    setTimeout(() => {
      spinner.classList.add('hidden')
    }, 500)




  });

  return newses

}




// load all functions


const displayCategories = async (categories) => {

  categories.forEach(category => {

    const { category_name: name, category_id } = category

    const span = document.createElement('span')

    span.innerHTML = `  <a id="items" class="font-medium text-gray-700 p-2 hover:text-primary hover:bg-smallBg cursor-pointer" onclick="loadNews('${category_id}')">${name}</a>`


    categoryDiv.appendChild(span)


  });

}




