export default (images) => {
    if (!images) return '<div class="alert alert-warning">No se han encontrado resultados</div>';

    return `
    <div class="contenedor-imagenes">
    ${images.map(function(image) {
        let description = image.description !== null ? image.description : '';

        return `<figure>
                    <a data-fancybox="gallery" data-caption="${description}" href="${image.urls.full}">
                        <img class="image" src="${image.urls.small}">
                    </a>
                </figure>`
    }).join(' ')
}  
</div>
   `
}