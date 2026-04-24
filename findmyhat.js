const prompt = require('prompt-sync')({sigint: true});

const fieldChar = '😍';
const fieldChar1 = '🔥';
const fieldChar2 = '👍';
const hole = '🌒​'

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

    /// กำหนดแถวให้กับ พื้นที่ของเราว่าให้มันมีกี่แถว ///

    for (let i = 0; i < y; i++) {
        randomField.push([]);
    }

    /// เติมอิโมจิเข้าไปในแต่ละแถว ///

    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            if (i === 0 && j === 0) {
                randomField[0].push(fieldChar1)
            } else if (i === 5 && j === 5){
                randomField[5].push(fieldChar2)
            } else if (Math.random() < percent / 100) {  
            randomField[i].push(hole)
            }
            else {
                randomField[i].push(fieldChar);
            }    
        }
    }


    return randomField;

  }

  //function ให้เล่นเกมใน class ///

  playGame() {

        let playerRow = 0;
        let playerCol = 0;

        while(true){

            this.print();
            const input = prompt('w=ขึ้น s=ลง a=ซ้าย d=ขวา: ');


            if (input === 'w') playerRow--; 
            if (input === 's') playerRow++; 
            if (input === 'a') playerCol--; 
            if (input === 'd') playerCol++; 

            console.log('ตำแหน่งปัจจุบัน:', playerRow, playerCol);
            

            if (this._field[playerRow][playerCol] === hole) {
                console.log('end')
                break
            }

            this._field[playerRow][playerCol] = fieldChar1;

            if (playerRow === 5 && playerCol === 5) {
                console.log('Win! 🎉');
                break 
            }
        }

    }


}


const easyField = new Field(Field.generateField(6, 6, 25)); ///รับเอาค่ามา 3 ตัว

easyField.playGame() ///สั่ง run เพื่อเล่นเกม


