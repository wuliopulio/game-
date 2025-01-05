let currentLineIndex = 0;  
let dialogueLines = [];  
let activeDialogue = false;

function startDialogueText() { 
    activeDialogue = true;
    dialogueLines = [
        { name: 'penguin 1', text: 'Oh gosh, hello! It\'s been so long since we\'ve had a visitor!', imageSrc: './img/penguin.png' },
        { name: 'penguin 1', text: 'Welcome, welcome! How are you? What\'s your name?', imageSrc: './img/penguin.png' },
        { name: 'penguin 1', text: `Oh, ${userName}? What a pretty name! `, imageSrc: './img/penguin.png' }  ,
        { name: 'penguin 1', text: `Say, Christmas is in a couple days and we could use some help around the village. Do you mind? `, imageSrc: './img/penguin.png' }  ,
        { name: `${userName}`, text: `Of course not! What do I have to do?  `, imageSrc: './img/playerImage.png' }    ,
        { name: 'penguin 1', text: `We\'re almost done with the preparations, so there shouldn't be too much left.`, imageSrc: './img/penguin.png' }  ,
        { name: 'penguin 1', text: 'It should just be wrapping presents, baking cookies, and putting the star up!', imageSrc: './img/penguin.png' }  ,
        { name: 'penguin 1', text: 'After that, we can light up the christmas tree! You think you got that?', imageSrc: './img/penguin.png' },
        { name: `${userName}`, text: 'Omg yes, I got this. First up, I\'ll wrap the presents!', imageSrc: './img/playerImage.png' } ,
        { name: `penguin 1`, text: 'Oh, if you want to wrap presents first, head over to penguin 2. He\'s right up ahead!', imageSrc: './img/penguin.png' } 

    ];
    currentLineIndex = 0;  
 
    showNextLine(); 

    document.querySelector('#dialogueText').addEventListener('click', showNextLine); 
    startDialogue = true;
}

function presentDialogueText() { 
    activeDialogue = true;
    dialogueLines = [
        { name: 'penguin 2', text: `Hello ${userName}! Penguin 1 told me about you! You\'re here to help, right?`, imageSrc: './img/penguin.png' },
        { name: `${userName}`, text: 'Ah, yes! You need help wrapping presents, right?', imageSrc: './img/playerImage.png' },
        { name: 'penguin 2', text: `That's right. But after wrapping them, we also need to deliver them.`, imageSrc: './img/penguin.png' } ,
        { name: `${userName}`, text: `Oh, to who? I thought we would place them under the tree.`, imageSrc: './img/playerImage.png' }  ,
        { name: 'penguin 2', text: `It's to the villagers! Some have a hard time wrapping them with their wings, so we help them out.`, imageSrc: './img/penguin.png' },
        { name: `${userName}`, text: `Aww, that's so sweet. How can I help? `, imageSrc: './img/playerImage.png' },
        { name: 'penguin 2', text: `Head over to the house with the red flower and blue bush in front. That's where we'll start.`, imageSrc: './img/penguin.png' }
    ];
    currentLineIndex = 0;  
 
    showNextLine(); 

    document.querySelector('#dialogueText').addEventListener('click', showNextLine);
    presentDialogue = true;
 
    document.querySelector('#currentTaskPlace').innerHTML= 'head to the house with a red flower and blue bush in front'
}

function livingRoomDialogue() { 
    activeDialogue = true;
    dialogueLines = [
        { name: 'penguin 3', text: `${userName}! Thanks so much for coming. `, imageSrc: './img/penguin.png' },
        { name: 'penguin 3', text: `We'll start right away. You ready? `, imageSrc: './img/penguin.png' },
        { name: 'penguin 3', text: `There are 3 fish on the ground. Click on them to wrap them up! `, imageSrc: './img/penguin.png' }
    ];
    currentLineIndex = 0;  
 
    showNextLine(); 

    document.querySelector('#dialogueText').addEventListener('click', showNextLine); 
    wrapDialogue = true;

    document.querySelector('#currentTaskPlace').innerHTML= 'click on the three fish'    
 
}

function livingRoomAfterDialogue() { 
    activeDialogue = true;
    dialogueLines = [
        { name: 'penguin 3', text: `${userName}! Wow you're so quick! `, imageSrc: './img/penguin.png' },
        { name: 'penguin 3', text: `After this, we just need to deliver them to their owners. It should be the three houses closest to us`, imageSrc: './img/penguin.png' },
        { name: 'penguin 3', text: `Thank you so much!`, imageSrc: './img/penguin.png' }
    ];
    currentLineIndex = 0;  
 
    showNextLine(); 

    document.querySelector('#dialogueText').addEventListener('click', showNextLine); 
    wrapAfterDialogue = true;

    document.querySelector('#currentTaskPlace').innerHTML= 'deliver the three gifts'    
 
}
function deliverGiftAfterDialogue() { 
    activeDialogue = true;
    dialogueLines = [
        { name: 'penguin 3', text: `That's all the gifts, then! Again, thanks so much! `, imageSrc: './img/penguin.png' },
        { name: `${userName}`, text: 'Of course! You\'re welcome. ', imageSrc: './img/playerImage.png' },
        { name: `${userName}`, text: 'Next, I\'ll go bake some cookies. Where would that be?', imageSrc: './img/playerImage.png' },
        { name: 'penguin 3', text: `Cookies! That\'ll be at the bakery, which is on the East side of the map. It's hard to miss.`, imageSrc: './img/penguin.png' },
        { name: `${userName}`, text: 'I see! I\'ll go there next then. Thank you!', imageSrc: './img/playerImage.png' }
    ];
    currentLineIndex = 0;  
 
    showNextLine(); 

    document.querySelector('#dialogueText').addEventListener('click', showNextLine); 
    deliverGiftDialogue = true;

    document.querySelector('#currentTaskPlace').innerHTML= 'Head over to penguin 4 (East/right)'    
    document.querySelector('#tasksCompleted').innerHTML= '1 / 3'   
    document.querySelector('#currentTaskName').innerHTML= 'Bake Cookies'      
 
}


function doBakeDialogue() { 
    activeDialogue = true;
    dialogueLines = [
        { name: 'penguin 4', text: `Oh my gosh! thanks for coming!`, imageSrc: './img/penguin.png' },
        { name: 'penguin 4', text: `You came just in time, I just broke my wing so I can't bake cookies!`, imageSrc: './img/penguin.png' },
        { name: `${userName}`, text: 'Oh no!! Don\'t worry, I can help with cookies.', imageSrc: './img/playerImage.png' }, 
        { name: 'penguin 4', text: `Thank you so much ;_; the bakery is right there! I have the recipe set up and everything.`, imageSrc: './img/penguin.png' },
        { name: `${userName}`, text: 'No problem! It\'ll be done in no time.', imageSrc: './img/playerImage.png' }
    ];
    currentLineIndex = 0;  
 
    showNextLine(); 

    document.querySelector('#dialogueText').addEventListener('click', showNextLine); 
    bakeDialogue = true;

    document.querySelector('#currentTaskPlace').innerHTML= 'Head over to bakery'    
    document.querySelector('#tasksCompleted').innerHTML= '1 / 3'   
    document.querySelector('#currentTaskName').innerHTML= 'Bake Cookies'      
 
}


function afterBakeDialogue() { 
    activeDialogue = true;
    dialogueLines = [
        { name: 'penguin 4', text: `Thanks so much for covering for me. What do you need to do next?`, imageSrc: './img/penguin.png' }, 
        { name: `${userName}`, text: 'I think the last thing I\'ll help with will be putting up the star', imageSrc: './img/playerImage.png' }, 
        { name: 'penguin 4', text: `Oh the star! Penguin 5 to the right should have it. Thanks so much again and good luck!`, imageSrc: './img/penguin.png' },
        { name: `${userName}`, text: 'No problem! ', imageSrc: './img/playerImage.png' }
    ];
    currentLineIndex = 0;  
 
    showNextLine(); 

    document.querySelector('#dialogueText').addEventListener('click', showNextLine); 
    afterBakeDialogueBool = true;

    document.querySelector('#currentTaskPlace').innerHTML= 'Head over to penguin 5'    
    document.querySelector('#tasksCompleted').innerHTML= '2 / 3'   
    document.querySelector('#currentTaskName').innerHTML= 'Put up star'      
 
}

function beforeSnowballDialogue() { 
    activeDialogue = true;
    dialogueLines = [
        { name: 'penguin 5', text: `Oh my god !! the village bully is here again!!`, imageSrc: './img/penguin.png' }, 
        { name: `${userName}`, text: 'What\'s going on? Where\'s the star?', imageSrc: './img/playerImage.png' }, 
        { name: 'penguin 5', text: `The bully took it... and he ran off to the plateau !!`, imageSrc: './img/penguin.png' },
        { name: `${userName}`, text: 'What! That\'s so mean. What can I do?', imageSrc: './img/playerImage.png' }, 
        { name: 'penguin 5', text: `Well, he says that he\'ll give it back if you win in a snowball fight against him`, imageSrc: './img/penguin.png' },
        { name: 'penguin 5', text: `But I have wings so I can\'t throw snowballs! `, imageSrc: './img/penguin.png' },
        { name: `${userName}`, text: 'No worries, I can throw snowballs. I got you!', imageSrc: './img/playerImage.png' }
    ];
    currentLineIndex = 0;  
 
    showNextLine(); 

    document.querySelector('#dialogueText').addEventListener('click', showNextLine); 
    snowballFightDialogue = true;

    document.querySelector('#currentTaskPlace').innerHTML= 'Head over to boy on platform'    
    document.querySelector('#tasksCompleted').innerHTML= '2 / 3'   
    document.querySelector('#currentTaskName').innerHTML= 'Put up star'      
 
}

function showNextLine() {
    if (currentLineIndex === 0)
        document.querySelector('#quest').style.display = 'block';
    if (currentLineIndex < dialogueLines.length) { 
        const { name, text, imageSrc } = dialogueLines[currentLineIndex];
 
        dialogueFramework(name, text, imageSrc);

        currentLineIndex++;
    } else { 
        activeDialogue = false;
        document.querySelector('#dialogueText').style.display = 'none';
        document.querySelector('#dialogueText').removeEventListener('click', showNextLine);
        document.querySelector('#quest').style.display = 'block';
        battle.initiated = false;
    }
    if (!activeDialogue) {
        gsap.to('#quest', {
            opacity: 0.9
        });
    } else {
        gsap.to('#quest',{
            opacity: 0
        })
    }
}

function dialogueFramework(name, string, image) {
    document.querySelector('#dialogueText').style.display = 'block';
    document.querySelector('#speakerName').innerHTML = name;

    document.getElementById('characterImage').src = image;

    var dialogueWords = document.getElementById('dialogueWords');
    dialogueWords.innerHTML = '';

    var typewriter = new Typewriter(dialogueWords, { loop: false,
        cursor: ' ',
        delay: 3
     });
        
    typewriter.typeString(string)
        .pauseFor(2500)
        .start();
}
