const render = () => {
    const digimones = [
        {
          name: "Koromon",
          img: "https://digimon.shadowsmith.com/img/koromon.jpg",
          level: "In Training"
        },
        {
          name: "Tsunomon",
          img: "https://digimon.shadowsmith.com/img/tsunomon.jpg",
          level: "In Training"
        },
        {
          name: "Yokomon",
          img: "https://digimon.shadowsmith.com/img/yokomon.jpg",
          level: "In Training"
        },
        {
          name: "Motimon",
          img: "https://digimon.shadowsmith.com/img/motimon.jpg",
          level: "In Training"
        },
        {
          name: "Patamon",
          img: "https://digimon.shadowsmith.com/img/patamon.jpg",
          level: "Rookie"
        },
        {
          name: "Kuwagamon",
          img: "https://digimon.shadowsmith.com/img/kuwagamon.jpg",
          level: "Champion"
        },
        {
          name: "Greymon",
          img: "https://digimon.shadowsmith.com/img/greymon.jpg",
          level: "Champion"
        },
        {
          name: "Tanemon",
          img: "https://digimon.shadowsmith.com/img/tanemon.jpg",
          level: "In Training"
        }
      ];
      
      const ContarDigimones = (digimones) => {
        let digimonInTraining = [];
        let digimonChampion = [];
        let digimonRookie = [];
        
        for (digimon of digimones) {
          if (digimon.level === "In Training") {
            digimonInTraining.push(digimon);
          } 
          else if (digimon.level === "Champion") {
            digimonChampion.push(digimon);
          }
          else if (digimon.level === "Rookie") {
            digimonRookie.push(digimon);
          } 
        }
    
        return {
            inTraining: digimonInTraining.length,
            champion: digimonChampion.length,
            rookie: digimonRookie.length,
            };
        }
    
        const digimonReturn = ContarDigimones(digimones);
        console.log(digimonReturn.inTraining);
        console.log(digimonReturn.champion);
        console.log(digimonReturn.rookie);
    
    
        const container = document.querySelector('.container');
    
        const inTraining = document.createElement('p');
        inTraining.innerHTML = `Existen ${ContarDigimones(digimones).inTraining} digimones con nivel In Training.`;
        
        const champion = document.createElement('p');
        champion.innerHTML = `Existen ${ContarDigimones(digimones).champion} digimones con nivel Champion.`;

        const rookie = document.createElement('p');
        rookie.innerHTML = `Existen ${ContarDigimones(digimones).rookie} digimones con nivel Rookie.`;
    
    
        container.appendChild(inTraining);
        container.appendChild(champion);
        container.appendChild(rookie);
};    
    document.addEventListener("DOMContentLoaded", render);