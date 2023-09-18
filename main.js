const button = document.getElementById('button')
const social_pop = document.getElementById('social_pop')




button.addEventListener("click", function(){
    if (social_pop.style.visibility === 'hidden'){
        social_pop.style.visibility ='visible'
    }else{
        social_pop.style.visibility='hidden'
    }
})