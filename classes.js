class Sprite {
    constructor({ 
        position ,
        image,
        frames = {max: 1, hold:10}, 
        sprites=[], 
        animate = false,
        isEnemy = false,
        rotation =0,
        name,
        health
    }){
        this.position = position
        this.image = image
        this.frames = {...frames, val:0, elapsed:0}

        this.image.onload =() => {
            this.width = this.image.width/this.frames.max
            this.height = this.image.height
        }
        this.animate= animate
        this.sprites=sprites
        this.opacity=1
        this.health = health
        this.isEnemy= isEnemy
        this.rotation = rotation
        this.name = name
    }

    draw(){ 
        c.save()
        c.translate(this.position.x+this.width/2,this.position.y+this.height/2)
        c.rotate(this.rotation)
        c.translate(-this.position.x - this.width/2,-this.position.y-this.height/2)
        c.globalAlpha = this.opacity
        c.drawImage(
            this.image,
            this.frames.val*this.width,
            0,
            this.image.width/this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width/this.frames.max,
            this.image.height
        )
        c.restore()

        if(!this.animate)return

        if(this.frames.max>1){
            this.frames.elapsed++
        }

        if(this.frames.elapsed%this.frames.hold===0)
        if (this.frames.val < this.frames.max - 1)this.frames.val++ 
        else this.frames.val =0
    }

    faint() {
        document.querySelector('#dialogueBox').innerHTML = this.name + ' passed out';
        gsap.to(this.position, {
            y:this.position.y + 20 
        })
        gsap.to(this, {
            opacity: 0
        })
        audio.battle.stop()
        audio.victory.play() 
        return

    }
    attack({attack, recipient, renderedSprites}){
        document.querySelector('#dialogueBox').style.display = 'block'
        document.querySelector('#dialogueBox').innerHTML = this.name + ' threw a snowball'

        let rotation = 1
        if (this.isEnemy) rotation = -2.2
        
        audio.initSnowball.play()
        const snowballImage = new Image()
        snowballImage.src = './img/snowball.png'
        const snowball = new Sprite({
            position: {
                x: this.position.x, 
                y: this.position.y
            },
            image: snowballImage,
            frames:{
                max:4, 
                hold:10
            },
            animate:true,
            rotation
        })
        
        renderedSprites.splice(1, 0, snowball)

        recipient.health -=  attack.damage
        
        let healthBar = '#enemyHealthBar'
        if (this.isEnemy) healthBar = "#playerHealthBar"
        
        gsap.to(snowball.position,{
            x:recipient.position.x,
            y:recipient.position.y,
            onComplete: () =>{
                audio.snowballHit.play()
                renderedSprites.splice(1,1)

                gsap.to(healthBar, {
                    width: (recipient.health - attack.damage) + '%'
                })
                gsap.to(recipient.position, {
                    x:recipient.position.x + 10, 
                    yoyo: true,
                    repeat: 5,
                    duration: 0.08,
                    
                })

                gsap.to(recipient, {
                    opacity:0.5,
                    repeat:5, 
                    yoyo:true,
                    duration:0.08
                })
            }
        })
    }
}


class Boundary{
    static width =48
    static height = 48
    constructor({position}){
        this.position = position
        this.width = 48
        this.height = 48
    }

    draw(){
        c.fillStyle = 'rgba(255,0,0,0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}