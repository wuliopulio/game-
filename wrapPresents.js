let fishCount = 0;

function startLivingRoom() {  
    battle.initiated = true;
    document.querySelector('#livingRoom').style.opacity = 1;
    setTimeout(livingRoomDialogue,500)
    document.getElementById('gifts').style.display = 'block';
    gsap.to('#gifts', { opacity: 1, delay: 4, duration: 7, }); 
    document.querySelector('#fishOne').addEventListener('click', ()=> { 
            document.querySelector('#fishOne').style.opacity = '0',
            fishCount++
            checkFishCount()});
            
    document.querySelector('#fishTwo').addEventListener('click', ()=> { 
        document.querySelector('#fishTwo').style.opacity = '0',
        fishCount++});

    document.querySelector('#fishThree').addEventListener('click', ()=> { 
         document.querySelector('#fishThree').style.opacity = '0',
        fishCount++
        checkFishCount()});
}
 

function checkFishCount() { 
    if (fishCount === 3) {
        
        audio.livingRoom.stop()
        audio.victory.play()
        
        presentWrap = true
        gsap.to('#overlappingDiv', {
            delay:1.5,
            opacity:1,
            onComplete: () => { 
                document.querySelector('#livingRoom').style.opacity= 0;
                gsap.to('#overlappingDiv',{
                    opacity:0
                }) 
                setTimeout(() => {
                    audio.Map.play();
                    battle.initiated = false;
                }, 1500);
                
                
        livingRoomAfterDialogue()
        document.querySelector('#presentOne').style.opacity = 1;
        document.querySelector('#presentTwo').style.opacity = 1;
        document.querySelector('#presentThree').style.opacity = 1;
    }})
    }
}

//startLivingRoom()
