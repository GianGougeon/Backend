const data = [];
let id = 0;

const list = () => {
  return data;
};

const findOne = (id) => {
  return data.find((tweet) => tweet.id === id);
};

const add = (name, content) => {
  const tweet = {
    id: ++id,
    name,
    content
  };
  data.push(tweet);
  return tweet;
};

const findAllMatch = (name) => {
  const newArr = data.filter((tweet) => tweet.name === name);
  return newArr;
};

const remove = (id) => {
  data.forEach((tweet, i) => {
    if (tweet.id === id) data.splice(i, 1);
  });
};

const update = (id, newContent) => {
  const tweet = findOne(id);
  tweet.content = newContent;
};

module.exports = {
  add,
  list,
  findOne,
  findAllMatch,
  remove,
  update
};

const tweets = [{
    name: "Homero Simpson",
    content: "Vas a morir Moe. ¡Wiiiiii!",
  },
  {
    name: "Homero Simpson",
    content: "Oh Marge, mi reina, Lisa mi pequeña princesa… Y cómo olvidarme del niño rata.",
  },
  {
    name: "Señora Alegria",
    content: "¡¿Alguien quiere pensar en los niños?!",
  },
  {
    name: "Abuelo Simpson",
    content: "Mi Homero no es comunista. Podrá ser mentiroso, puerco, idiota, comunista, pero nunca una estrella porno",
  },
  {
    name: "Homero Simpson",
    content: "Normalmente no rezo, pero si estás ahí, por favor ¡Sálvame Superman!",
  },
];

for (let i = 0; i < tweets.length; i++) {
  module.exports.add(tweets[i].name, tweets[i].content);
}