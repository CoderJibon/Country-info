const countryAll = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        contryData(data);
    })
}
countryAll();
const contryData = (displayData) => {
    const posts_area = document.querySelector('.posts_area');
    displayData.forEach(countes => {
        const dib = document.createElement('div');
        dib.classList.add('postColum');
        dib.innerHTML = `
        <img id="resizeImg" class="${countes.name}" src="" alt="">
        <h4>Country: ${countes.name}</h4>
        <p>population: ${countes.population}</p>
        <button onclick="showMap('${countes.name}')">View flag</button>
        `;
        posts_area.appendChild(dib);
    });
}

const showMap = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const img = data[0].name;
        const imgClass = img.split(' ');
        const imgUrl = document.querySelector('.'+ imgClass[0]);
        imgUrl.setAttribute('src',data[0].flag);
        console.log(imgUrl);
    })
    
}
