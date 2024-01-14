// Initialize the episode number
// Define a global variable for the episode number
let episode = 1;
class Queen {
  constructor(name, acting, improv, comedy, dance, design, rusical, makeover, branding, lipsync, image) {
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


// Now, when you create a new Queen, you can specify their image like so:
let primarina = new Queen('Primarina', 8, 7, 10, 10, 11, 12, 12, 8, 9, 'https://img.pokemondb.net/sprites/sword-shield/normal/primarina.png');
let gardevoir = new Queen('Gardevoir', 7, 13, 13, 10, 13, 11, 13, 13, 13, 'https://img.pokemondb.net/sprites/sword-shield/normal/gardevoir.png');
let lopunny = new Queen('Lopunny', 10, 8, 9, 16, 8, 14, 10, 10, 15, 'https://img.pokemondb.net/sprites/sword-shield/normal/lopunny.png');
let milotic = new Queen('Milotic', 11, 11, 10, 7, 15, 10, 15, 7, 12, 'https://img.pokemondb.net/sprites/sword-shield/normal/milotic.png');
let mismagius = new Queen('Mismagius', 9, 12, 11, 14, 9, 7, 11, 12, 11, 'https://img.pokemondb.net/sprites/black-white/normal/mismagius.png');
let jynx = new Queen('Jynx', 6, 7, 7, 8, 7, 7, 5, 5, 11, 'https://img.pokemondb.net/sprites/sword-shield/normal/jynx.png');
let lapras = new Queen('Lapras', 10, 10, 10, 4, 8, 14, 9, 6, 10, 'https://img.pokemondb.net/sprites/sword-shield/normal/lapras.png');
let blissey = new Queen('Blissey', 13, 15, 14, 9, 6, 11, 6, 11, 9, 'https://img.pokemondb.net/sprites/sword-shield/normal/blissey.png');
let hatterene = new Queen('Hatterene', 11, 11, 8, 8, 10, 14, 8, 15, 13, 'https://img.pokemondb.net/sprites/sword-shield/normal/hatterene.png');
let vespiqueen = new Queen('Vespiqueen', 15, 11, 9, 9, 11, 13, 13, 6, 7, 'https://img.pokemondb.net/sprites/sword-shield/normal/vespiquen.png');
let salazzle = new Queen('Salazzle', 4, 6, 9, 10, 10, 10, 10, 6, 7, 'https://img.pokemondb.net/sprites/sword-shield/normal/salazzle.png');
let mawile = new Queen('Mawile', 7, 8, 9, 9, 11, 13, 13, 8, 8, 'https://img.pokemondb.net/sprites/sword-shield/normal/mawile.png');
let gothitelle = new Queen('Ghotitelle', 12, 12, 6, 9, 7, 7, 10, 6, 7, 'https://img.pokemondb.net/sprites/sword-shield/normal/gothitelle.png');
let mrmime = new Queen('Mr. Mime', 15, 10, 8, 3, 9, 14, 10, 11, 10, 'https://img.pokemondb.net/sprites/sword-shield/normal/mr-mime.png');


let cast = [primarina, gardevoir, lopunny, milotic, mismagius, jynx, lapras, blissey, hatterene, vespiqueen, salazzle, mawile, gothitelle, mrmime].map(queen => ({ ...queen, isActive: true }));

// Function to determine which queens are in the current episode
function getQueensInEpisode(allQueens) {
    // For simplicity, let's assume all active queens participate in each episode
    return allQueens.filter(queen => queen.isActive);
  }
  function displayCast(cast) {
    console.log('displayCast function called'); // Log when the function is called
  
    // Get the container where the cast will be displayed
    const castScreen = document.getElementById('castScreen');
  
    // Clear any existing content
    castScreen.innerHTML = '';
  
    // Create a header for the cast display
    const castHeader = document.createElement('h2');
    castHeader.innerText = 'Meet the Queens';
    castHeader.style.textAlign = 'center';
    castHeader.style.backgroundColor = 'purple';
    castHeader.style.color = 'white';
    castHeader.style.padding = '10px';
    castHeader.style.borderRadius = '20px';
    castScreen.appendChild(castHeader);
  
    // Create a list to display the queens
    const queensList = document.createElement('ul');
    queensList.style.listStyleType = 'none';
    queensList.style.padding = '0';
    cast.forEach((queen, index) => {
      // Debugging logs to check the properties
      console.log(`Queen: ${queen.name}, Last Placement: ${queen.lastPlacement}, Winning Streak: ${queen.winningStreak}, Eliminated: ${queen.eliminated}`);
  
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
      queenImage.style.height = 'auto'; // Maintain the aspect ratio
      queenImage.style.marginRight = '1em'; // Add space between the image and the name
  
      // Add the image to the list item
      queenItem.appendChild(queenImage);
  
      // Create a span element for the queen's name and message
      const queenName = document.createElement('span');
      let message = `${queen.name}, ready to take on the world!`; // Default message

        // Calculate safeStreak, totalWins, and bottomAppearances for each queen
        let safeStreak = queen.trackRecord.filter(placement => placement === 'SAFE').length;
        let totalWins = queen.trackRecord.filter(placement => placement === 'WIN').length;
        let bottomAppearances = queen.trackRecord.filter(placement => placement === 'BTM2').length;
      // Update the message based on the queen's performance
      if (safeStreak === queen.trackRecord.length) {
        message = `${queen.name} has been consistently safe, but it's time to stand out from the crowd.`;
      } else if (totalWins > 1 && totalWins === Math.max(...cast.map(q => q.trackRecord.filter(p => p === 'WIN').length))) {
        message = `${queen.name} is a frontrunner with the most wins so far, setting the bar high for the competition.`;
      } else if (bottomAppearances >= 2) {
        message = `${queen.name} has been in the bottom ${bottomAppearances} times, it's do or die time for her.`;
      } else if (safeStreak > 2) {
        message = `${queen.name} has been flying under the radar with ${safeStreak} consecutive safe placements.`;
      } else {
        message = `${queen.name} is ready to take on the next challenge with full force.`;
      } 
      if (queen.totalWins === 1 && queen.bottomAppearances === 0) {
        message = `${queen.name} has tasted victory once and is hungry for more.`;
      } else if (queen.totalWins === 0 && queen.bottomAppearances === 1) {
        message = `${queen.name} has been in the bottom once, a wake-up call to step up her game.`;
      } else if (queen.safeStreak === queen.trackRecord.length - 1 && queen.lastPlacement === 'WIN') {
        message = `${queen.name} has been playing it safe, but her recent win could be the start of a rise to the top.`;
      } else if (queen.trackRecord.every(placement => placement === 'SAFE' || placement === 'WIN')) {
        message = `${queen.name} has been consistently strong, never facing the threat of elimination.`;
      } else if (queen.trackRecord.slice(-2).every(placement => placement === 'BTM2')) {
        message = `${queen.name} has been in the bottom for the last two weeks, she's on thin ice.`;
      } else if (queen.trackRecord.includes('WIN') && queen.trackRecord.includes('BTM2') && queen.totalWins === queen.bottomAppearances) {
        message = `${queen.name} has had a rollercoaster journey, with equal highs and lows.`;
      } else if (queen.trackRecord.length > 3 && !queen.trackRecord.slice(-3).includes('SAFE')) {
        message = `${queen.name} hasn't been safe for a while, always at one extreme or the other.`;
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
function calculatePerformance(queen, challengeStat) {
  let stat = queen[challengeStat];
  // Increase the range of the random factor to add more randomness
  let randomFactor = (Math.random() * 8) - 4; // Now between -2 and 2
  let performanceScore = stat + randomFactor;
  // Log the queen's name, the challenge stat, and the performance score
  console.log(queen.name + ' scored ' + performanceScore + ' in ' + challengeStat);
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
    { name: 'Snatch', traits: ['comedy', 'improv'], description: 'A celebrity impersonation game that tests queens on humor and impersonation skills.' }
  ];


function simulateChallenge(queens, challenge) {
  queens.forEach(queen => {
    let performanceScore;
      
      if (challenge.name === 'Snatch') {
        // Snatch Game combines comedy and improv traits
        let comedyScore = calculatePerformance(queen, challenge.traits[0]);
        let improvScore = calculatePerformance(queen, challenge.traits[1]);
        performanceScore = (comedyScore + improvScore)/(2); // Two decimal places
      } else {
        performanceScore = calculatePerformance(queen, challenge.trait).toFixed(2); // Two decimal places
      }
      
      queen.performanceScore = parseFloat(performanceScore); // Convert string back to number
    });
  
    // Sort queens by performance score for placements
    queens.sort((a, b) => b.performanceScore - a.performanceScore);
  
  }
// Initialize an array to keep track of active queens
let activeQueens = cast.map(queen => ({ ...queen, isActive: true }));

function determinePlacements(queens) {
  // Sort queens by their performance scores in descending order
  queens.sort((a, b) => b.performanceScore - a.performanceScore);

  // Filter out only active queens
  let activeQueens = queens.filter(queen => queen.isActive);

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
    
  // Log the trackRecord before update
  console.log('Before update:');
  activeQueens.forEach(queen => {
    console.log(queen.name, 'Track Record:', queen.trackRecord.join(', '));
  });

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

  // Log the trackRecord after update
  console.log('After update:');
  activeQueens.forEach(queen => {
    console.log(queen.name, 'Track Record:', queen.trackRecord.join(', '));
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
    // Assign favoritism points based on placements
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
  // Log the placements and additional stats for debugging
  activeQueens.forEach(queen => {
    console.log(queen.name, 'Placement:', queen.currentPlacement, 'Last Placement:', queen.lastPlacement, 'Safe Streak:', queen.safeStreak, 'Total Wins:', queen.totalWins, 'Bottom Appearances:', queen.bottomAppearances);
  });
}

// Initialize a flag to track if the double shantay has been used this season
let seasonDoubleShantayUsed = false;
function lipsyncAndElimination(queens) {
  // Find the bottom queens
  let bottomQueens = queens.filter(queen => queen.currentPlacement === 'BTM2');
  
  // Ensure there are at least two queens in the bottom before proceeding
  if (bottomQueens.length > 1) {
    // Calculate lipsync scores, considering favoritism points and a small random factor
    bottomQueens.forEach(queen => {
      let randomFactor = Math.random() * 2 - 1;
      queen.lipsyncScore = queen.lipsync + (queen.favoritismPoints) + randomFactor;
      
      // Log the detailed breakdown of the lipsync score
      console.log(`${queen.name}: Lipsync (${queen.lipsync}) + Favoritism (${queen.favoritismPoints}) + Random (${randomFactor.toFixed(2)}) = ${queen.lipsyncScore.toFixed(2)}`);
    });

    // Sort bottom queens by lipsync score
    bottomQueens.sort((a, b) => b.lipsyncScore - a.lipsyncScore);

    // Check for double shantay condition
    if (!seasonDoubleShantayUsed && bottomQueens[0].lipsyncScore > 10 && bottomQueens[1].lipsyncScore > 10) {
      seasonDoubleShantayUsed = true; // Set the flag to true as the double shantay has been used
      return { doubleShantay: true }; // Return an object indicating a double shantay
    }

    // The queen with the lower lipsync score gets eliminated
    let eliminatedQueen = bottomQueens.pop(); // Use pop to get the last element (lowest score)
    eliminatedQueen.isActive = false; // Update isActive status to false for the eliminated queen
    eliminatedQueen.currentPlacement = 'ELIM'; // Update current placement to 'ELIM'
    eliminatedQueen.trackRecord[eliminatedQueen.trackRecord.length - 1] = 'ELIM'; // Update the track record to 'ELIM'

    return { winner: bottomQueens[0], eliminatedQueen }; // Return the winner and eliminated queen
  } else {
    return null; // Return null if there's no lipsync battle
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
    console.log('Challenge:', challenge.name, 'Placement:', placement);
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
  announcePerformances(queens) {
    const performancesList = document.getElementById('performancesList');
    performancesList.innerHTML = ''; // Clear existing performances
  
    queens.forEach(queen => {
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
announcePlacements(queens) {
  const placementsList = document.getElementById('placementsList');
  placementsList.innerHTML = ''; // Clear the stage for today's stars

  // Filter out only active queens
  let activeQueens = queens.filter(queen => queen.isActive);

  console.log('Current Challenge:', currentChallenge.name); // Add this line to debug
  activeQueens.forEach(queen => {
    // Create a list item for each queen's placement
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
      case 'HIGH':
        listItem.style.backgroundColor = 'lightblue';
        listItem.style.color = 'black';
        break;
      case 'SAFE':
        listItem.style.backgroundColor = 'cornsilk';
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
},


// Method to announce the lipsync results
announceLipsyncResults(winner, eliminatedQueen) {
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

  // Announce the winner with praise
  const winnerAnnouncement = createLipsyncListItem(winner, `${winner.name}, shantay you stay!`, 'lightgreen');
  lipsyncResultsList.appendChild(winnerAnnouncement);

  // Announce the eliminated queen with a heartfelt farewell
  const eliminatedAnnouncement = createLipsyncListItem(eliminatedQueen, `${eliminatedQueen.name}, sashay away.`, 'lightcoral');
  lipsyncResultsList.appendChild(eliminatedAnnouncement);
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
    LIPSYNC_PREP: 'lipsync_prep',
    LIPSYNC: 'lipsync',
    FINALE: 'finale'
  };
  
// Initialize the current state
let currentState = states.NEW_EPISODE;

// Function to get active queens for the episode
function getActiveQueens(cast) {
  const activeQueens = cast.filter(queen => queen.isActive);
  console.log('Active Queens:', activeQueens.map(queen => queen.name));
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

    switch (currentState) {
      case states.NEW_EPISODE:
        handleNewEpisode(); // Call handleNewEpisode to set up the first episode
        break;
      case states.DISPLAY_CAST:
        hideAllScreens();
        displayCast(queensInEpisode);
        document.getElementById('castScreen').style.display = 'block';
        currentState = states.ANNOUNCE_CHALLENGE;
        break;
      case states.ANNOUNCE_CHALLENGE:
        hideAllScreens();
        host.announceChallenge(currentChallenge);
        document.getElementById('challengeScreen').style.display = 'block';
        currentState = states.PERFORMANCES;
        break;
      case states.PERFORMANCES:
        hideAllScreens();
        simulateChallenge(queensInEpisode, currentChallenge); // Call simulateChallenge here
        host.announcePerformances(queensInEpisode);
        document.getElementById('performancesScreen').style.display = 'block';
        currentState = states.PLACEMENTS;
        break;
      case states.PLACEMENTS:
        hideAllScreens();
        determinePlacements(queensInEpisode); 
        host.announcePlacements(queensInEpisode);
        document.getElementById('placementsScreen').style.display = 'block';
        currentState = states.LIPSYNC_PREP;
        break;
      case states.LIPSYNC_PREP:
        lipsyncResult = lipsyncAndElimination(queensInEpisode); // Assign the result to lipsyncResult
        currentState = states.LIPSYNC;
        break;
        case states.LIPSYNC:
          hideAllScreens();
          if (lipsyncResult && lipsyncResult.winner && lipsyncResult.eliminatedQueen) {
            host.announceLipsyncResults(lipsyncResult.winner, lipsyncResult.eliminatedQueen);
            updateTrackRecord(cast, episode); // Update the track record table here
            displayCast(queensInEpisode); // Display cast with updated comments
          } else {
            console.log('Lipsync battle did not occur or there was an error.');
          }
          document.getElementById('lipsyncResultsScreen').style.display = 'block';
      
          // Check if it's time for the finale or if we should start a new episode
          const updatedActiveQueens = getActiveQueens(cast);
          console.log('Number of active queens:', updatedActiveQueens.length);
      
          if (updatedActiveQueens.length === 4) {
            console.log('Transitioning to the finale...');
            currentState = states.FINALE;
            handleFinale(cast); // Pass the cast array to handleFinale
          } else {
          
            console.log('Starting Episode ' + episode);
            episode++; // Increment the episode number for the next episode
            handleNewEpisode(); // Call handleNewEpisode to start a new episode
          }
          break;
      default:
        console.log('Unhandled state:', currentState);
    }
  }
// Function to start the simulation
function simulateSeason(cast) {
  // Start the simulation by displaying the cast
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