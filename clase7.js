const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id/";

// Callback
function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(
      url,
      {
        crossDomain: true,
      },
      function (data) {
        resolve(data);
      }
    ).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`Sucedio un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
  .then((data) => {
    console.log(`👋Hola, soy ${data.name}`);
    return obtenerPersonaje(2).then((data) => {
      console.log(`👋Hola, soy ${data.name}`);
      return obtenerPersonaje(3).then((data) => {
        console.log(`👋Hola, soy ${data.name}`);
        return obtenerPersonaje(4).then((data) => {
          console.log(`👋Hola, soy ${data.name}`);
        });
      });
    });
  })
  .catch(onError);
