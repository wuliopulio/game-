let pourFlourBool = false;
let pourSugarBool = false;
let pourButterBool = false;
let crackEggBool = false;

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
        
    // if (!crackEggBool && pourButterBool){ 
    //     document.getElementById('eggImage').style.cursor = 'pointer';
    //     document.getElementById('eggImage').addEventListener('click',crackEgg); }
    
}

// function crackEgg() {
        
//     console.log("clicked")
// if (!pourButterBool && pourSugarBool) {
// pourButterBool = true;   
// gsap.to('#butterImage',{
//     bottom: '200px',
//     right: '210px',
//     rotation: '-90deg',
//     onComplete(){
//         document.getElementById('butterPouredImage').style.zIndex = '5';
//         gsap.to('#butterPouredImage',{
//             opacity: 1,
//             duration: 1,
//             onComplete(){
//                 gsap.to('#butterPouredImage',{
//                     opacity: 0,
//                     onComplete(){
//                     document.getElementById('butterPouredImage').style.zIndex = '3';
//                         gsap.to('#butterImage',{
//                             bottom: '10px',
//                             right: '90px',
//                             rotation: '0deg',
//                             onComplete(){
//                             document.querySelector('#butter').innerHTML = "&#9745; Pour some butter in ";
//                             document.querySelector('#butterImage').style.cursor = "auto ";
//                             }
//                         })
//             } })
//     }})
//     }
// })}};


function pourButter() {
        
    console.log("clicked")
if (!pourButterBool && pourSugarBool) {
pourButterBool = true;   
gsap.to('#butterImage',{
    bottom: '200px',
    right: '210px',
    rotation: '-90deg',
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
 