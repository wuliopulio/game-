let pourFlourBool = false;
let pourSugarBool = false;
let pourButterBool = false;
let crackEggBool = false;
let pourChocolateChipsBool = false;

// const bakeryBackgroundImage = new Image()
// bakeryBackgroundImage.src = './img/kitchen.png'
// const bakeryBackground = new Sprite({position: {
//     x:0, 
//     y:0
// },
//     image: bakeryBackgroundImage, 
//     animate:true
// })

let bakeryAnimationId

function animateBakery(){
    document.getElementById('quest').style.opacity = 0; 
    bakeryAnimationId= window.requestAnimationFrame(animateBakery)
    // bakeryBackground.draw() 
    document.getElementById('bakeryBackgroundImage').style.display = "block"; 

    if (!pourFlourBool){
        document.getElementById('flourImage').style.cursor = 'pointer';
        pourFlour();}
    if (!pourSugarBool && pourFlourBool){ 
        document.getElementById('sugarImage').style.cursor = 'pointer';
        document.getElementById('sugarImage').addEventListener('click',pourSugar); }
     
    if (!pourButterBool && pourSugarBool){ 
        document.getElementById('butterImage').style.cursor = 'pointer';
        document.getElementById('butterImage').addEventListener('click',pourButter); }
        
    if (!crackEggBool && pourButterBool){ 
        document.getElementById('eggImage').style.cursor = 'pointer';
        document.getElementById('eggImage').addEventListener('click',crackEgg); }
    
    if (!pourChocolateChipsBool && crackEggBool){ 
        document.getElementById('chocolateChipsImage').style.cursor = 'pointer';
        document.getElementById('chocolateChipsImage').addEventListener('click',pourChocolateChips); }
    
}


function pourChocolateChips() {
         
    if (!pourChocolateChipsBool ) {
    pourChocolateChipsBool = true;   
    gsap.to('#chocolateChipsImage',{
        bottom: '180px',
        left: '428px',
        rotation: '90deg',
        ease: "power1.inOut",
        duration: 0.6,
        onComplete(){
            document.getElementById('chocolateChipsPouredImage').style.zIndex = '7';
            gsap.to('#chocolateChipsPouredImage',{
                opacity: 1,
                duration: 1,
                onComplete(){
                    document.getElementById('chocolateChipsImage').src = './img/emptyChocolateChipBowl.png';
                    gsap.to('#chocolateChipsPouredImage',{
                        opacity: 0,
                        onComplete(){
                        document.getElementById('chocolateChipsPouredImage').style.zIndex = '3';
                            gsap.to('#chocolateChipsImage',{
                                bottom: '40px',
                                left: '310px',
                                rotation: '0deg',
                                ease: "power1.inOut",
                                duration: 0.6,
                                onComplete(){
                                document.querySelector('#chocolateChips').innerHTML = "&#9745; Pour in chocolate chips ";
                                document.querySelector('#chocolateChipsImage').style.cursor = "auto ";
                                }
                            })
                } })
        }})
        }
    })}};
    
    

function crackEgg() {
        
    console.log("clicked")
if (!crackEggBool  && pourButterBool) {
crackEggBool = true;   
gsap.to('#eggImage',{
    bottom: '270px',
    left: '410px', 
    ease: "power1.inOut",
    duration: 0.7,
    onComplete(){ 
        gsap.to('#eggImage', {
            delay:0.5,
            bottom:'150px',
            left:'440px',
            duration:0.25,
            ease: "power1.out",
            onComplete(){  
                document.getElementById('eggImage').style.opacity = '0';
                document.getElementById('eggCrackedImage').style.opacity = '1';
                gsap.to('#eggCrackedImage', {
                    duration:0.3,
                    bottom:'270px',
                    left:'410px',
                    ease: "power1.in",
                    onComplete(){
                        gsap.to('#eggCrackedImage', {
                            delay: 0.8,
                            duration: 1,
                            bottom: '200px',
                            left:'520px',
                            rotation: '30deg',
                            // ease: "power1.in",
                            onComplete(){
                                gsap.to('#eggCrackedImage', {
                                    delay:0.5,
                                    opacity: 0
                                });
                                gsap.to('#eggOpenedImage', {
                                    delay:1,
                                    opacity: 1, 
                                    onComplete(){ 
                                        gsap.to('#eggOpenedImage', { delay:1,opacity: 0,    });
                                        document.querySelector('#egg').innerHTML = "&#9745; Crack an egg in";
                                        document.querySelector('#eggImage').style.cursor = "auto ";
                                    }
                                });
                            }
                        })
                    }
                })
            }
        })
    }
})}};


function pourButter() {
         
if (!pourButterBool && pourSugarBool) {
pourButterBool = true;   
gsap.to('#butterImage',{
    bottom: '200px',
    right: '210px',
    rotation: '-90deg',
    ease: "power1.inOut",
    duration: 0.6,
    onComplete(){
        document.getElementById('butterPouredImage').style.zIndex = '5';
        gsap.to('#butterPouredImage',{
            opacity: 1,
            duration: 1,
            onComplete(){
                gsap.to('#butterPouredImage',{
                    opacity: 0,
                    onComplete(){
                    document.getElementById('butterPouredImage').style.zIndex = '3';
                        gsap.to('#butterImage',{
                            bottom: '10px',
                            right: '90px',
                            rotation: '0deg',
                            ease: "power1.inOut",
                            duration: 0.6,
                            onComplete(){
                            document.querySelector('#butter').innerHTML = "&#9745; Pour some butter in ";
                            document.querySelector('#butterImage').style.cursor = "auto ";
                            }
                        })
            } })
    }})
    }
})}};



function pourSugar() { 
    if (!pourSugarBool && pourFlourBool) {
        pourSugarBool = true;   
        gsap.to('#sugarImage',{
            bottom: '207px',
            right: '223px',
            rotation: '-90deg',
            ease: "power1.inOut",
            duration: 0.7,
            onComplete(){
                gsap.to('#sugarPouredImage',{
                    opacity: 1,
                    duration: 1,
                    onComplete(){
                        gsap.to('#sugarPouredImage',{
                            opacity: 0,
                            onComplete(){
                                gsap.to('#sugarImage',{
                                    bottom: '30',
                                    right: '45px',
                                    rotation: '0deg',
                                    ease: "power1.inOut",
                                    duration: 0.7,
                                    onComplete(){
                                    document.querySelector('#sugar').innerHTML = "&#9745; Pour some sugar in ";
                                    document.querySelector('#sugarImage').style.cursor = "auto ";
                                    }
                                })
                    } })
            }})
            }
        })}};


function pourFlour() {
    
        document.querySelector('#flourImage').addEventListener('click',() => {
            if (!pourFlourBool){
                pourFlourBool = true;
            gsap.to('#flourImage',{
                bottom: '256px',
                right: '250px',
                rotation: '-90deg',
                ease: "power1.inOut",
                duration: 0.7,
                onComplete(){
                    gsap.to('#flourPouredImage',{
                        opacity: 1,
                        duration: 1,
                        onComplete(){
                            gsap.to('#flourPouredImage',{
                                opacity: 0,
                                onComplete(){
                                    gsap.to('#flourImage',{
                                        bottom: '55px',
                                        right: '100px',
                                        rotation: '0deg',
                                        ease: "power1.inOut",
                                        duration: 0.7,
                                        onComplete(){
                                        document.querySelector('#flour').innerHTML = "&#9745; Pour some flour in ";
                                        document.querySelector('#flourImage').style.cursor = "auto ";
                                        }
                                    })
                        } })
                }})
                }
            })}
    });
}




animateBakery()
 