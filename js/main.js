import * as functions from './functions.js'
import header from '../views/header.js'
import search from '../views/search.js'
import content from '../views/content.js'
import displayImages from '../views/images.js'
import * as api from '../api/api.js'


export default () => {

    const layoutContainer = document.getElementById('app')

    functions.render(header, layoutContainer)
    functions.render(search, layoutContainer)
    functions.render(content, layoutContainer)

    const imagesDiv = document.getElementById('images')
    const searchButton = document.getElementById('search-image')


    searchButton.addEventListener('click', (e) => {
        functions.clearImages();
        let valor = document.getElementById('query-search').value;

        // functions.render(loader, imagesDiv)

        api.fetchImages(valor).then(images => {

            var imagesParsed = functions.parseImages(images.results)

            functions.render(displayImages(imagesParsed), imagesDiv)
        })

        document.getElementById('imagenes-container').style.display = 'block'

    })

}