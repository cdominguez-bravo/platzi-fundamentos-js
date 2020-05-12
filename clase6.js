const URI = "https://swapi.dev/api/";
var params = "people/:id";

ids = [1, 2, 3, 4, 5];

const opts = { crossDomain: true };

function getPersonaje(id) {
  return new Promise((resolve, reject) => {
    var url = `${URI}${params.replace(":id", id)}`;
    $.get(url, opts, (data) => resolve(data)).fail(() => reject(id));
  });
}

ids.forEach((id, key) => {
  getPersonaje(id)
    .then(function (personaje) {
      console.log(`Hola yo soy ${personaje.name}`);
    })
    .catch(function (id) {
      console.log(`No se puedo obtener información con el id ${id}`);
    });
});
