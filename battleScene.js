const battleBackgroundImage = new Image()
battleBackgroundImage.src = './img/battleBackground.png'
const battleBackground = new Sprite({position: {
    x:0, 
    y:0
},
    image: battleBackgroundImage,
    frames:{
        max:3,
        hold:30
    },
    animate:true
})

const draggleImage = new Image()
draggleImage.src = './img/boySprite.png'
const draggle = new Sprite({
    position: {
        x:700,
        y:150
    },
    image: draggleImage,
    frames:{
        max:4,
        hold: 20
    },
    animate:true,
    isEnemy: true,
    name: 'boy',
    health:100
})

const embyImage = new Image()
embyImage.src = './img/girlSprite.png'
const emby = new Sprite({
    position: {
        x:300,
        y:270 
    },
    image: embyImage,
    frames:{
        max:2,
        hold: 20
    },
    animate:true,
    name: 'player',
    health:100
})

const renderedSprites =[draggle, emby]



let battleAnimationId

function animateBattle(){
    document.querySelector('#quest').style.opacity = 'none'
    document.querySelector('#userInterface').style.display = 'block'
    battleAnimationId= window.requestAnimationFrame(animateBattle)
    battleBackground.draw() 

    renderedSprites.forEach((sprite)=>{
        sprite.draw()
    })
}

//animateBattle()

const queue = []

document.querySelector('#throwSnowball').addEventListener('click', (e) =>{  
        emby.attack({ 
        attack: {
            name: 'Snowball',
            damage: 20,
            type: 'Ice' 
        },
        recipient: draggle,
        renderedSprites
    }) 

    if(draggle.health <=20 ){
        queue.push(()=> {
            draggle.faint()})
        queue.push(()=> {
            gsap.to('#overlappingDiv', {
                opacity:1,
                onComplete: () => {
                    cancelAnimationFrame(battleAnimationId)
                    animate()
                    document.querySelector('#userInterface').style.display= 'none'
                    gsap.to('#overlappingDiv',{
                        opacity:0
                    })
                    gsap.to(battleBackground, {
                        opacity:0
                    })
                    battle.initiated = false
                    snowballFight = true
                    audio.Map.play()
                    gsap.to('#quest', {
                        opacity: 1
                    })
                }
            })})
    }

    queue.push( () =>{
        draggle.attack({ 
            attack: {
                name: 'Snowball',
                damage: 10,
                type: 'Ice' 
            },
        recipient: emby,
        renderedSprites
        })
    }) 

    })

document.querySelector('#dialogueBox').addEventListener('click', (e) => {
    
    if(queue.length > 0 ){
        queue[0]()
        queue.shift()
    } else e.currentTarget.style.display = 'none'
})