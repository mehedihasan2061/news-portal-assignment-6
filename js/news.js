
// load cetagories data

const loadCetagories = async () => {

    try {
        const url = 'https://openapi.programming-hero.com/api/news/categories'
        const res = await fetch(url);
        const data = await res.json()
        displayCategories(data.data.news_category)

    } catch (error) {
        errMsg.innerText = "check your internet connection and try again"
    }


}


// load all news data

const loadNews = async (id) => {
    // add spinner
    spinner.classList.remove('hidden')
    // spinner.classList.add('hi')

    try {
        const url = `https://openapi.programming-hero.com/api/news/category/${id}`
        const res = await fetch(url);
        const data = await res.json()


        sortItem(data.data)
        // displayNews(data.data)
    } catch (error) {
        errMsg.innerText = "check your internet connection and try again"
    }

    // load data

}
// load news details

const loadNewsDetails = async (id) => {

    try {
        const url = ` https://openapi.programming-hero.com/api/news/${id}`
        const res = await fetch(url);
        const data = await res.json()
        modalInfo(data.data[0])
    } catch (error) {
        errMsg.innerText = "check your internet connection and try again"
    }


    
}

// loadNewsDetails('0282e0e58a5c404fbd15261f11c2ab6a')



// loadCetagories()

// call the function 



loadCetagories()
loadNews('08')