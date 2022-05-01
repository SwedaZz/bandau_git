// 1. Jums paskambino pažinčių portalas – jiems reikia greitai sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų juos puslapyje. Duomenys galėtų būti atvaizduoti panašioje kortelėje. Svarbu atvaizduoti nuotrauką, vardą, amžių ir el. pašto adresą.

const renderUserCard = (user) => {
    const img = document.createElement('img');
    img.src = user.picture.large;
    img.alt = `${user.name.first} profile picture`;
  
    const intro = document.createElement('h4');
    intro.innerText = `${user.name.first} ${user.name.last}, ${user.dob.age}`;
  
    const contacts = document.createElement('h5');
    contacts.innerText = user.email;
  
    const card = document.createElement('div');
    card.append(img, intro, contacts);
    document.body.append(card);
  };
  
  const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      if (response.ok) {
        const data = await response.json();
        renderUserCard(data.results[0]);
      }
    } catch(error) {
      console.error(error);
    }
  };
  
  fetchRandomUser();

  
// 2. Naudojant "https://boiling-reaches-93648.herokuapp.com/week-3/party" - pasiimkite informaciją iš šito puslapio ir naudojant skirtingus array metodus, transformuokite duomenis bei išmeskite true/false ekrane - ar "Kristupas Lapeika" yra VIP, ar ne?

fetch("https://boiling-reaches-93648.herokuapp.com/week-3/party")
.then(js21_getApi => js21_getApi.json())
.then(js21_getApiData => {

    console.log(js21_getApiData)

    // let output = "<h2>Visos Photo</h2>"
    // js21_getApiData.forEach((item, index) => {
    //     output += `<div>
    //         <p>${item.title}</p>
    //         <img src="${item.thumbnailUrl}"
    //         </div>`;})
    // document.getElementById("photo").innerHTML = output;
})
.catch(err => console.log("nepavyko", err));

alert("pakeitimai")