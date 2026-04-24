const prompt = require('prompt-sync')({sigint: true});

const fieldChar = '😍';
const fieldChar1 = '🔥';
const fieldChar2 = '👍';
const hole = '🌒​'

class Field {
  constructor(field){
    this._field = field;
    this._playerRow = 0;
    this._playerCol = 0;
  }

  moveUp() {
    this._field[this._playerRow][this._playerCol] = fieldChar1;
    this._playerRow--;
  }

  moveDown() {
    this._field[this._playerRow][this._playerCol] = fieldChar1;
    this._playerRow++;
  }

  moveLeft() {
    this._field[this._playerRow][this._playerCol] = fieldChar1;
    this._playerCol--;
  }

  moveRight() {
    this._field[this._playerRow][this._playerCol] = fieldChar1;
    this._playerCol++;
  }


// ไว้แสดงค่าตารราง

  print(){
    for (let i=0; i<this._field.length; ++i){
        console.log(this._field[i].join(''));
    }
  }

  ///สร้างตารางขึ้นมาโดยรับเอาค่า x และ y และ ค่า percent เพื่อมาใช้ในการสร้างตารางและคำนวนการวางหลุม
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
        while(true){
            this.print();
                
            const input = prompt('w=ขึ้น s=ลง a=ซ้าย d=ขวา: ');
            if (input === 's') this.moveDown();
            if (input === 'w') this.moveUp(); 
            if (input === 'a') this.moveLeft(); 
            if (input === 'd') this.moveRight();   
                

            console.log('ตำแหน่งปัจจุบัน:', this._playerRow, this._playerCol);
            console.log(this._playerRow);

            if (this._field[this._playerRow][this._playerCol] === hole) {
                console.log('💀 You fell into a hole! Game over')
                break
            }

            

            if (this._playerRow === 5 && this._playerCol === 5) {
                console.log('🎉 You found the hat! You win!');
                break
            }

            this._field[this._playerRow][this._playerCol] = fieldChar1;
                
            }
            
    }    
}            
        






const easyField = new Field(Field.generateField(6, 6, 20)); ///รับเอาค่ามา 3 ตัว

easyField.playGame() ///สั่ง run เพื่อเล่นเกม


