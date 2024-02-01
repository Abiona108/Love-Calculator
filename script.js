var songToPlay_2 = new Audio("audio/pity.mp3")
songToPlay_3.play()
songToPlay.pause()
function submit(){
    const firstname = document.getElementById('firstname')
    const partnername = document.getElementById('partnername')
    const errorMessage = document.getElementById('errorMessage')
    const answer = document.getElementById('answer')
    const message = document.getElementById('message')
    
    if (firstname.value == '' || partnername.value == '') {
        errorMessage.style.display ="block";
        errorMessage.style.color = 'orange'
    } else if (firstname.value.length <3 || partnername.value.length <3){
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = "Names must be minimum of 3 character each"
        errorMessage.style.color = 'orange'
    }else{
        var love = Math.ceil(Math.random()*100)
        answer.innerHTML = love+'%'
        answer.style.display = 'block'
        errorMessage.style.display ="none"; 
        
        if (love < 40) {
            message.innerHTML = `${firstname.value} and ${partnername.value}, you both are not a good match.💔😢`
            message.style.display = 'block'
            message.style.color = `white`
            message.style.background = `transparent`
            message.style.fontSize = `1.5em`
        } else if(love < 70){
            message.innerHTML = `❤${firstname.value} and ${partnername.value}, Your relation is good and you will make a good couple.❤`
            message.style.display = 'block'
            message.style.background = `deeppink`
            message.style.fontSize = `1.5em`
        } else if(love <= 100){
            message.innerHTML = `💖${firstname.value} and ${partnername.value}, You are both a match made from Heaven💖`
            message.style.display = 'block'
            message.style.color = `white`
            message.style.background = `transparent`
            message.style.fontSize = `1.5em`
        }
        firstname.value = '';
        partnername.value ='';
    }
}