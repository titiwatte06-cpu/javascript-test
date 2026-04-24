const prompt = require('prompt-sync')({sigint: true});

const fieldChar = '😍';
const fieldChar1 = '🔥';
const fieldChar2 = '🎩';
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

    // randomRow กับ randomColumn มีไว้เพื่อสุ่มหาตำแหน่งว่าอยู่ในตำแหน่งไหนบ้าง โดย random บนตัวแปร x กับ y ที่จะวนค่าอยู่แค่ในแถวกับ column

    const randomRow = Math.floor(Math.random() * x);
    const randomColumn = Math.floor(Math.random() * y);


    /// กำหนดแถวให้กับ พื้นที่ของเราว่าให้มันมีกี่แถว ///

    for (let i = 0; i < y; i++) {
        randomField.push([]);
    }

    /// เติมอิโมจิเข้าไปในแต่ละแถว ///

    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            if (i === 0 && j === 0) {
                randomField[0].push(fieldChar1)
            } 
             else if (Math.random() < percent / 100) {  
                randomField[i].push(hole)
            }
            else {
                randomField[i].push(fieldChar);
            }
            
          
        }
    }

    randomField[randomRow][randomColumn] = fieldChar2;

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

            if (this._playerRow < 0 || this._playerRow >= this._field.length ||
                this._playerCol < 0 || this._playerCol >= this._field[0].length) {
                console.log(' Out of bounds! Game over');
                break;
            }

            if (this._field[this._playerRow][this._playerCol] === hole) {
                console.log('💀 You fell into a hole! Game over')
                break
            }

            

            if (this._field[this._playerRow][this._playerCol] === fieldChar2) {
                console.log('🎉 You found the hat! You win!');
                break
            }

            

            this._field[this._playerRow][this._playerCol] = fieldChar1;
                
            }
            
    }    
}            
        






const easyField = new Field(Field.generateField(6, 6, 20)); ///รับเอาค่ามา 3 ตัว

easyField.playGame() ///สั่ง run เพื่อเล่นเกม


