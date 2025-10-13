// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [] //será eliminado
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(value===""){

    delete records[id][prop];

  }else if (prop!=="tracks"){//Java script si no existe la prop la crea sin mas
    
    records[id][prop]=value;

  }else {
    // Si el álbum aún no tiene "tracks", creamos un array vacío
    if (!records[id][prop]) {
      records[id][prop] = [];
    }
      records[id][prop].push(value);
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));