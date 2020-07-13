//Arshdeep Singh
//200425787
//url from github server
let url = 'https://arshdeep980.github.io/jsLab8/products.json';

//refering the html elements
let header = document.querySelector('header');
let section = document.querySelector('section');

let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();
request.onload = function() {
    let products = request.response;
    populateHeader(products);
    weirdDeals(products);
};


//populating the header
function populateHeader(jsonObj) {
    let headerHeading = document.createElement('h1');
    headerHeading.textContent = jsonObj['companyName'];
    header.appendChild(headerHeading);
    let headerPara = document.createElement('p');
    headerPara.textContent = 'Head Office- ' + jsonObj['headOffice'];
    //displayed established as well
    headerEst = document.createElement('p');
    headerEst.textContent = 'Established- ' + jsonObj['established'];
    header.appendChild(headerPara);
    header.appendChild(headerEst);
}


//main function to display eveything and did some styling as well
function weirdDeals(jsonObj) {
    let topDeals = jsonObj.topDeals;
    let section = document.querySelector('section');
    for (let i = 0; i < topDeals.length; i++) {
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let ul = document.createElement('ul');

        img.setAttribute('src', 'https://arshdeep980.github.io/jsLab8/images/' + topDeals[i].image);
        img.setAttribute('alt', topDeals[i].image);
        h2.textContent = topDeals[i].name;
        p1.textContent = 'Price ' + topDeals[i].price;
        p2.textContent = 'Description ' + topDeals[i].description;
        let features = topDeals[i].features;
        for (let j = 0; j < features.length; j++) {
            let li = document.createElement('li');
            li.textContent = features[j];
            ul.appendChild(li);
        }

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(ul);
        section.appendChild(article);

    }
}