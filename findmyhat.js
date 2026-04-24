const prompt = require('prompt-sync')({sigint: true});

const fieldChar = '😍';
const fieldChar1 = '🔥';

class Field {
  constructor(field){

    this._field = field;
    this._xDist = 0;
    this._yDist = 0;

  }

  print(){
    for (let i=0; i<this._field.length; ++i){
        console.log(this._field[i].join(''));
    }
  }

  
  static generateField(x, y, percent){

    let numNodes, area = x * y;

    const randomField = [];
    for (let i = 0; i < y; i++) {
        randomField.push([]);
    }
    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            if (i === 0 && j === 0) {
                randomField[0].push(fieldChar1)
            } else {
                randomField[i].push(fieldChar);
            } 
            
        }
    }

    return randomField;

  }

  
}



const easyField = new Field(Field.generateField(3, 3, 5));
easyField.print();




