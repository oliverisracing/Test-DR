// Initialize the episode number
// Define a global variable for the episode number
// Variable global para almacenar si la temporada tendrá una doble premiere
let isDoublePremiere = false;
// Variable global para rastrear si ya ha ocurrido un doble shantay
let doubleShantayHappened = false;
let groupOne = [];
let groupTwo = [];
let episode = 1;
class Queen {
  constructor(name, acting, improv, comedy, dance, design, rusical, makeover, branding, lipsync, music, image) {
    this.name = name;
    this.acting = acting;
    this.improv = improv;
    this.comedy = comedy;
    this.dance = dance;
    this.design = design;
    this.rusical = rusical;
    this.makeover = makeover;
    this.branding = branding;
    this.lipsync = lipsync;
    this.music = music;
    this.image = image;
    this.favoritismPoints = 0;
    this.isActive = true;
    this.trackRecord = [];
    this.currentPlacement = '';
    this.lastPlacement = ''; // To track the queen's last episode placement
    this.winningStreak = 0; // To track consecutive wins
    this.eliminated = false; // To indicate if the queen has been eliminated
    // Initialize new properties
    this.safeStreak = 0;
    this.totalWins = 0;
    this.bottomAppearances = 0;
  }
}

//acting, improv, comedy, dance, design, rusical, makeover, branding, lipsync, image
// Now, when you create a new Queen, you can specify their image like so:
let primarina = new Queen('Primarina', 8, 7, 10, 10, 11, 12, 12, 8, 9, 11, 'https://img.pokemondb.net/sprites/sword-shield/normal/primarina.png');
let gardevoir = new Queen('Gardevoir', 10, 13, 13, 10, 13, 11, 13, 13, 13, 12, 'https://img.pokemondb.net/sprites/sword-shield/normal/gardevoir.png');
let lopunny = new Queen('Lopunny', 10, 8, 9, 16, 8, 14, 10, 10, 15, 15, 'https://img.pokemondb.net/sprites/sword-shield/normal/lopunny.png');
let milotic = new Queen('Milotic', 11, 11, 10, 7, 15, 10, 15, 7, 12, 10, 'https://img.pokemondb.net/sprites/sword-shield/normal/milotic.png');
let mismagius = new Queen('Mismagius', 9, 12, 11, 14, 9, 7, 11, 12, 11, 9, 'https://img.pokemondb.net/sprites/black-white/normal/mismagius.png');
let jynx = new Queen('Jynx', 6, 7, 7, 8, 7, 7, 5, 5, 11, 4, 'https://img.pokemondb.net/sprites/sword-shield/normal/jynx.png');
let lapras = new Queen('Lapras', 10, 10, 10, 4, 8, 14, 9, 6, 10, 10, 'https://img.pokemondb.net/sprites/sword-shield/normal/lapras.png');
let blissey = new Queen('Blissey', 13, 15, 14, 9, 8, 11, 8, 11, 9, 12, 'https://img.pokemondb.net/sprites/sword-shield/normal/blissey.png');
let hatterene = new Queen('Hatterene', 11, 11, 8, 8, 10, 14, 8, 15, 13, 9, 'https://img.pokemondb.net/sprites/sword-shield/normal/hatterene.png');
let vespiqueen = new Queen('Vespiqueen', 15, 11, 9, 9, 11, 13, 13, 6, 7, 7, 'https://img.pokemondb.net/sprites/sword-shield/normal/vespiquen.png');
let salazzle = new Queen('Salazzle', 4, 6, 9, 10, 10, 10, 10, 6, 7, 10, 'https://img.pokemondb.net/sprites/sword-shield/normal/salazzle.png');
let mawile = new Queen('Mawile', 7, 8, 9, 9, 11, 13, 13, 8, 8, 6, 'https://img.pokemondb.net/sprites/sword-shield/normal/mawile.png');
let gothitelle = new Queen('Ghotitelle', 12, 12, 6, 9, 7, 7, 10, 6, 7, 9, 'https://img.pokemondb.net/sprites/sword-shield/normal/gothitelle.png');
let mrmime = new Queen('Mr. Mime', 15, 10, 8, 3, 9, 14, 10, 11, 10, 9, 'https://img.pokemondb.net/sprites/sword-shield/normal/mr-mime.png');
let malamar = new Queen('Malamar', 10, 10, 10, 10, 10, 10, 10, 10, 10, 6, 'https://img.pokemondb.net/sprites/sword-shield/normal/malamar.png');

let castSeason1 = [primarina, gardevoir, lopunny, milotic, mismagius, jynx, lapras, blissey, hatterene, vespiqueen, salazzle, mawile, gothitelle, mrmime, malamar].map(queen => ({ ...queen, isActive: true }));

let pikachu = new Queen('Pikachu', 10, 9, 8, 13, 10, 12, 11, 10, 14, 'https://img.pokemondb.net/sprites/sword-shield/normal/pikachu.png');
let charizard = new Queen('Charizard', 12, 11, 10, 15, 13, 14, 12, 11, 13, 'https://img.pokemondb.net/sprites/sword-shield/normal/charizard.png');
let bulbasaur = new Queen('Bulbasaur', 8, 10, 11, 12, 9, 13, 10, 9, 11, 'https://img.pokemondb.net/sprites/sword-shield/normal/bulbasaur.png');
let squirtle = new Queen('Squirtle', 9, 10, 12, 11, 12, 10, 13, 8, 10, 'https://img.pokemondb.net/sprites/sword-shield/normal/squirtle.png');
let eevee = new Queen('Eevee', 11, 12, 9, 14, 11, 11, 12, 13, 12, 'https://img.pokemondb.net/sprites/sword-shield/normal/eevee.png');
let snorlax = new Queen('Snorlax', 14, 13, 13, 9, 8, 15, 7, 6, 9, 'https://img.pokemondb.net/sprites/sword-shield/normal/snorlax.png');
let psyduck = new Queen('Psyduck', 7, 8, 10, 10, 13, 9, 14, 7, 8, 'https://img.pokemondb.net/sprites/sword-shield/normal/psyduck.png');
let arcanine = new Queen('Arcanine', 13, 14, 12, 16, 10, 13, 11, 12, 15, 'https://img.pokemondb.net/sprites/sword-shield/normal/arcanine.png');
let gengar = new Queen('Gengar', 12, 11, 13, 14, 12, 12, 15, 13, 14, 'https://img.pokemondb.net/sprites/sword-shield/normal/gengar.png');
let dragonite = new Queen('Dragonite', 15, 14, 11, 12, 15, 14, 13, 10, 12, 'https://img.pokemondb.net/sprites/sword-shield/normal/dragonite.png');
let machamp = new Queen('Machamp', 14, 15, 14, 10, 9, 12, 10, 9, 11, 'https://img.pokemondb.net/sprites/sword-shield/normal/machamp.png');

let castSeason2 = [pikachu, charizard, bulbasaur, squirtle, eevee, snorlax, psyduck, arcanine, gengar, dragonite, machamp].map(queen => ({ ...queen, isActive: true }));

//acting, improv, comedy, dance, design, rusical, makeover, branding, lipsync, image
let denali = new Queen("Denali Foxx", 7, 8, 10, 13, 8, 11, 5, 10, 15,"https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/36/DenaliS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902181626");
let eliott = new Queen("Elliott with 2 Ts", 6, 6, 5, 9, 8, 8, 12, 8, 9,"https://static.wikia.nocookie.net/logosrupaulsdragrace/images/0/0b/ElliottWith2T%27sS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902181745");
let gottmik = new Queen("Gottmik", 9, 11, 13, 4, 12, 13, 6, 9, 9,"https://static.wikia.nocookie.net/logosrupaulsdragrace/images/b/bd/GottmikS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902181947");
let joey = new Queen("Joey Jay", 6, 6, 5, 5, 5, 5, 8, 7, 8,"https://static.wikia.nocookie.net/logosrupaulsdragrace/images/a/a7/JoeyJayS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902182023");
let kahmora = new Queen("Kahmora Hall", 3, 3, 5, 6, 6, 10, 5, 8, 6,"https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e5/KahmoraHallS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902182128");
let kandy = new Queen("Kandy Muse", 9, 11, 14, 7, 6, 5, 15, 13, 9,"https://static.wikia.nocookie.net/logosrupaulsdragrace/images/6/63/KandyMuseS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902182209");
let lalari = new Queen("LaLa Ri", 6, 6, 6, 9, 1, 4, 15, 10, 8,"https://static.wikia.nocookie.net/logosrupaulsdragrace/images/e/e0/LaLaRiS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902182255");
let liv = new Queen("Liv Lux Miyake-Mugler", 8, 11, 9, 11, 8, 12, 10, 7, 14,"https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/4f/OliviaLuxS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902182353");
let rose = new Queen("Rosé", 11, 12, 12, 11, 8, 8, 8, 15, 25,"https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/74/Ros%C3%A9S13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902182428");
let symone = new Queen("Symone", 15, 9, 8, 10, 8, 5, 13, 14, 14,"https://static.wikia.nocookie.net/logosrupaulsdragrace/images/7/7d/SymoneS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20211216235826");
let tamisha = new Queen("Tamisha Iman", 6, 6, 6, 6, 3, 6, 10, 8, 5,"https://static.wikia.nocookie.net/logosrupaulsdragrace/images/3/35/TamishaImanS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902182545");
let tina = new Queen("Tina Burner", 8, 8, 7, 7, 5, 5, 7, 10, 6,"https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/44/TinaBurnerS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902182624");
let utica = new Queen("Utica Queen", 6, 6, 6, 4, 15, 11, 10, 6, 9,"https://static.wikia.nocookie.net/logosrupaulsdragrace/images/d/dc/UticaQueenS13CastMug.jpg/revision/latest/scale-to-width-down/105?cb=20210902182704");
let us_season13 = [denali, eliott, gottmik, joey, kahmora, kandy, lalari, liv, rose, symone, tamisha, tina, utica];

// Global cast variable
let cast = [];

function calculateConsecutiveSafeStreak(trackRecord) {
  let currentStreak = 0;
  let maxStreak = 0;

  for (let i = 0; i < trackRecord.length; i++) {
    if (trackRecord[i] === 'SAFE') {
      currentStreak++;
      maxStreak = Math.max(maxStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  }

  return maxStreak;
}

// Function to determine which queens are in the current episode
function getQueensInEpisode(allQueens) {
    // For simplicity, let's assume all active queens participate in each episode
    return allQueens.filter(queen => queen.isActive);
  }
  function displayCast(cast, episode) {

    // Decide qué grupo de queens mostrar basado en el episodio y si es doble premiere
    let queensToDisplay = cast;
    if (isDoublePremiere) {
      if (episode === 1) {
        queensToDisplay = groupOne;
        console.log('Doble premiere activada: Mostrando grupo uno');
      } else if (episode === 2) {
        queensToDisplay = groupTwo;
        console.log('Doble premiere activada: Mostrando grupo dos');
      }
    }
  
    console.log('Queens to display:', queensToDisplay.map(queen => queen.name)); // Log the queens being displayed
  
    // Obtén el contenedor donde se mostrará el cast
    const castScreen = document.getElementById('castScreen');
  
    // Limpia cualquier contenido existente
    castScreen.innerHTML = '';
  
    // Crea un encabezado para la visualización del cast
    const castHeader = document.createElement('h2');
    castHeader.innerText = 'Meet the Queens';
    castHeader.style.textAlign = 'center';
    castHeader.style.backgroundColor = 'purple';
    castHeader.style.color = 'white';
    castHeader.style.padding = '10px';
    castHeader.style.borderRadius = '20px';
    castScreen.appendChild(castHeader);
  
    // Crea una lista para mostrar las queens
    const queensList = document.createElement('ul');
    queensList.style.listStyleType = 'none';
    queensList.style.padding = '0';
  
    // Asegúrate de usar queensToDisplay en lugar de cast para el bucle forEach
    queensToDisplay.forEach((queen, index) => {
      // Create a list item for each queen
      const queenItem = document.createElement('li');
      queenItem.style.display = 'flex'; // Use flexbox to align items side by side
      queenItem.style.alignItems = 'center'; // Center items vertically
      queenItem.style.backgroundColor = 'white';
      queenItem.style.color = '#333';
      queenItem.style.padding = '1em';
      queenItem.style.marginBottom = '1em';
      queenItem.style.border = '1px solid #ddd';
      queenItem.style.borderRadius = '20px';
      queenItem.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
  
      // Create an image element for the queen
      const queenImage = document.createElement('img');
      queenImage.src = queen.image; // Set the source of the image
      queenImage.alt = `Image of ${queen.name}`; // Set the alt text
      queenImage.style.width = '100px'; // Set a fixed width for the image
      queenImage.style.borderRadius = '10px';
      queenImage.style.height = 'auto'; // Maintain the aspect ratio
      queenImage.style.marginRight = '1em'; // Add space between the image and the name
  
      // Add the image to the list item
      queenItem.appendChild(queenImage);
  
      // Create a span element for the queen's name and message
      const queenName = document.createElement('span');
      let message = `${queen.name}, ready to take on the world!`; // Default message

        // Calculate safeStreak, totalWins, and bottomAppearances for each queen
        let safeStreak = calculateConsecutiveSafeStreak(queen.trackRecord);
        let totalWins = queen.trackRecord.filter(placement => placement === 'WIN').length;
        let bottomAppearances = queen.trackRecord.filter(placement => placement === 'BTM2').length;
      // Update the message based on the queen's performance
          // Special message for episode one
    if (episode === 1) {
      message = `${queen.name}, welcome to the race! Let's see what you've got!`;
    } 
      if (safeStreak === queen.trackRecord.length) {
        message = `${queen.name} has been consistently safe, but it's time to stand out from the crowd.`;
      } else if (totalWins > 1 && totalWins === Math.max(...cast.map(q => q.trackRecord.filter(p => p === 'WIN').length))) {
        message = `${queen.name} is a frontrunner with the most wins so far, setting the bar high for the competition.`;
      } else if (bottomAppearances >= 2) {
        message = `${queen.name} has been in the bottom ${bottomAppearances} times, it's do or die time for her.`;
      } else if (safeStreak > 2) {
        message = `${queen.name} has been flying under the radar with ${safeStreak} consecutive safe placements.`;
      } 
      if (queen.totalWins === 1 && queen.bottomAppearances === 0) {
        message = `${queen.name} has tasted victory once and is hungry for more.`;
      } else if (queen.totalWins === 0 && queen.bottomAppearances === 1) {
        message = `${queen.name} has been in the bottom once, a wake-up call to step up her game.`;
      } else if (queen.safeStreak === queen.trackRecord.length - 1 && queen.lastPlacement === 'WIN') {
        message = `${queen.name} has been playing it safe, but her recent win could be the start of a rise to the top.`;
      } else if (queen.trackRecord.includes('WIN') && queen.trackRecord.includes('BTM2') && queen.totalWins === queen.bottomAppearances) {
        message = `${queen.name} has had a rollercoaster journey, with equal highs and lows.`;
      }          
      // Add more conditions as needed for other track records
  
      queenName.innerText = message;
  
      // Add the name and message to the list item
      queenItem.appendChild(queenName);
  
      // Append the list item to the list
      queensList.appendChild(queenItem);
    });
  
    // Append the list to the container
    castScreen.appendChild(queensList);
  }
  // Make sure to have a container with the ID 'castContainer' in your HTML
  // <div id="castContainer"></div>

// Calculate queen's performance in a challenge
function calculatePerformance(queen, challengeStat, isActiveForEpisode) {
  if (!isActiveForEpisode) return; // No calcular si la queen no está activa para el episodio

  let stat = queen[challengeStat];
  let randomFactor = (Math.random() * 6) - 3; // Ahora entre -2 y 2
  let performanceScore = stat + randomFactor;
  return performanceScore;
}


// Define challenge types
const challenges = [
  { name: 'Acting', trait: 'acting', description: 'Queens must deliver Oscar-worthy performances in a scripted drama.' },
  { name: 'Improv', trait: 'improv', description: 'Unscripted scenes where quick wit and adaptability reign supreme.' },
  { name: 'Comedy', trait: 'comedy', description: 'Stand-up routines that leave the audience in stitches are the goal.' },
  { name: 'Dance', trait: 'dance', description: 'A choreographed number that showcases each queens rhythm and grace.' },
  { name: 'Design', trait: 'design', description: 'Fashion design challenge to create stunning outfits from unconventional materials.' },
  { name: 'Rusical', trait: 'rusical', description: 'A musical extravaganza where queens sing and dance in a Broadway-style show.' },
  { name: 'Makeover', trait: 'makeover', description: 'Transforming others into drag superstars through makeup and costume.' },
  { name: 'Branding', trait: 'branding', description: 'Developing a personal brand and marketing it effectively to stand out.' },
  { name: 'Snatch', traits: ['comedy', 'improv'], description: 'A celebrity impersonation game that tests queens on humor and impersonation skills.' },
  { name: 'Girl Group', trait: 'music', description: 'Queens form girl groups to perform a catchy song and choreography, showcasing their musical and teamwork skills.' }
];


  function simulateChallenge(queens, challenge, episode) {
    queens.forEach(queen => {
      // Determina si la queen está activa para el episodio actual
      let isActiveForEpisode = false;
      if (isDoublePremiere && (episode === 1 || episode === 2)) {
        let group = episode === 1 ? groupOne : groupTwo;
        isActiveForEpisode = group.includes(queen);
      } else {
        isActiveForEpisode = queen.isActive;
      }
  
      // Solo calcula el performanceScore si la queen está activa para el episodio
      if (isActiveForEpisode) {
        let performanceScore;
        if (challenge.name === 'Snatch') {
          // Snatch Game combina los rasgos de comedia e improvisación
          let comedyScore = calculatePerformance(queen, challenge.traits[0], isActiveForEpisode);
          let improvScore = calculatePerformance(queen, challenge.traits[1], isActiveForEpisode);
          performanceScore = (comedyScore + improvScore) / 2; // Promedio de los dos scores
        } else {
          performanceScore = calculatePerformance(queen, challenge.trait, isActiveForEpisode);
        }
        queen.performanceScore = performanceScore;
      }
    });
  
    // Ordena las queens por performanceScore para los placements
    queens.sort((a, b) => b.performanceScore - a.performanceScore);
  }
function determinePlacements(queens, episode) {
  // Filtrar solo las queens activas para el episodio actual
  let activeQueens = queens.filter(queen => {
    if (isDoublePremiere && (episode === 1 || episode === 2)) {
      let group = episode === 1 ? groupOne : groupTwo;
      return group.includes(queen);
    }
    return queen.isActive;
  });
  // Assign placements based on the sorted order and number of active queens
    if (activeQueens.length > 5) {
      activeQueens[0].currentPlacement = 'WIN';
      activeQueens[1].currentPlacement = 'HIGH';
      activeQueens[2].currentPlacement = 'HIGH';
      // Mark the rest as SAFE until the last three
      for (let i = 3; i < activeQueens.length - 3; i++) {
        activeQueens[i].currentPlacement = 'SAFE';
      }
      // The queen with the third-lowest score gets 'LOW'
      activeQueens[activeQueens.length - 3].currentPlacement = 'LOW';
      // The two queens with the lowest scores get 'BTM2'
      activeQueens[activeQueens.length - 2].currentPlacement = 'BTM2';
      activeQueens[activeQueens.length - 1].currentPlacement = 'BTM2';
    } else {
      // With 5 or fewer queens, only 'WIN', 'HIGH', and 'BTM2' placements are assigned
      activeQueens[0].currentPlacement = 'WIN';
      activeQueens[1].currentPlacement = 'HIGH';
      activeQueens[2].currentPlacement = 'HIGH';
      // The two queens with the lowest scores get 'BTM2'
      activeQueens[activeQueens.length - 2].currentPlacement = 'BTM2';
      activeQueens[activeQueens.length - 1].currentPlacement = 'BTM2';
    }
    

  // Update track record for active queens
  activeQueens.forEach(queen => {
    // Push the currentPlacement to the trackRecord
    queen.trackRecord.push(queen.currentPlacement);

    // Declare and calculate safeStreak, totalWins, and bottomAppearances
    let safeStreak = queen.trackRecord.filter(placement => placement === 'SAFE').length;
    let totalWins = queen.trackRecord.filter(placement => placement === 'WIN').length;
    let bottomAppearances = queen.trackRecord.filter(placement => placement === 'BTM2').length;

    // Assign the calculated values to the queen object
    queen.safeStreak = safeStreak;
    queen.totalWins = totalWins;
    queen.bottomAppearances = bottomAppearances;
  });

  // Now update lastPlacement and winningStreak
  activeQueens.forEach(queen => {
    // Set lastPlacement to the most recent entry in the trackRecord
    queen.lastPlacement = queen.trackRecord[queen.trackRecord.length - 1] || '';

    // Update winningStreak for queens who win
    if (queen.currentPlacement === 'WIN') {
      queen.winningStreak++; // Increment winning streak
    } else {
      queen.winningStreak = 0; // Reset winning streak if the queen didn't win
    }
  });
}

// Llama a esta función después de los resultados del lipsync para asignar los puntos de favoritismo
function assignFavoritismPointsAfterLipsync(activeQueens) {
  activeQueens.forEach(queen => {
    switch (queen.currentPlacement) {
      case 'WIN':
        queen.favoritismPoints += 5;
        break;
      case 'HIGH':
        queen.favoritismPoints += 1;
        break;
      case 'SAFE':
        queen.favoritismPoints += 0;
        break;
      case 'LOW':
        queen.favoritismPoints -= 2;
        break;
      case 'BTM2':
        queen.favoritismPoints -= 4;
        break;
    }
  });
}
// Llama a esta función después de los resultados del lipsync para asignar los puntos de favoritismo
function assignFavoritismPointsAfterLipsync(activeQueens) {
  activeQueens.forEach(queen => {
    switch (queen.currentPlacement) {
      case 'WIN':
        queen.favoritismPoints += 5;
        break;
      case 'HIGH':
        queen.favoritismPoints += 1;
        break;
      case 'SAFE':
        queen.favoritismPoints += 0;
        break;
      case 'LOW':
        queen.favoritismPoints -= 2;
        break;
      case 'BTM2':
        queen.favoritismPoints -= 4;
        break;
    }
  });
}
// Initialize a flag to track if the double shantay has been used this season
function lipsyncAndElimination(queens) {
  // Encuentra las reinas en el fondo
  let bottomQueens = queens.filter(queen => queen.currentPlacement === 'BTM2');
  
  // Asegúrate de que haya al menos dos reinas en el fondo antes de continuar
  if (bottomQueens.length > 1) {
    // Calcula los puntajes de lipsync, considerando puntos de favoritismo y un pequeño factor aleatorio
    bottomQueens.forEach(queen => {
      let randomFactor = Math.random() * 2 - 1; // Factor aleatorio entre -1 y 1
      queen.lipsyncScore = queen.lipsync + queen.favoritismPoints + randomFactor;
      
      // Registra el desglose completo del puntaje de lipsync
      console.log(`${queen.name} puntaje de lipsync: ${queen.lipsyncScore.toFixed(2)} (Habilidad de lipsync: ${queen.lipsync}, Puntos de favoritismo: ${queen.favoritismPoints}, Factor aleatorio: ${randomFactor.toFixed(2)})`);
    });

    // Ordena las reinas del fondo por puntaje de lipsync
    bottomQueens.sort((a, b) => b.lipsyncScore - a.lipsyncScore);

      // Después de determinar el resultado del lipsync, asigna los puntos de favoritismo
  assignFavoritismPointsAfterLipsync(queens);

    // Verifica si las puntuaciones son lo suficientemente altas para un doble shantay
    if (!doubleShantayHappened && bottomQueens[0].lipsyncScore > 7 && bottomQueens[1].lipsyncScore > 7) {
      // Marca que ya ha ocurrido un doble shantay
      doubleShantayHappened = true;
      // Registra un mensaje especial para el doble shantay
      console.log('DOUBLE SHANTAY!!!!!!!!!!');
      // Ambas reinas se quedan
      return { doubleShantay: true, queens: bottomQueens };
    } else {
      // La reina con el puntaje de lipsync más bajo es eliminada
      let eliminatedQueen = bottomQueens.pop(); // Usa pop para obtener el último elemento (puntaje más bajo)
      eliminatedQueen.isActive = false; // Actualiza el estado isActive a falso para la reina eliminada
      eliminatedQueen.currentPlacement = 'ELIM'; // Actualiza la colocación actual a 'ELIM'
      eliminatedQueen.trackRecord[eliminatedQueen.trackRecord.length - 1] = 'ELIM'; // Actualiza el track record a 'ELIM'

      return { winner: bottomQueens[0], eliminatedQueen }; // Devuelve la ganadora y la reina eliminada
    }
  } else {
    return null; // Devuelve null si no hay batalla de lipsync
  }
}

// Define the currentChallenge, previousChallenges, and selectedChallenges variables globally
let currentChallenge;
let previousChallenges = [];
let selectedChallenges = []; // Array to store the names of the challenges selected for each episode


function selectChallenge() {
  // Filter out challenges that were used in the last episode or used too frequently
  let filteredChallenges = challenges.filter(challenge =>
    !previousChallenges.includes(challenge.name) &&
    selectedChallenges.filter(c => c === challenge.name).length < maxOccurrences
  );

  // If all challenges have reached their max occurrences, reset the previousChallenges array
  if (filteredChallenges.length === 0) {
    previousChallenges = [];
    filteredChallenges = challenges;
  }

  // Select a random challenge from the filtered list
  let challenge = filteredChallenges[Math.floor(Math.random() * filteredChallenges.length)];

  // Update the previousChallenges array
  if (previousChallenges.length >= maxPrevious) {
    previousChallenges.shift(); // Remove the oldest challenge to maintain the length
  }
  previousChallenges.push(challenge.name); // Store the challenge name

  // Store the selected challenge name for the episode headers
  selectedChallenges.push(challenge.name);

  return challenge;
}


function handleNewEpisode() {
  // Select a new challenge for the episode
  currentChallenge = selectChallenge();

  // Verify that currentChallenge is not undefined
  if (!currentChallenge) {
    console.error('Failed to select a new challenge. currentChallenge is undefined.');
    return; // Exit the function if currentChallenge is undefined
  }

  // Get the active queens for the new episode
  queensInEpisode = getActiveQueens(cast);
  console.log('Active Queens for this Episode:', queensInEpisode.map(queen => queen.name)); // Debug log for active queens

  // Reset any other necessary variables for the new episode here
  // ...

  // Update the state to display the cast for the new episode
  currentState = states.DISPLAY_CAST;
}

// Constants to control challenge selection
const maxPrevious = 2; // Number of previous challenges to remember
const maxOccurrences = 3; // Maximum number of times a challenge can occur in a season

// Function to interpret performance scores and provide descriptions
function describePerformance(queen) {
    let description;
    if (queen.performanceScore > 15) {
      description = 'slayed the challenge';
    } else if (queen.performanceScore > 10) {
      description = 'did good';
    } else if (queen.performanceScore > 5) {
      description = 'had an okay performance';
    } else {
      description = 'struggled in this challenge';
    }
    return `${queen.name} ${description}.`;
  }

  
  // Define a function to get the personalized message based on the challenge and placement
  function getPersonalizedMessage(queen, challenge, placement) {
    // Log the challenge name and placement to debug
    const challengePlacementMessages = {
      'Acting': {
        'WIN': "Tonight, you turned the stage into a scene-stealing spectacle. Condragulations, you're the winner of this weeks challenge!",
        'HIGH': "Your performance was a tour de force, leaving us all begging for an encore!",
        'SAFE': "You played your part well; now it's time to aim for a standing ovation.",
        'LOW': "The critics have their eyes on you, and they are not impressed. It's time to elevate your performance from forgettable to unforgettable, or it's curtains for you.",
        'BTM2': "This is it, the final showdown. It's do or die, and only a performance filled with raw emotion and undeniable passion will save you from the brink of obscurity."
      },
      'Improv': {
        'WIN': "You improvised your way to the top with wit as sharp as your contour. Condragulations, you're the winner of this weeks challenge!",
        'HIGH': "You riffed and bantered with the best of them, proving your quick wit is no joke.",
        'SAFE': "You stayed in the scene, but next time, steal it!",
        'LOW': "Your improv was a disaster, one misstep away from a comedic catastrophe. It's time to sharpen your wit or face the final curtain!",
        'BTM2': "This is your final act, no more chances to hide behind the laughs. Deliver a performance that will etch your name in the annals of improv history or be forgotten!"
      },
      'Dance': {
        'WIN': "Your rhythm captivated us all, and your moves told a story that left us spellbound. Condragulations, you're the winner of this weeks challenge!",
        'HIGH': "You moved with grace and power, proving that the dance floor is your domain.",
        'SAFE': "You kept up with the beat, but next time, let's see you lead the dance!",
        'LOW': "Your dance was a stumble in the dark, a misstep on the grand stage. Rise to the occasion and dance with the abandon of a true prima ballerina, or bow out gracefully!",
        'BTM2': "The spotlight dims, the music fades, this is your ultimate performance. Dance with the fury of a tempest or vanish into the shadows of mediocrity!"
      },
      'Design': {
        'WIN': "Tonight, your innovative design transformed the runway into a visionary spectacle. Condragulations, you're the winner of this weeks challenge!",
        'HIGH': "Your design skills are sharp, stitching together a look that's high on style.",
        'SAFE': "Your outfit hit the mark, but to win, you need to thread the needle of innovation.",
        'LOW': "Your design was on the verge of unraveling, a thread away from a fashion faux pas. It's time to stitch together a masterpiece or be clipped from the competition!",
        'BTM2': "The runway is unforgiving, and your design hangs by a thread. Weave your vision into reality with unyielding resolve or be cut from the final pattern!"
      },
      'Rusical': {
        'WIN': "You sang, you danced, you conquered! Your performance was a show-stopping Rusical masterpiece. Condragulations, you're the winner of this weeks challenge!",
        'HIGH': "Your Rusical number hit all the right notes, leaving us wanting an encore.",
        'SAFE': "You blended into the chorus well, but next time, take center stage!",
        'LOW': "Your performance was off-key, a cacophony in a symphony. It's time to harmonize your talents or face the music of elimination.",
        'BTM2': "The final note is yet to be sung. Deliver a Rusical revival that will echo through the halls of drag history or fade into silence!"
      },
      'Makeover': {
        'WIN': "Your makeover magic has us all bewitched. Condragulations, you're the winner of this weeks challenge!",
        'HIGH': "You've painted a picture of beauty on your canvas, showcasing your artistry.",
        'SAFE': "Your makeover was solid, but to stand out, you need to brush up on boldness.",
        'LOW': "Your transformation lacked the magic touch. Next time, unleash your creativity or disappear into the background!",
        'BTM2': "This is your moment for a makeover miracle. Reveal the true power of transformation or be brushed aside!"
      },
      'Branding': {
        'WIN': "Your brand is bold, brilliant, and unmistakably you. Condragulations, you're the winner of this weeks challenge!",
        'HIGH': "You've marketed yourself masterfully, leaving a lasting impression.",
        'SAFE': "Your brand is steady, but to soar, you need to stamp it with your unique flair.",
        'LOW': "Your branding was forgettable, lost in a sea of mediocrity. Ignite the spark or be extinguished!",
        'BTM2': "It's now or never. Rebrand with a vengeance or become a footnote in the annals of branding failures."
      },
      'Comedy': {
        'WIN': "Your comedic timing was impeccable, leaving the audience in stitches. Condragulations, you're the winner of this weeks challenge!",
        'HIGH': "You had us laughing from start to finish. Your humor is a breath of fresh hilarity!",
        'SAFE': "You delivered some chuckles, but we're craving a full-on belly laugh next time!",
        'LOW': "Your jokes missed the mark, and the silence was deafening. It's time to bring the funny or face the final curtain call.",
        'BTM2': "This is no laughing matter. It's your last shot to prove that comedy is your calling. Make us roar with laughter or it's lights out!"
      },
      'Snatch': {
        'WIN': "You snatched the crown with your uncanny impersonation. Condragulations, you're the winner of this weeks challenge!",
        'HIGH': "Your impersonation was so spot-on, we had to do a double-take!",
        'SAFE': "You held character well, but next time, snatch us up with your charisma.",
        'LOW': "Your portrayal was barely passable, teetering on the edge of obscurity. To prevail, you must embody the persona or risk vanishing into the shadows.",
        'BTM2': "The spotlight's glare is unforgiving. Snatch victory from the jaws of defeat or be eclipsed by the true stars."
      },
      'Girl Group': {
        'WIN': "You're the superstar of the stage! Your performance was harmonious perfection, you're the winner week's challenge!",
        'TOP2': "Your verse and song was so catchy that we can't get it out of our heads! You are the top 2 queen of the week",
        'HIGH': "Your vocals and moves were almost flawless, and you stood out in your group. You're just a step away from the spotlight!",
        'SAFE': "You blended well with the band, but to lead the charts, you'll need to crank up the volume on your star power.",
        'LOW': "You hit a few off notes and your dance moves were out of sync. To avoid the bottom, you need to fine-tune your performance.",
        'BTM2': "Your performance was out of harmony, and you faded into the background. It's time to amp it up or face the final curtain call."
      }
    };
  // Concatenate the queen's name with the personalized message
  return `${queen.name}. ` + (challengePlacementMessages[challenge.name][placement] || "keep shining!");
}

// Define a host object with methods for announcements and conduct
const host = {
    announceChallenge(challenge) {
  // Get the elements for challenge announcement and description
  const challengeAnnouncement = document.getElementById('challengeAnnouncement');
  const challengeDescription = document.getElementById('challengeDescription');

  // Set the text for the challenge announcement and description
  challengeAnnouncement.innerHTML = `Welcome to a new episode of Rupauls Drag Race! This week's main challenge is: <strong>${challenge.name.toUpperCase()}</strong>`;
  challengeDescription.innerText = challenge.description;

  // Apply styles to center the text and add spacing and border radius
  [challengeAnnouncement, challengeDescription].forEach(element => {
    element.style.textAlign = 'center'; // Center the text
    element.style.marginBottom = '1em'; // Add space between the elements
    element.style.borderRadius = '20px'; // Set the border radius
  });

  // If you want to add additional space only between the announcement and description
  challengeAnnouncement.style.marginBottom = '2em'; // Increase space after the announcement
},
  // Updated announcePerformances method
  announcePerformances(queens, episode, isDoublePremiere, groupOne, groupTwo) {
    const performancesList = document.getElementById('performancesList');
    performancesList.innerHTML = ''; // Limpia las performances existentes
  
    let queensToDisplay;
    if (isDoublePremiere) {
      queensToDisplay = episode === 1 ? groupOne : groupTwo;
    } else {
      queensToDisplay = queens;
    }
  
    // Verifica que queensToDisplay no sea undefined antes de continuar
    if (!queensToDisplay) {
      console.error('Error: queensToDisplay es undefined. Verifica las variables groupOne y groupTwo.');
      return; // Salir de la función si queensToDisplay es undefined
    }
  
    queensToDisplay.forEach(queen => {
      // Create a list item for each performance
      const listItem = document.createElement('li');
      listItem.style.display = 'flex'; // Use flexbox to align items side by side
      listItem.style.alignItems = 'center'; // Center items vertically
      listItem.style.backgroundColor = 'white';
      listItem.style.color = '#333';
      listItem.style.padding = '1em';
      listItem.style.marginBottom = '1em';
      listItem.style.border = '1px solid #ddd';
      listItem.style.borderRadius = '20px';
      listItem.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
  
      // Create an image element for the queen
      const queenImage = document.createElement('img');
      queenImage.src = queen.image; // Set the source of the image
      queenImage.alt = `Image of ${queen.name}`; // Set the alt text
      queenImage.style.width = '100px'; // Set a fixed width for the image
      queenImage.style.height = 'auto'; // Maintain the aspect ratio
      queenImage.style.marginRight = '1em'; // Add space between the image and the description
  
      // Add the image to the list item
      listItem.appendChild(queenImage);
  
      // Create a span element for the performance description
      const performanceDescription = document.createElement('span');
      performanceDescription.innerText = describePerformance(queen); // Use the describePerformance function
  
      // Add the description to the list item
      listItem.appendChild(performanceDescription);
  
      // Append the list item to the list
      performancesList.appendChild(listItem);
    });
  },
// Updated announcePlacements method with challenge-specific messages for each placement
announcePlacements(queens, episode, isDoublePremiere, groupOne, groupTwo) {
  const placementsList = document.getElementById('placementsList');
  placementsList.innerHTML = ''; // Limpia los placements existentes

  let queensToDisplay;
  if (isDoublePremiere && (episode === 1 || episode === 2)) {
    queensToDisplay = episode === 1 ? groupOne : groupTwo;
  } else {
    queensToDisplay = queens.filter(queen => queen.isActive);
  }

  // Verifica que queensToDisplay no sea undefined antes de continuar
  if (!queensToDisplay) {
    console.error('Error: queensToDisplay es undefined. Verifica las variables groupOne y groupTwo.');
    return; // Salir de la función si queensToDisplay es undefined
  }

  // Ordena las reinas activas por su puntuación de actuación
  queensToDisplay.sort((a, b) => b.performanceScore - a.performanceScore);

  // Asigna 'WIN', 'TOP2' y 'SAFE' a las reinas activas si es doble premiere
  if (isDoublePremiere && (episode === 1 || episode === 2)) {
    queensToDisplay[0].currentPlacement = 'WIN';
    if (queensToDisplay.length > 1) {
      queensToDisplay[1].currentPlacement = 'TOP2';
    }
    for (let i = 2; i < queensToDisplay.length; i++) {
      queensToDisplay[i].currentPlacement = 'SAFE';
    }
  } else {
    activeQueens = queens.filter(queen => queen.isActive);
    // Custom sort function to order queens by placement
    activeQueens.sort((a, b) => {
      const placementOrder = ['HIGH', 'WIN', 'SAFE', 'LOW', 'BTM2'];
      return placementOrder.indexOf(a.currentPlacement) - placementOrder.indexOf(b.currentPlacement);
    });
    
  }

  queensToDisplay.forEach(queen => {
    // Crea un elemento de lista para cada colocación de la reina
    const listItem = document.createElement('li');
    listItem.style.display = 'flex'; // Use flexbox to align items side by side
    listItem.style.alignItems = 'center'; // Center items vertically
    listItem.style.padding = '1em';
    listItem.style.marginBottom = '1em';
    listItem.style.border = '1px solid #ddd';
    listItem.style.borderRadius = '20px';
    listItem.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';

    // Create an image element for the queen
    const queenImage = document.createElement('img');
    queenImage.src = queen.image; // Set the source of the image
    queenImage.alt = `Image of ${queen.name}`; // Set the alt text
    queenImage.style.width = '100px'; // Set a fixed width for the image
    queenImage.style.height = 'auto'; // Maintain the aspect ratio
    queenImage.style.marginRight = '1em'; // Add space between the image and the placement message

    // Add the image to the list item
    listItem.appendChild(queenImage);

    // Create a span element for the placement message
    const placementMessage = document.createElement('span');
    placementMessage.innerText = getPersonalizedMessage(queen, currentChallenge, queen.currentPlacement);

    // Add the placement message to the list item
    listItem.appendChild(placementMessage);

    // Apply styles based on the placement
    switch (queen.currentPlacement) {
      case 'WIN':
        listItem.style.backgroundColor = 'royalblue';
        listItem.style.color = 'white';
        listItem.style.fontWeight = 'bold';
        break;
      case 'TOP2':
        listItem.style.backgroundColor = 'yellow';
        listItem.style.color = 'black';
        listItem.style.fontWeight = 'bold';
        break;
      case 'SAFE':
        listItem.style.backgroundColor = 'cornsilk';
        listItem.style.color = 'black';
        break;
      case 'HIGH':
        listItem.style.backgroundColor = 'lightblue';
        listItem.style.color = 'black';
        break;
      case 'LOW':
        listItem.style.backgroundColor = 'lightpink';
        listItem.style.color = 'black';
        break;
      case 'BTM2':
        listItem.style.backgroundColor = 'tomato';
        listItem.style.color = 'black';
        listItem.style.fontWeight = 'bold';
        break;
      // Add more cases here for other placements if needed
    }

    // Append the list item to the list
    placementsList.appendChild(listItem);
  });
  console.log('Placements anunciados en pantalla.');
  document.getElementById('placementsScreen').style.display = 'block';
},


// Method to announce the lipsync results
announceLipsyncResults(winner, eliminatedQueen, doubleShantay = false) {
  const lipsyncResultsList = document.getElementById('lipsyncResultsList');
  lipsyncResultsList.innerHTML = ''; // Clear the stage for the lipsync battle

  // Function to create a list item with an image
  function createLipsyncListItem(queen, message, backgroundColor) {
    const listItem = document.createElement('li');
    listItem.style.display = 'flex'; // Use flexbox to align items side by side
    listItem.style.alignItems = 'center'; // Center items vertically
    listItem.style.backgroundColor = backgroundColor;
    listItem.style.color = '#333';
    listItem.style.padding = '1em';
    listItem.style.marginBottom = '4em';
    listItem.style.border = '1px solid #ddd';
    listItem.style.borderRadius = '20px';
    listItem.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
  
    // Create an image element for the queen
    const queenImage = document.createElement('img');
    queenImage.src = queen.image; // Set the source of the image
    queenImage.alt = `Image of ${queen.name}`; // Set the alt text
    queenImage.style.width = '100px'; // Set a fixed width for the image
    queenImage.style.height = 'auto'; // Maintain the aspect ratio
    queenImage.style.marginRight = '1em'; // Add space between the image and the message
  
    // Add the image to the list item
    listItem.appendChild(queenImage);
  
    // Create a span element for the bold message
    const queenMessage = document.createElement('span');
    queenMessage.innerHTML = `<strong>${message}</strong>`; // Make the message bold
  
    // Add the message to the list item
    listItem.appendChild(queenMessage);
  
    return listItem;
  }

// Si es un doble shantay, anuncia que ambas reinas se quedan
if (doubleShantay) {
  // Crea un anuncio para cada reina
  const queen1Announcement = createLipsyncListItem(winner, 'Shantay, you BOTH stay!', 'hotpink');
  const queen2Announcement = createLipsyncListItem(eliminatedQueen, 'Shantay, you BOTH stay!', 'hotpink');
  
  // Añade los anuncios a la lista de resultados
  lipsyncResultsList.appendChild(queen1Announcement);
  lipsyncResultsList.appendChild(queen2Announcement);
} else {
    // Anuncia la ganadora con elogios
    const winnerAnnouncement = createLipsyncListItem(winner, `${winner.name}, shantay you stay!`, 'lightgreen');
    lipsyncResultsList.appendChild(winnerAnnouncement);

    // Anuncia a la reina eliminada con una despedida sincera
    const eliminatedAnnouncement = createLipsyncListItem(eliminatedQueen, `${eliminatedQueen.name}, sashay away.`, 'lightcoral');
    lipsyncResultsList.appendChild(eliminatedAnnouncement);
  }
},
// Method to announce the finale results
announceFinaleResults(topThree, eliminatedQueen, winner) {
  const finaleResultsList = document.getElementById('finaleResultsList');
  finaleResultsList.innerHTML = ''; // Clear the stage for the grand finale

  // Announce the eliminated queen with a respectful nod to her journey
  const eliminatedAnnouncement = document.createElement('li');
  eliminatedAnnouncement.innerText = `${eliminatedQueen.name}, your journey has been nothing short of extraordinary. But tonight, the curtains close on your story. Sashay away, but never forget the hearts you've touched.`;
  eliminatedAnnouncement.style.backgroundColor = 'lightcoral'; // Set the background color to light coral
  finaleResultsList.appendChild(eliminatedAnnouncement);

  // Build suspense before announcing the winner
  const suspense = document.createElement('li');
  suspense.innerText = 'The air is thick with anticipation... The final moment has arrived.';
  suspense.style.fontWeight = 'bold'; // Make the text bold for emphasis
  finaleResultsList.appendChild(suspense);

  // Announce the top three with admiration
  topThree.forEach(queen => {
    if (queen.name !== winner.name) {
      const topThreeAnnouncement = document.createElement('li');
      topThreeAnnouncement.innerText = `${queen.name}, you are a star that shines bright in the drag universe. Condragulations on making it to the top three!`;
      topThreeAnnouncement.style.backgroundColor = 'lightblue'; // Set the background color to light blue
      finaleResultsList.appendChild(topThreeAnnouncement);
    }
  });

  // Announce the season winner with grandeur
  const winnerAnnouncement = document.createElement('li');
  winnerAnnouncement.innerText = `And now, the moment we've all been waiting for. ${winner.name}, you have risen above and beyond, dazzling us all with your charisma, uniqueness, nerve, and talent. Shantay, you stay... as the crowned champion of the season!`;
  winnerAnnouncement.style.backgroundColor = 'gold'; // Set the background color to gold
  finaleResultsList.appendChild(winnerAnnouncement);
},
  };

// Define the different states of the simulation
const states = {
    NEW_EPISODE: 'new_episode',
    DISPLAY_CAST: 'display_cast',
    ANNOUNCE_CHALLENGE: 'announce_challenge',
    PERFORMANCES: 'performances',
    PLACEMENTS: 'placements',
    LIPSYNC: 'lipsync',
    FINALE: 'finale'
  };
  
// Initialize the current state
let currentState = states.NEW_EPISODE;

// Function to get active queens for the episode
function getActiveQueens(cast) {
  const activeQueens = cast.filter(queen => queen.isActive);
  return activeQueens;
}

let lipsyncResult; // Declare lipsyncResult at a higher scope
function handleContinue() {
  // Hide all screens before showing the next one
  function hideAllScreens() {
    document.getElementById('castScreen').style.display = 'none';
    document.getElementById('challengeScreen').style.display = 'none';
    document.getElementById('performancesScreen').style.display = 'none';
    document.getElementById('placementsScreen').style.display = 'none';
    document.getElementById('lipsyncResultsScreen').style.display = 'none';
    // ... hide other screens ...
    }
    console.log('Estado actual antes del switch:', currentState);
    switch (currentState) {
      case states.NEW_EPISODE:
        handleNewEpisode(); // Call handleNewEpisode to set up the first episode
        break;
      case states.DISPLAY_CAST:
        hideAllScreens();
        displayCast(queensInEpisode, episode);
        document.getElementById('castScreen').style.display = 'block';
        currentState = states.ANNOUNCE_CHALLENGE;
        break;
        case states.ANNOUNCE_CHALLENGE:
          hideAllScreens();
          // Check if it's a double premiere and if the episode is 1 or 2
          if (isDoublePremiere && (episode === 1 || episode === 2)) {
            // Set the current challenge to "Girl Group"
            currentChallenge = challenges.find(challenge => challenge.name === 'Girl Group');
          }
          host.announceChallenge(currentChallenge);
          document.getElementById('challengeScreen').style.display = 'block';
          currentState = states.PERFORMANCES;
          break;
        case states.PERFORMANCES:
          hideAllScreens();
          simulateChallenge(queensInEpisode, currentChallenge, episode); // Simula aquí
          host.announcePerformances(queensInEpisode, episode, isDoublePremiere, groupOne, groupTwo);
          document.getElementById('performancesScreen').style.display = 'block';
          currentState = states.PLACEMENTS;
          break;
          case states.PLACEMENTS:
            hideAllScreens();
            if (isDoublePremiere && (episode === 1 || episode === 2)) {
              // Maneja los placements para la doble premiere sin simular nuevamente
              handleDoublePremierePlacements(queensInEpisode, episode, groupOne, groupTwo, true); // Añade un parámetro para evitar la simulación
              // Asegúrate de llamar a announcePlacements y mostrar la pantalla de placements para doble premiere
              host.announcePlacements(queensInEpisode, episode, isDoublePremiere, groupOne, groupTwo);
              document.getElementById('placementsScreen').style.display = 'block';
            } else {    
              determinePlacements(queensInEpisode); // Asegúrate de que esta función no llame a simulateChallenge
              host.announcePlacements(queensInEpisode, episode, isDoublePremiere, groupOne, groupTwo);
              document.getElementById('placementsScreen').style.display = 'block';
            }
        currentState = states.LIPSYNC;
        break;
        case states.LIPSYNC:
          hideAllScreens();
          // Combina la lógica de lipsyncAndElimination aquí
          lipsyncResult = lipsyncAndElimination(queensInEpisode); // Asigna el resultado a lipsyncResult
          if (lipsyncResult) {
            if (lipsyncResult.doubleShantay) {
              // Anuncia un doble shantay
              host.announceLipsyncResults(lipsyncResult.queens[0], lipsyncResult.queens[1], true);
            } else if (lipsyncResult.winner && lipsyncResult.eliminatedQueen) {
              // Anuncia los resultados del lipsync normal
              host.announceLipsyncResults(lipsyncResult.winner, lipsyncResult.eliminatedQueen);
            }
            updateTrackRecord(cast, episode); // Actualiza la tabla de track record aquí
            displayCast(queensInEpisode, episode); // Muestra el elenco con comentarios actualizados
          } else {
            console.log('No lipsync battle occurred.');
          }
          document.getElementById('lipsyncResultsScreen').style.display = 'block';
        
          // Verifica si es hora de la final o si deberíamos comenzar un nuevo episodio
          const updatedActiveQueens = getActiveQueens(cast);
        
          if (updatedActiveQueens.length === 4) {
            currentState = states.FINALE;
            handleFinale(cast); // Pasa el array de cast a handleFinale
          } else {
            console.log('Starting Episode ' + episode);
            episode++; // Incrementa el número del episodio para el próximo episodio
            handleNewEpisode(); // Llama a handleNewEpisode para comenzar un nuevo episodio
          }
          break;
        default:
          console.log('Unhandled state:', currentState);
        }
        console.log('Estado actual después del switch:', currentState);
  }
  
// Function to start the simulation
function simulateSeason() {
  // Pregunta al usuario si quiere una doble premiere al inicio de la temporada
  let userChoice = confirm('Double Premiere');
  setupDoublePremiere(userChoice);

  // Continúa con la simulación
  handleContinue();
}

// Add event listener to the continue button
document.getElementById('continueButton').addEventListener('click', handleContinue);

// Function to display the track record table on the webpage
function sortQueensByPlacement(queens) {
    // Define the order of special placements
    const specialPlacementOrder = ['WINNER', 'RUNNER UP', 'ELIMINATED'];
  
    // Sort queens by their track record
    queens.sort((a, b) => {
      // Check if both queens have special placements
      const aSpecial = specialPlacementOrder.includes(a.trackRecord[a.trackRecord.length - 1]);
      const bSpecial = specialPlacementOrder.includes(b.trackRecord[b.trackRecord.length - 1]);
  
      // If both queens have special placements, sort by the special placement order
      if (aSpecial && bSpecial) {
        return specialPlacementOrder.indexOf(a.trackRecord[a.trackRecord.length - 1]) - specialPlacementOrder.indexOf(b.trackRecord[b.trackRecord.length - 1]);
      }
  
      // If only one queen has a special placement, place her above the other
      if (aSpecial) return -1;
      if (bSpecial) return 1;
  
      // Existing sorting logic for queens without special placements
      // Check if both queens are eliminated
      const aEliminated = a.trackRecord.includes('ELIM');
      const bEliminated = b.trackRecord.includes('ELIM');
  
      // If both queens are eliminated, sort by the episode they were eliminated in (ascending order)
      if (aEliminated && bEliminated) {
        return b.trackRecord.length - a.trackRecord.length;
      }
  
      // If only one queen is eliminated, place her at the bottom
      if (aEliminated) return 1;
      if (bEliminated) return -1;
  
      // If neither queen is eliminated, sort by their last placement
      const placementOrder = ['WIN', 'HIGH', 'SAFE', 'LOW', 'BTM2'];
      const aLastPlacement = placementOrder.indexOf(a.trackRecord.slice().reverse().find(p => p !== 'ELIM'));
      const bLastPlacement = placementOrder.indexOf(b.trackRecord.slice().reverse().find(p => p !== 'ELIM'));
      return aLastPlacement - bLastPlacement;
    });
  
    // Return the sorted array
    return queens;
  }

  function updateTrackRecord(cast, episode) {
    // Sort the queens by their placements
    let sortedQueens = sortQueensByPlacement([...cast]);
  
    // Check if the track record container already exists
    let trackRecordContainer = document.getElementById('trackRecordContainer');
    if (!trackRecordContainer) {
      // Create a container for the track record if it doesn't exist
      trackRecordContainer = document.createElement('div');
      trackRecordContainer.id = 'trackRecordContainer';
      document.body.appendChild(trackRecordContainer); // Append the container to the body or another element
    } else {
      // Clear the existing content of the track record container
      trackRecordContainer.innerHTML = '';
    }
  
    // Create a heading for the track record
    let heading = document.createElement('h2');
    heading.textContent = `Track Record after Episode ${episode}:`;
    trackRecordContainer.appendChild(heading);
  
    // Check if the table already exists
    let table = document.getElementById('trackRecordTable');
    if (!table) {
      // Create a table to display each queen's track record if it doesn't exist
      table = document.createElement('table');
      table.id = 'trackRecordTable';
      table.classList.add('wikitable');
      trackRecordContainer.appendChild(table); // Append the table to the track record container
  
      // Create the header row
      let headerRow = document.createElement('tr');
      table.appendChild(headerRow);
  
      // Clear the existing headers
      while (headerRow.firstChild) {
        headerRow.removeChild(headerRow.firstChild);
      }
  
      // Add the 'Queen' header
      let nameHeader = document.createElement('th');
      nameHeader.textContent = 'Queen';
      headerRow.appendChild(nameHeader);
  
      // Determine the number of episodes
      let numEpisodes = episode === 'Finale' ? sortedQueens[0].trackRecord.length : episode;
  
      // Add episode headers up to the current episode
      for (let i = 1; i <= numEpisodes; i++) {
        let episodeHeader = document.createElement('th');
        episodeHeader.textContent = `Ep ${i}`;
        headerRow.appendChild(episodeHeader);
      }
    } else {
      // Clear the existing rows except for the header
      while (table.rows.length > 1) {
        table.deleteRow(1);
      }
    }
  
    // Add rows for each queen with their placements and styles
    sortedQueens.forEach(queen => {
      let queenRow = document.createElement('tr');
      table.appendChild(queenRow);
  
      // Add the queen's name and image
      let queenNameCell = document.createElement('td');
      let queenImage = document.createElement('img');
      queenImage.src = queen.image; // Set the source of the image
      queenImage.alt = `Image of ${queen.name}`; // Set the alt text
      queenImage.style.width = '50px'; // Set a fixed width for the image
      queenImage.style.height = 'auto'; // Maintain the aspect ratio
      queenImage.style.marginRight = '10px'; // Add space between the image and the name
  
      queenNameCell.appendChild(queenImage);
      let queenNameText = document.createTextNode(queen.name);
      queenNameCell.appendChild(queenNameText);
      queenRow.appendChild(queenNameCell);
  
      // Add cells for each episode's placement with styles
      queen.trackRecord.forEach((placement, index) => {
        // Only add cells up to the current episode
        if (index < episode || episode === 'Finale') {
          let placementCell = document.createElement('td');
          if (placement === null) {
            // Si el placement es null, aplica un fondo gris para representar un espacio vacío
            placementCell.style.backgroundColor = 'lightgray';
          } else {
            placementCell.textContent = placement;
            // Apply colors and styles based on the placement
            switch (placement) {
              case 'WIN':
                placementCell.style.backgroundColor = 'royalblue';
                placementCell.style.color = 'white';
                placementCell.style.fontWeight = 'bold';
                break;
              case 'HIGH':
                placementCell.style.backgroundColor = 'lightblue';
                break;
              case 'SAFE':
                placementCell.style.backgroundColor = 'white';
                break;
              case 'LOW':
                placementCell.style.backgroundColor = 'lightpink';
                break;
              case 'TOP2':
                placementCell.style.backgroundColor = 'yellow';
                placementCell.style.fontWeight = 'bold';
                break;
              case 'BTM2':
                placementCell.style.backgroundColor = 'tomato';
                placementCell.style.color = 'black';
                break;
              case 'ELIM':
                placementCell.style.backgroundColor = 'red';
                placementCell.style.color = 'black';
                placementCell.style.fontWeight = 'bold';
                break;
              case 'WINNER':
                placementCell.style.backgroundColor = '#D4AF37'; // Gold color for the winner
                placementCell.style.color = 'black';
                placementCell.style.fontWeight = 'bold';
                break;
              case 'ELIMINATED':
                placementCell.style.backgroundColor = 'sienna'; // Sienna color for the eliminated queen
                placementCell.style.color = 'white';
                placementCell.style.fontWeight = 'bold';
                break;
              case 'RUNNER UP':
                placementCell.style.backgroundColor = 'silver'; // Silver color for the runner up
                placementCell.style.color = 'black';
                placementCell.style.fontWeight = 'bold';
                break;
              default:
                placementCell.style.backgroundColor = 'white'; // Default background for unexpected values
            }
          }
          queenRow.appendChild(placementCell);
        }
      });
    });
  }

  function handleFinale(cast) {
    // Filter out only active queens
    let activeQueens = cast.filter(queen => queen.isActive);
  
    // Sort the top 4 active queens by their favoritism points to determine the lowest
    activeQueens.sort((a, b) => a.favoritismPoints - b.favoritismPoints);
  
    // The queen with the lowest favoritism points is cut before the final lipsync
    let eliminatedQueen = activeQueens[0]; // The first queen after sorting has the lowest favoritism points
    eliminatedQueen.trackRecord.push('ELIMINATED');
    eliminatedQueen.isActive = false; // Mark the queen as inactive
  
    // Remove the eliminated queen from the active queens array
    activeQueens.shift();
  
    // Simulate the final performances for the remaining top 3 active queens
    activeQueens.forEach(queen => {
      queen.finalPerformanceScore = calculatePerformance(queen, 'lipsync');
    });
  
    // Combine favoritism points and final performance scores to determine the winner
    activeQueens.forEach(queen => {
      queen.totalScore = queen.finalPerformanceScore + queen.favoritismPoints;
    });
  
    // Sort the remaining queens by their total scores
    activeQueens.sort((a, b) => b.totalScore - a.totalScore);
  
    // The queen with the highest total score wins the season
    let winner = activeQueens[0];
    winner.trackRecord.push('WINNER');
  
    // Assign 'RUNNER UP' status to the other 2 finalists
    for (let i = 1; i < activeQueens.length; i++) {
      activeQueens[i].trackRecord.push('RUNNER UP');
    }
  
    // Display the final track record table for the entire cast
    updateTrackRecord(cast, 'Finale');
  
    // Disable the 'continue' button
    document.getElementById('continueButton').disabled = true;
  }

  // Function to update the global cast variable
function selectCast(season) {
  switch(season) {
    case 'Season 1':
      cast = castSeason1.map(queen => ({ ...queen, isActive: true }));
      break;
    case 'Season 2':
      cast = castSeason2.map(queen => ({ ...queen, isActive: true }));
      break;
    case 'Season 3':
      cast = us_season13.map(queen => ({ ...queen, isActive: true }));  
    // ... more cases for additional seasons ...
    default:
      console.error('Invalid season selection');
  }
  // Hide the cast selection screen
  document.getElementById('castSelectionScreen').style.display = 'none';

  // Start the simulation with the selected cast
  simulateSeason(cast);
}

// Function to create the cast selection screen
function createCastSelectionScreen() {
  let selectionScreen = document.createElement('div');
  // Append the selection screen to the document body or a specific container
  document.body.appendChild(selectionScreen);
}

// Call this function when the page loads or when you want to display the cast selection
createCastSelectionScreen();

// Función para configurar la doble premiere al inicio de la temporada
function setupDoublePremiere(userChoice) {
  isDoublePremiere = userChoice;
  if (isDoublePremiere) {
    // Divide el cast en dos grupos para los episodios 1 y 2
    divideCastForDoublePremiere();
  }
}
// Función para dividir el cast en dos grupos
function divideCastForDoublePremiere() {
  let halfIndex = Math.ceil(cast.length / 2);
  groupOne = cast.slice(0, halfIndex);
  groupTwo = cast.slice(halfIndex);
  // Asegúrate de asignar el grupo correcto a queensInEpisode según el episodio
  queensInEpisode = episode === 1 ? groupOne : groupTwo;
}

// Función para manejar los placements durante la doble premiere
function handleDoublePremierePlacements(queensInEpisode, episode, groupOne, groupTwo, alreadySimulated = false) {
  let activeQueens = queensInEpisode.filter(queen => {
    let group = episode === 1 ? groupOne : groupTwo;
    return group.includes(queen);
  });

  // Solo simula si no se ha hecho previamente
  if (!alreadySimulated) {
    simulateChallenge(activeQueens, currentChallenge, episode);
  }

  // Ordena las reinas activas por su puntuación de actuación
  activeQueens.sort((a, b) => b.performanceScore - a.performanceScore);

  // Asigna 'WIN' y 'TOP2' a las dos mejores reinas activas
  activeQueens[0].currentPlacement = 'WIN';
  activeQueens[0].favoritismPoints += 5; // Agrega 5 puntos de favoritismo a la reina ganadora
  if (activeQueens.length > 1) {
    activeQueens[1].currentPlacement = 'TOP2';
    activeQueens[1].favoritismPoints += 4; // Agrega 4 puntos de favoritismo a la reina en el TOP2
  }

  // El resto de las reinas activas quedan 'SAFE' y no reciben puntos de favoritismo
  for (let i = 2; i < activeQueens.length; i++) {
    activeQueens[i].currentPlacement = 'SAFE';
  }

  // Actualiza el track record solo para las queens activas
  updateTrackRecordForDoublePremiere(queensInEpisode, episode, groupOne, groupTwo);
}

// Función para actualizar el track record durante la doble premiere
function updateTrackRecordForDoublePremiere(queens, episode, groupOne, groupTwo) {
  console.log('Actualizando track record para la doble premiere, episodio:', episode);
  // Determina qué grupo de queens está activo para el episodio actual
  let activeGroup = episode === 1 ? groupOne : groupTwo;
  console.log('Grupo activo para el episodio ' + episode + ':', activeGroup.map(q => q.name));
  // Asegúrate de que el track record tenga la longitud correcta para cada queen
  queens.forEach(queen => {
    while (queen.trackRecord.length < episode) {
      queen.trackRecord.push(null); // Usa null para representar un espacio vacío con color gris
    }
    // Actualiza el track record solo si la queen está en el grupo activo
    if (activeGroup.includes(queen)) {
      queen.trackRecord[episode - 1] = queen.currentPlacement;
    }
  });

  // Verifica el track record después de la actualización
  queens.forEach(queen => {
    console.log(queen.name + ' track record:', queen.trackRecord);
  });
}