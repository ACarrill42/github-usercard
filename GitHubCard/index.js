/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
let link = axios.get('https://api.github.com/users/acarrill42')
.then(()=> {
  console.log('success');
})
.catch(()=> {
  console.log('did not succeed');
})
// console.log(link);
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
let grab = document.querySelector('.cards');

function gitCard(git) {
  let card = document.createElement('div');
  let img = document.createElement('img');
  let cardInfo = document.createElement('div');
  let name = document.createElement('h3');
  let userName = document.createElement('p');
  let location = document.createElement('p');
  let profile = document.createElement('p');
  let address = document.createElement('a');
  let follow = document.createElement('p');
  let following = document.createElement('p');
  let bio = document.createElement('p');

  card.classList.add('card');
  img.src = ('https://avatars.githubusercontent.com/u/69913507?v=4');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  name.textContent = 'Austin Carrill';
  userName.classList.add('username');
  userName.textContent = git.login;
  location.textContent = `Location ${git.location}`;
  profile.textContent = 'Profile:'
  address.href = ('https://github.com/ACarrill42');
  follow.textContent = `Followers: ${git.followers}`;
  following.textContent = `Following ${git.following}`;
  bio.textContent = `Bio: ${git.bio}`;

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(address);
  cardInfo.appendChild(follow);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  grab.appendChild(card);

  return card;
}
console.log(gitCard(link));