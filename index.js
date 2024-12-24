const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576
let snowballFight = false
let startDialogue = false
 
const offset = {
    x: -970,
    y:-1250
}

//collisions hi
const collisionsMap =[]
for(let i=0; i < collisions.length; i+=70){
    collisionsMap.push(collisions.slice(i,70 +i))
}
const boundaries =[] 
collisionsMap.forEach((row, i) =>{
    row.forEach((symbol,j) => {
        if (symbol === 5322){
         boundaries.push(
            new Boundary({
                position:{
                    x:j*Boundary.width + offset.x,
                    y: i*Boundary.height + offset.y
         }}))}
    })
})

//battlezones
const battleZonesMap =[]
for(let i=0; i < battleZonesData.length; i+=70){
    battleZonesMap.push(battleZonesData.slice(i,70 +i))
}

const battleZones = []

battleZonesMap.forEach((row, i) =>{
    row.forEach((symbol,j) => {
        if (symbol === 5322){
         battleZones.push(
            new Boundary({
                position:{
                    x:j*Boundary.width + offset.x,
                    y: i*Boundary.height + offset.y
         }}))}
    })
})

//start position
const startMap =[]
for(let i=0; i < startData.length; i+=70){
    startMap.push(startData.slice(i,70 +i))
}

const startPositions = []

startMap.forEach((row, i) =>{
    row.forEach((symbol,j) => {
        if (symbol === 5322){
         startPositions.push(
            new Boundary({
                position:{
                    x:j*Boundary.width + offset.x,
                    y: i*Boundary.height + offset.y
         }}))}
    })
})



//Load images 
const image = new Image()
image.src = './img/map.png'

const foregroundImage = new Image()
foregroundImage.src = './img/foreground.png'

const playerUpImage = new Image()
playerUpImage.src = './img/playerUp.png'

const playerLeftImage = new Image()
playerLeftImage.src = './img/playerLeft.png'

const playerRightImage = new Image()
playerRightImage.src = './img/playerRight.png'

const playerDownImage = new Image()
playerDownImage.src = './img/playerDown.png'

const player = new Sprite({
    position:{
        x:canvas.width / 2 - 192/4/2,
        y:canvas.height / 2 - 68/2
    },
    image: playerDownImage,
    frames: {
        max: 4,
        hold: 10
    },
    sprites: {
        up: playerUpImage,
        left: playerLeftImage,
        right: playerRightImage,
        down: playerDownImage
    }
})

//sets background and foreground sprite
const background = new Sprite({
    position:{
        x:offset.x,
        y:offset.y
    }, 
    image: image
})

const foreground = new Sprite({
    position:{
        x:offset.x,
        y:offset.y
    }, 
    image: foregroundImage
})

//tracks state of movement keys
const keys ={
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
} 
 
//List of all movable objects in the scene
const movables = [background, ...boundaries, foreground, ...battleZones, ...startPositions]

//Collision detection between two rectangular objects 
function rectangularCollision({rectangle1, rectangle2}){
    return (
        rectangle1.position.x+ rectangle1.width >= rectangle2.position.x && 
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y)
}
 
const battle = {
    initiated: false
}
 

//Main animation loop
function animate() {
    document.querySelector('#userInterface').style.display = 'none'
    const animationId = window.requestAnimationFrame(animate) 
    background.draw()
    boundaries.forEach((boundary)=>{
        boundary.draw()        
    }) 
    battleZones.forEach(battleZone => {
        battleZone.draw()
    })
    startPositions.forEach(startposition => {
        startposition.draw()
    })
    player.draw()
    foreground.draw()

    let moving = true
    player.animate = false

    if (battle.initiated) return

    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed){
        for(let i =0; i<battleZones.length; i++){
            const battleZone = battleZones[i]
            const overlappingArea = 
                (Math.min (
                player.position.x + player.width, 
                battleZone.position.x + battleZone.width)
                    -Math.max(player.position.x, battleZone.position.x) )*
                (Math.min(player.position.y + player.height, battleZone.position.y + battleZone.height
                ) - Math.max(player.position.y, battleZone.position.y))
            if (snowballFight === false &&
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: battleZone  
                })&& overlappingArea > (player.width*player.height)/2
            ){  
                console.log('battle zone collision') 
                window.cancelAnimationFrame(animationId)
                audio.Map.stop()
                audio.battle.play()
                battle.initiated = true
                gsap.to('#overlappingDiv', {
                    opacity:1,
                    duration:0.4,
                    onComplete() {
                        gsap.to('#overlappingDiv', {
                            opacity:1,
                            duration:0.4,
                            onComplete() { 
                                animateBattle()
                                gsap.to('#overlappingDiv', {
                                    opacity:0,
                                    duration:0.4
                                })
                            }
                        })
                        
                    }
                })
                break
            }
        }
    }

    //start dialogue
    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed){
        for(let i =0; i<startPositions.length; i++){
            const startposition = startPositions[i] 
            if (startDialogue === false &&
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: startposition  
                }) 
            ){  
                battle.initiated = true
                console.log('start dialogue')  
                startDialogueText();
                break
            }
        }
    }

    //movement logic
    if (keys.w.pressed && lastKey ==='w') {
        player.animate = true
        player.image = player.sprites.up
        //check for collisions
        for(let i =0; i<boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position:{
                        x:boundary.position.x,
                        y: boundary.position.y + 3
                    }}
            })){ 
                moving = false
                break
            }
        }
        
        if (moving)
        movables.forEach((movable) => {
            movable.position.y += 3}) 
    }
    else if (keys.a.pressed&& lastKey ==='a') {
        player.animate = true
        player.image = player.sprites.left

        for(let i =0; i<boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position:{
                        x:boundary.position.x + 3,
                        y: boundary.position.y
                    }}
            })){ 
                moving = false
                break
            }
        }
        if (moving)
        movables.forEach((movable) => {
            movable.position.x += 3})  
    }
    else if (keys.s.pressed&& lastKey ==='s') {
        player.animate = true        
        player.image = player.sprites.down
        for(let i =0; i<boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position:{
                        x:boundary.position.x,
                        y: boundary.position.y - 3
                    }}
            })){ 
                moving = false
                break
            }
        }
        if (moving)
        movables.forEach((movable) => {
            movable.position.y -= 3})  
    }
    else if (keys.d.pressed&& lastKey ==='d') {
        player.animate = true        
        player.image = player.sprites.right
        for(let i =0; i<boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position:{
                        x:boundary.position.x-3,
                        y: boundary.position.y
                    }}
            })){ 
                moving = false
                break
            }
        }
        if (moving)
        movables.forEach((movable) => {
            movable.position.x -= 3})  
    }
    
}
animate()
 
//Tracks last key pressed for movement direction
let lastKey =''

//Event listeners for key press and release
window.addEventListener('keydown',(e)=>{
    switch (e.key){
        case 'w':
            keys.w.pressed = true
            lastKey ='w'
           break 

        case 'a':
            keys.a.pressed = true
            lastKey ='a'
           break 

        case 's':
            keys.s.pressed = true
            lastKey ='s'
           break 

        case 'd':
            keys.d.pressed = true
            lastKey ='d'
           break 
    }
})
window.addEventListener('keyup',(e)=>{
    switch (e.key){
        case 'w':
            keys.w.pressed = false
           break 

        case 'a':
            keys.a.pressed = false
           break 

        case 's':
            keys.s.pressed = false
           break 

        case 'd':
            keys.d.pressed = false
           break 
    }
})

let clicked = false
addEventListener('click', () =>{
    if (!clicked){
    audio.Map.play()
    clicked = true
    }
})