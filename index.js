const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576
let startDialogue = false;
let wrapPresentQuest = false;
let presentDialogue = false;
let presentWrap = false;
let snowballFight = false;
let wrapDialogue = false;
let deliverGiftDialogue = false;
let wrapAfterDialogue = false;
let visitedHouses = 0;
let houseOneStep = false;
let houseTwoStep = false;
let houseThreeStep = false;
let yayPlayed = [false, false, false];
let bakeDialogue = false;
let doBakeCookies = false;
 
const offset = {
    x: -970,
    y:-1250
}

//collisions  

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

//present position 

const presentPenguinMap = [] 
for(let i=0; i < presentPenguinData.length; i+=70){
    presentPenguinMap.push(presentPenguinData.slice(i,70 +i))
}

const presentPenguins = []
presentPenguinMap.forEach((row, i) =>{
    row.forEach((symbol,j) => {
        if (symbol === 5322){
         presentPenguins.push(
            new Boundary({
                position:{
                    x:j*Boundary.width + offset.x,
                    y: i*Boundary.height + offset.y
         }}))}
    })
})

//house front

const houseFrontMap =[]
for(let i=0; i < houseFrontData.length; i+=70){
    houseFrontMap.push(houseFrontData.slice(i,70 +i))
}

const houseFronts = []

houseFrontMap.forEach((row, i) =>{
    row.forEach((symbol,j) => {
        if (symbol === 5322){
         houseFronts.push(
            new Boundary({
                position:{
                    x:j*Boundary.width + offset.x,
                    y: i*Boundary.height + offset.y
         }}))}
    })
})

//house1 position 
const houseOneMap = [] 
for(let i=0; i < houseOneData.length; i+=70){
    houseOneMap.push(houseOneData.slice(i,70 +i))
}

const houseOnes = []
houseOneMap.forEach((row, i) =>{
    row.forEach((symbol,j) => {
        if (symbol === 5322){
         houseOnes.push(
            new Boundary({
                position:{
                    x:j*Boundary.width + offset.x,
                    y: i*Boundary.height + offset.y
         }}))}
    })
})

//house2 position 
const houseTwoMap = [] 
for(let i=0; i < houseTwoData.length; i+=70){
    houseTwoMap.push(houseTwoData.slice(i,70 +i))
}

const houseTwos = []
houseTwoMap.forEach((row, i) =>{
    row.forEach((symbol,j) => {
        if (symbol === 5322){
         houseTwos.push(
            new Boundary({
                position:{
                    x:j*Boundary.width + offset.x,
                    y: i*Boundary.height + offset.y
         }}))}
    })
})

//house3 position 
const houseThreeMap = [] 
for(let i=0; i < houseThreeData.length; i+=70){
    houseThreeMap.push(houseThreeData.slice(i,70 +i))
}

const houseThrees = []
houseThreeMap.forEach((row, i) =>{
    row.forEach((symbol,j) => {
        if (symbol === 5322){
         houseThrees.push(
            new Boundary({
                position:{
                    x:j*Boundary.width + offset.x,
                    y: i*Boundary.height + offset.y
         }}))}
    })
})

//bakeDialogue 
const bakeMap = [] 
for(let i=0; i < bakeData.length; i+=70){
    bakeMap.push(bakeData.slice(i,70 +i))
}

const bakes = []
bakeMap.forEach((row, i) =>{
    row.forEach((symbol,j) => {
        if (symbol === 5322){
         bakes.push(
            new Boundary({
                position:{
                    x:j*Boundary.width + offset.x,
                    y: i*Boundary.height + offset.y
         }}))}
    })
})

//bakery Front 
const bakeryFrontMap = [] 
for(let i=0; i < bakeryFrontData.length; i+=70){
    bakeryFrontMap.push(bakeryFrontData.slice(i,70 +i))
}

const bakeryFronts = []
bakeryFrontMap.forEach((row, i) =>{
    row.forEach((symbol,j) => {
        if (symbol === 5322){
         bakeryFronts.push(
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
const movables = [background, ...boundaries, foreground, ...battleZones, ...startPositions, ...presentPenguins, ...houseFronts 
    , ...houseOnes, ...houseTwos, ...houseThrees, ...bakes, ...bakeryFronts
]

//Collision detection between two rectangular objects 
function rectangularCollision({rectangle1, rectangle2}){
    return (
        rectangle1.position.x+ rectangle1.width >= rectangle2.position.x && 
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y)
}
 
const battle = {
    initiated: true
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
    presentPenguins.forEach(presentpenguin => {
        presentpenguin.draw()
    })
    houseOnes.forEach(houseOne => {
        houseOne.draw()
    })
    houseTwos.forEach(houseTwo => {
        houseTwo.draw()
    })
    houseThrees.forEach(houseThree => {
        houseThree.draw()
    })
    bakes.forEach(bake => {
        bake.draw()
    })
    bakeryFronts.forEach(bakeryFront => {
        bakeryFront.draw()
    })

    player.draw()
    foreground.draw()

    let moving = true
    player.animate = false

    if (battle.initiated) return

    //snowball fight
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
    //present dialogue
    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed){
        for(let i =0; i<presentPenguins.length; i++){
            const presentpenguin = presentPenguins[i] 
            if (presentDialogue === false && startDialogue === true &&
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: presentpenguin  
                }) 
            ){  
                battle.initiated = true
                console.log('present dialogue')  
                presentDialogueText();
                break
            }
        }
    }

    //enter house
    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed){
        for(let i =0; i<houseFronts.length; i++){
            const houseFront = houseFronts[i] 
            if (presentWrap === false && presentDialogue === true &&
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: houseFront  
                }) 
            ){  
                battle.initiated = true
                console.log('enter house')  
                gsap.to('#overlappingDiv', {
                    opacity:1,
                    duration:0.4,
                    onComplete() {
                        gsap.to('#overlappingDiv', {
                            opacity:1,
                            duration:0.4,
                            onComplete() { 
                                audio.Map.stop()
                                audio.livingRoom.play() 
                                console.log('animate bake') 
                                startLivingRoom()
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

    //houseone 
    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed){
        for(let i =0; i<houseOnes.length; i++){
            const houseOne = houseOnes[i] 
            if (houseOneStep === false && wrapAfterDialogue === true &&
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: houseOne  
                }) 
            ){  
                houseOneStep = true
                visitedHouses++
            }
        }
    }  

    //housetwo 
    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed){
        for(let i =0; i<houseTwos.length; i++){
            const houseTwo = houseTwos[i] 
            if (houseTwoStep === false && wrapAfterDialogue === true &&
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: houseTwo  
                }) 
            ){  
                houseTwoStep = true
                visitedHouses++
            }
        }
    }  

     //housethree 
     if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed){
        for(let i =0; i<houseThrees.length; i++){
            const houseThree = houseThrees[i] 
            if (houseThreeStep === false && wrapAfterDialogue === true &&
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: houseThree  
                }) 
            ){  
                houseThreeStep = true
                visitedHouses++
                console.log(visitedHouses)
            }
        }
    }  

    //delivergift after
    if (wrapAfterDialogue === true && deliverGiftDialogue === false){
        if (visitedHouses === 0)
            document.querySelector('#currentTaskPlace').innerHTML= 'deliver the three gifts: 0/3 delivered'    
        if (visitedHouses === 1){
            document.querySelector('#currentTaskPlace').innerHTML= 'deliver the three gifts: 1/3 delivered' 
            document.querySelector('#presentThree').style.opacity = 0;
            if (!yayPlayed[0]) { // Play 'yay' only if it hasn't been played
                audio.yay.play();
                yayPlayed[0] = true; // Mark as played
            }}    
        if (visitedHouses === 2){
            document.querySelector('#currentTaskPlace').innerHTML= 'deliver the three gifts: 2/3 delivered'  
            document.querySelector('#presentTwo').style.opacity = 0;
            if (!yayPlayed[1]) { // Play 'yay' only if it hasn't been played
                audio.yay.play();
                yayPlayed[1] = true; // Mark as played
            }}     
        if (visitedHouses === 3) {
            document.querySelector('#currentTaskPlace').innerHTML= 'deliver the three gifts: 3/3 delivered'  
            document.querySelector('#presentOne').style.opacity = 0;
            deliverGiftAfterDialogue() 
            if (!yayPlayed[2]) { // Play 'yay' only if it hasn't been played
                audio.yay.play();
                yayPlayed[2] = true; // Mark as played
            }}   
    }

    //bakeDialogue
    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed){
        for(let i =0; i<bakes.length; i++){
            const bake = bakes[i] 
            if (bakeDialogue === false && deliverGiftDialogue === true &&
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: bake  
                }) 
            ){  
                battle.initiated = true;
                doBakeDialogue();
                break
                
            }
        }
    }  

    
    //bakeCookies
    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed){
        for(let i =0; i<bakeryFronts.length; i++){
            const bakeryFront = bakeryFronts[i];
             
            if (doBakeCookies === false && bakeDialogue === true && activeDialogue === false &&
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: bakeryFront  
                }) 
            ){ 
                console.log('battle zone collision') 
                window.cancelAnimationFrame(animationId)
                audio.Map.stop()
                audio.livingRoom.play()
                battle.initiated = true
                gsap.to('#overlappingDiv', {
                    opacity:1,
                    duration:0.4,
                    onComplete() {
                        gsap.to('#overlappingDiv', {
                            opacity:1,
                            duration:0.4,
                            onComplete() { 
                                animateBakery()
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
// animate()
 
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