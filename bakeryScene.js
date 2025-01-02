let pourFlourBool = false;
let pourSugarBool = false;
let pourButterBool = false;
let crackEggBool = false;
let pourChocolateChipsBool = false;
let mixBowlBool = false;
let bakeCookiesBool = false;
let showIngredients = false;
var animData = { 
        container: document.getElementById('clockAnimation'),  
        renderer: 'svg',  
        loop: false, 
        autoplay: true, 
        path: './data/clockAnimation.json',
}

let bakeryAnimationId

function animateBakery(){
    document.getElementById('recipe').style.opacity = 1;
    document.getElementById('quest').style.opacity = 0; 
    bakeryAnimationId= window.requestAnimationFrame(animateBakery)
    // bakeryBackground.draw() 
    if (!showIngredients){
        document.getElementById('ingredients').style.opacity = 1;
        document.getElementById('ingredients').style.pointerEvents = 'auto'; 
        document.getElementById('bakeryForeground').style.display = "block"; }
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

    if (!mixBowlBool && pourChocolateChipsBool){ 
        document.getElementById('bakeryForeground').style.pointerEvents = 'auto';
        document.getElementById('bakeryForeground').style.cursor = 'pointer';
        document.getElementById('bakeryForeground').addEventListener('click',mixBowl); }

    if (!bakeCookiesBool && mixBowlBool){ 
        document.getElementById('bakeButton').style.pointerEvents = 'auto';
        document.getElementById('bakeButton').style.display = 'block';
        document.getElementById('bakeryForeground').style.display = 'none';
        gsap.to('#bakeButton',{
            opacity:'1',
        }); 
        showIngredients = true;
        gsap.to('#ingredients', {
            opacity:'0'
        })  
        gsap.to('#bakeryForeground', {
            opacity:'0'
        })  
        document.getElementById('bakeryBackgroundImageBlank').style.opacity = 1;
        gsap.to('#bakeryBackgroundImageAfterMixing', {
            opacity:'0'
        })  
        document.getElementById('bakeButton').addEventListener('click', () => {
            console.log('bakeButton clicked');
            bakeCookies(); 
        });    
    
}}

function bakeCookies(){ 
    if (!bakeCookiesBool && mixBowlBool){
    bakeCookiesBool= true; 
        console.log('bool true')
        gsap.to('#bakeButton', {
            opacity:'0',
            onComplete(){ 
            document.getElementById('bakeButton').style.display = 'none';
            document.getElementById('clockAnimation').style.display = 'block';
            document.getElementById('bakeryBackgroundImageWithCookies').style.opacity = '1';
            anim = lottie.loadAnimation(animData);
            
            gsap.to('#clockAnimation',{
                opacity:1
            })
            anim.addEventListener('complete', function() {
                gsap.to('#clockAnimation', {
                    opacity:0,
                    onComplete(){
                        gsap.to('#bakeryBackgroundImageBlank',{opacity:0,
                            onComplete(){
                                document.querySelector('#bakeStep').innerHTML = "&#9745; Bake Cookies!"; 
                                audio.livingRoom.stop() 
                                audio.victory.play() 
                                setTimeout(doneBaking, 2500)
                            }
                        })
                    }
                })
              });
            }        
    });
    }    
}

function doneBaking(){ 
    gsap.to('#overlappingDiv', {
        opacity:1,
        onComplete: () => {
            cancelAnimationFrame(animateBakery)
            animate()
            document.getElementById('recipe').style.display= 'none'
            gsap.to('#overlappingDiv',{
                opacity:0
            }) 
            gsap.to('#bakeryBackgroundImageWithCookies',{
                opacity:0
            }) 
            battle.initiated = false
            doBakeCookies = true
            audio.Map.play()  
            afterBakeDialogue()
        }
    })
}

function mixBowl(){
    document.getElementById('bakeryBackgroundImageAfterMixing').style.opacity = '1'; 
    document.getElementById('bakeryForeground').style.opacity = '1'; 
    if (!mixBowlBool && pourChocolateChipsBool){
        gsap.to('#whisk',{
            duration: 1,
            opacity:1
        })
        gsap.to('#whisk',{
            bottom:90,
            delay:1,
            onComplete(){
                gsap.to('#whisk',{
                    opacity: 1,
                    rotation: '-20deg',
                    onComplete(){
                        gsap.to('#whisk',{
                            opacity: 1,
                            rotation: '40deg',
                            onComplete(){
                                gsap.to('#bakeryBackgroundImageAfterChocolateChips', { opacity: 0,    });
                                gsap.to('#whisk',{
                                    opacity: 1,
                                    rotation: '-40deg',
                                    onComplete(){
                                        gsap.to('#whisk',{
                                            opacity: 1,
                                            rotation: '40deg',
                                            onComplete(){
                                                gsap.to('#whisk',{
                                                    opacity: 1,
                                                    rotation: '0deg',
                                                    onComplete(){
                                                        gsap.to('#whisk',{
                                                            bottom: 120,onComplete(){ 
                                                                document.querySelector('#mix').innerHTML = "&#9745; Mix mix mix ";
                                                                document.querySelector('#bakeryForeground').style.cursor = "auto ";
                                                                document.querySelector('#bakeryForeground').style.display = "none ";
                                                                document.querySelector('#bakeryForeground').style.opacity = "0";
                                                                gsap.to('#whisk',{
                                                                    opacity: 0,
                                                                    onComplete(){
                                                                        
                                                                        mixBowlBool = true; 
                                                                    }
                                                            })
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }})
        
    } 
}

function pourChocolateChips() {
    document.getElementById('bakeryBackgroundImageAfterChocolateChips').style.opacity = '1'; 
         
    if (!pourChocolateChipsBool && crackEggBool) {
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
                    gsap.to('#bakeryBackgroundImageAfterEgg', { opacity: 0,    });
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
if (!crackEggBool  && pourButterBool) {
    document.getElementById('bakeryBackgroundImageAfterEgg').style.opacity = '1'; 
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
                    bottom:'240px',
                    left:'425px',
                    ease: "power1.inOut",
                    onComplete(){
                        gsap.to('#eggCrackedImage', {
                            delay: 0.2,
                            duration: 1,
                            bottom: '200px',
                            left:'520px',
                            rotation: '30deg',
                            // ease: "power1.in",
                            onComplete(){
                                gsap.to('#eggCrackedImage', {
                                    delay:0.4,
                                    opacity: 0
                                });
                                gsap.to('#eggOpenedImage', {
                                    delay:1,
                                    opacity: 1, 
                                    onComplete(){ 
                                        gsap.to('#eggOpenedImage', { delay:1,opacity: 0,    });
                                        gsap.to('#bakeryBackgroundImageAfterButter',{delay:1,opacity: 0});
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
    document.getElementById('bakeryBackgroundImageAfterButter').style.opacity = '1'; 
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
                        gsap.to('#bakeryBackgroundImageAfterSugar',{opacity: 0});
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
    document.getElementById('bakeryBackgroundImageAfterSugar').style.opacity = '1'; 
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
                        gsap.to('#bakeryBackgroundImageAfterFlour',{opacity: 0});
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
                document.getElementById('bakeryBackgroundImageAfterFlour').style.opacity = '1'; 
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
                            gsap.to('#bakeryBackgroundImage',{opacity:0})
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




// animateBakery()
 