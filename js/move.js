const searchGame = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value 
    // console.log(searchText)

    searchField.value = '';
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`
    // console.log(url)

    fetch(url)
    .then (res => res.json())
    .then(data => displaySearchResult(data.teams))
}

const displaySearchResult  = sports => {
    // console.log(sports)
    const searchResult = document.getElementById('search-result')
    sports.forEach(sport => {
        console.log(sport)
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML=`
        <div onclick="loadClubDetails(${sport.idTeam})" class="card h-100">
            <img src="${sport.strTeamBadge}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${sport.strAlternate}</h5>
              <p class="card-text">${sport.strDescriptionEN.slice(0, 200)}</p>
            </div>
          </div>
        `
        searchResult.appendChild(div);
        
    });
}

const loadClubDetails = teamId  =>{
    console.log(teamId)
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`

    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.teams[0]))

}

const displayClubDetail = team =>{
    console.log(team)
   const clubDetailes = document.getElementById('club-details')
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML=`
    <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${team.strAlternate}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
    `
    clubDetailes.appendChild(div)

}


