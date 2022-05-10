export let capitalize = (string) => {
    return `${string[0].toUpperCase()}${string.slice(1)}`
}

export let reverse = (string) => {
    return string.split('').reverse().join('');
}

export let calculator = {
    add: (x, y) => {
        return x + y;
    },
    subtract: (x, y) => {
        return x - y;
    },
    multiply: (x, y) => {
        return x * y;
    },
    divide: (x, y) => {
        return x / y;
    }
}

export let caesar = (string) => {
    let regex = /\W/
let converted = []
let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let cipher = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M']
let split = string.split(" ")

console.log(split)  
for (let i = 0; i < split.length; i++){
    let array = []
    for (let j = 0; j < split[i].length; j++) {
      for (let k = 0; k < alpha.length; k++) {
      if (split[i][j] === cipher[k]) {
        array.push(alpha[k]);
      }
      else if (split[i][j] === cipher[k].toLowerCase()) {
        array.push(alpha[k].toLowerCase());
      }
      }
    if (regex.test(split[i][j]) === true) {
        array.push(split[i][j])
    
    } 
    }
    converted.push(array.join(""))
}
 
  return converted.join(" ");
}

export let analyze = (array) => {
    
    let averager = () => {
        let sum = 0;
        array.forEach(num => sum += num);
        return sum / array.length;
    }
    
    let object = {
        average: averager(),
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }

    return object;
}