var express = require('express');
var app = express ();
var axios = require('axios');
var mcache = require('memory-cache');
const port = 3001;


//Buscaré un valor almacenado en caché utilizando la URL de la solicitud como clave. 
//Si se encuentra, se envía directamente como respuesta. 
//Si no está actualmente en la memoria caché, ajustará la función de envío de Express para almacenar en caché la respuesta antes de enviarla al cliente y 
//luego llamar al siguiente middleware.


var cache = (duration) => {
  console.log('inicio cache')
  return (req, res, next) => {
  
      let key = '__express__' + req.originalUrl || req.url
  
      let cachedBody = mcache.get(key)
  
      if (cachedBody) {
      
          res.send(cachedBody)
      
          return
      
      } else {
      
          res.sendResponse = res.send
      
          res.send = (body) => {
      
          mcache.put(key, body, duration * 1000);
      
          res.sendResponse(body)
          console.log('estoy en la cache');
          console.log(key +  duration);
          
      
      }
  
      next()
      }

  
  }
  
}


const parseItemList = data => {
let itemList = [];



data.results.map(i => {
  itemList.push({
    id: i.id,
    title: i.title,
    price: i.price,
    currency_id: i.currency_id,
    available_quantity: i.available_quantity,
    thumbnail: i.thumbnail,
    condition: i.condition,
    
  });
});

return itemList;
};

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*"); 
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});


//nuestra función está para ser determinada en milisegundos, 
//por ellos cuando sea llamada desde la ruta, deberá expresarse en el tiempo necesario.
//Importante: los métodos PUT, DELETE y POST nunca se deben almacenar en caché.

app.get('/api/search', cache(10), (req, res) => {
const query = req.query.q;
console.log('llego la query con valor:');
console.log(req.query.q);

return axios
  
  .get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
  .then(response => {
    res.json(parseItemList(response.data));
  })
  .catch(error => {
    console.log(error.message);
  });
});



app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
  })