export function render(content, element) {
    element.innerHTML = element.innerHTML + content
}

export function clearImages() {
    document.getElementById('images').innerHTML = '';
}

export function parseImages(data) {

    if (data.length == 0) return null;

    let images = [];

    for (var i = 0; i < data.length; i++) {
        let image = {};

        image.urls = data[i].urls;
        image.alt_description = data[i].alt_description;
        image.description = data[i].description;
        image.tags = data[i].tags;

        images.push(image);
    }

    return images;
}