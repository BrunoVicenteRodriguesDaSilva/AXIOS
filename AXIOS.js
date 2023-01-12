// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("Response:", res);
//   })
//   .catch((e) => {
//     console.log("ERROR! ", e);
//   });

const getSWCharacter = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (e) {
    console.log("DEU ERRO PANACA");
  }
};

for (let i = 1; i <= 1; i++) {
  getSWCharacter(i);
}

//****************************************************

const freshJokes = document.querySelector("#freshJokes");
const listJokes = document.querySelector("#listJokes");
const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    const newJoke = document.createElement("li");
    newJoke.append(res.data.joke);
    listJokes.append(newJoke);
  } catch (e) {
    const newJoke = document.createElement("li");
    newJoke.append("No jokes available, sorry :( ", e);
    listJokes.append(newJoke);
  }
};

freshJokes.addEventListener("click", getDadJoke);
