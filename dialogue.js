function startDialogueText(){
     
    document.querySelector('#dialogueText').style.display = 'block'
    document.querySelector('#dialogueWords').innerHTML = 'blahblahblah'  
    document.querySelector('#speakerName').innerHTML = 'penguin1' 
    clickOut()
    startDialogue = true;
}
function clickOut(){
    document.querySelector('#dialogueText').addEventListener('click', () => { 
        document.querySelector('#dialogueText').style.display = 'none'
        battle.initiated = false
    })
}