// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes (names) {
    const templates = [
      'no one likes this',
      '{name} likes this',
      '{name} and {name} like this',
      '{name}, {name} and {name} like this',
      '{name}, {name} and {n} others like this'
    ];
    let idx = Math.min(names.length, 4);
    
    return templates[idx].replace(/{name}|{n}/g, function (val) {
      return val === '{name}' ? names.shift() : names.length;
    });
  }