const getBooks= function () {
  fetch(
    'https://striveschool-api.herokuapp.com/books'
  )
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        if (res.status === 404) {
          throw new Error('Not found')
        } else {
          throw new Error('Error in the call')
        }
      }
    })
    .then((data) => {
      console.log(data)
      let spinnerContainer = document.getElementById('spinner-container')
      spinnerContainer.classList.add('d-none')
data.forEach(element => {
  let col1=document.getElementById('col1')
  col1.innerHTML=` <div class="card" style="width": 18rem;">
  <img src=${element.img[4]} class="card-img-top" alt="...">
  <div class="card-body>
  <h5 class="card-title"> ${element.title[4]} </h5>
  <p class="card-text"> ${element.price[4]} </p>
  <a href="#" class="btn btn-primary">Acquista</a>
  </div>
</div>
`
cardBody.appendChild(card-title);
cardBody.appendChild(card-text);
card.appendChild(img)
card.appendChild(cardBody)
const cardContainer = document.getElementById('col1')
cardContainer.appendChild(card);
return card;

});
    })
    .catch((err) => {
      console.log(err)
    })
}

getBooks()