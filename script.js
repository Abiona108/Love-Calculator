var audioOne = document.getElementById('audioPlayer');
var audioTwo = document.getElementById('audioPlayer2');
var audioThree = document.getElementById('audioPlayer3');
var audioFour = document.getElementById('audioPlayer4');


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
            message.innerHTML = `${firstname.value} and ${partnername.value}, you two are not a good match. Move on with your life!💔😢`
            message.style.display = 'block'
            message.style.color = `white`
            message.style.background = `transparent`
            message.style.fontSize = `1.5em`
            audioThree.play();
            audioOne.pause();
            audioTwo.pause();
            audioFour.pause();

        } else if(love < 70){
            message.innerHTML = `${firstname.value} 💖 ${partnername.value}, You two are a good match and will make a good couple.`
            message.style.display = 'block'
            message.style.background = `deeppink`
            message.style.fontSize = `1.5em`
            audioFour.play();
            audioThree.pause();
            audioOne.pause();
            audioTwo.pause();
        } else if(love <= 100){
            message.innerHTML = `💖${firstname.value} & ${partnername.value}, You two are a match made in Heaven💖`
            message.style.display = 'block'
            message.style.color = `white`
            message.style.background = `transparent`
            message.style.fontSize = `1.5em`
            audioTwo.play();
            audioThree.pause();
            audioOne.pause();
            audioFour.pause();
        }
        firstname.value = '';
        partnername.value ='';
    }
    
}