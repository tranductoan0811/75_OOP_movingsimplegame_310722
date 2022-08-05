/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function() {
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: '+ this.top +'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function() {
    this.left += 50;
    console.log('ok: ' + this.left);
  }

  this.moveDown = function() {
    this.top += 50;
  }

  this.moveLeft = function() {
    this.left -= 50;
  }

  this.moveTop = function() {
    this.top -= 50;
  }


}

var hero = new Hero("pikachu.png", 20, 30, 200);
var myWidth = window.innerWidth - hero.size;
var myHeight = window.innerHeight - hero.size;

let flag = 1;

function start(){
  if((hero.left < myWidth) && (flag == 1)){
    hero.moveRight();
    if (hero.left >= myWidth) {
      flag = 2;
    }
  }

  if ((flag == 2) && (hero.top < myHeight)) {
    hero.moveDown();
    if (hero.top >= myHeight) {
      flag = 3;
    }
  } 

  if ((flag == 3) && (hero.left > 30)) {
    hero.moveLeft();
    if (hero.left <= 30) {
      flag = 4;
    }
  }

  if ((flag == 4) && (hero.top > 20)) {
    hero.moveTop();
    if (hero.top == 20) {
      flag = 1;
           
    }
    
  } 

 

  
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 10)

}


start();