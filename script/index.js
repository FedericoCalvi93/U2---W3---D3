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
data.forEach((element) => {
  const col1=document.getElementById('col1')
  col1.innerHTML=` <div class="card" style="width": 18rem;">
  <img src=${element.img} class="card-img-top" alt="...">
  <div class="card-body>
  <h5 class="card-title"> ${element.title} </h5>
  <p class="card-text"> ${element.price} </p>
  <a href="#" class="btn btn-primary">Acquista</a>
  </div>
</div>
`
const col2=document.getElementById('col2')
  col2.innerHTML=` <div class="card" style="width": 18rem;">
  <img src=${"https://images-na.ssl-images-amazon.com/images/I/91ku%2B0LppPL.jpg"} class="card-img-top" alt="...">
  <div class="card-body>
  <h5 class="card-title"> ${7.59} </h5>
  <p class="card-text"> ${"Shards of Hope (Psy-Changeling Novel, A)"} </p>
  <a href="#" class="btn btn-primary">Acquista</a>
  </div>
</div>
`

const col3=document.getElementById('col3')
  col3.innerHTML=` <div class="card" style="width": 18rem;">
  <img src=${"https://images-na.ssl-images-amazon.com/images/I/91J28bj3PYL.jpg"} class="card-img-top" alt="...">
  <div class="card-body>
  <h5 class="card-title"> ${26.09} </h5>
  <p class="card-text"> ${
    "Gameboard of the Gods"} </p>
  <a href="#" class="btn btn-primary">Acquista</a>
  </div>
</div>
`
const col4=document.getElementById('col4')
  col4.innerHTML=` <div class="card" style="width": 18rem;">
  <img src=${"https://images-na.ssl-images-amazon.com/images/I/91eGxsWGH7L.jpg"} class="card-img-top" alt="...">
  <div class="card-body>
  <h5 class="card-title"> ${17.06} </h5>
  <p class="card-text"> ${
    "Silver Silence (Psy-Changeling Trinity)"} </p>
  <a href="#" class="btn btn-primary">Acquista</a>
  </div>
</div>
`
const col5=document.getElementById('col5')
  col5.innerHTML=` <div class="card" style="width": 18rem;">
  <img src=${
    "https://images-na.ssl-images-amazon.com/images/I/51vw%2Bn7xZCL.jpg"} class="card-img-top" alt="...">
  <div class="card-body>
  <h5 class="card-title"> ${9.60} </h5>
  <p class="card-text"> ${
"The Battle of Evernight - Special Edition: The Bitterbynde Book #3 (The Bitterbynde Trilogy)"} </p>
  <a href="#" class="btn btn-primary">Acquista</a>
  </div>
</div>
`
const col6=document.getElementById('col6')
  col6.innerHTML=` <div class="card" style="width": 18rem;">
  <img src=${
  "https://images-na.ssl-images-amazon.com/images/I/514%2BSppz8AL.jpg"} class="card-img-top" alt="...">
  <div class="card-body>
  <h5 class="card-title"> ${4.84} </h5>
  <p class="card-text"> ${
    "Nightchaser"} </p>
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