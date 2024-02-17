const getRequest = async (url)=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    let result = {}; 
    try {
        result = await fetch(url, requestOptions).then(response => response.json())
      }
      catch(err) {
        console.log(`err (url: "${url}") ,`, err);
        result = {};
      }

    return result;
}

const DataObj = {
    GetPeople: async (pageNo = 1) => {
        let url = "https://swapi.dev/api/people/?page=" + pageNo; //https://swapi.dev/api/people/?page=2
        const result = await getRequest(url);
        return result;
    },
    GetPlanets: async (pageNo = 1) => {
        let url = "https://swapi.dev/api/planets/?page=" + pageNo;
        const result = await getRequest(url);
        return result;
    },
    GetFilms: async (pageNo = 1) => {
        let url = "https://swapi.dev/api/films/?page=" + pageNo;
        const result = await getRequest(url);
        return result;
    },
    GetSpecies: async (pageNo = 1) => {
        let url = "https://swapi.dev/api/species/?page=" + pageNo;
        const result = await getRequest(url);
        return result;
    },
    GetVehicles: async (pageNo = 1) => {
        let url = "https://swapi.dev/api/vehicles/?page=" + pageNo;
        const result = await getRequest(url);
        return result;
    },
    GetStarships: async (pageNo = 1) => {
        let url = "https://swapi.dev/api/starships/?page=" + pageNo;
        const result = await getRequest(url);
        return result;
    },
    GetSpeficic: async (url) => {
        const result = await getRequest(url);
        return result;
    }
}



export default DataObj;