canvas = document.getElementById('myCanvas')
ctx = canvas.getContext('2d')
x = 0,y = 0,ballSize = 10,i=0
sourse = 0
const target = []
document.addEventListener("click", click);

function click(e){
    x = e.offsetX
    y = e.offsetY
    for(i=0;i<target.length;i++){
        if(x<=target[i].offsetX+ballSize&&x>=target[i].offsetX-ballSize&&y<=target[i].offsetY+ballSize&&y>=target[i].offsetY-ballSize){                
            target.splice(i,1)
            ctx.clearRect(0,0,canvas.width,canvas.height)
            sourse++
            console.log(sourse)
            break
        }
    }  
    for(i=0;i<target.length;i++)
       {
        ctx.beginPath()
        ctx.arc(target[i].offsetX,target[i].offsetY,ballSize,0,Math.PI*2)
        ctx.fillStyle = 'red'
        ctx.fill()
        ctx.closePath()
       }
      
}

function TargetXY(x,y){
    this.offsetX = x
    this.offsetY = y
}

function drawball(x,y,Bool){
    ctx.beginPath()
    ctx.arc(x,y,ballSize,0,Math.PI*2)
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.closePath()
    target.push(a1 = new TargetXY(x,y))
}


function draw(){
    x = getRandomArbitrary(ballSize,canvas.width-ballSize+1)
    y = getRandomArbitrary(ballSize,canvas.height-ballSize+1)
    if(target.length<4){
        drawball(x,y)
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

Interval =  setInterval(draw, 100);