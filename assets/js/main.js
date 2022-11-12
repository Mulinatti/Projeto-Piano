function song(key) {

    const note = document.querySelector(key);
    note.currentTime = 0;
    note.play();
}

const keyList = document.querySelectorAll(".tecla");

for(let i = 0; i < keyList.length; i++) {
    
    const tecla = keyList[i];
    const som = tecla.classList[2];
    const audio = `#som_${som}`;

    tecla.onclick = () => {

        song(audio);
    }

    tecla.onkeydown = (e) => {

        console.log(e.keyCode);

        if(e.keyCode == 90) {

            console.log('z')
            tecla.classList.add("active");          
        }
    }

    tecla.onmouseup = () => {

        tecla.classList.remove("active");
    }

    tecla.onmouseleave = () => {

        tecla.classList.remove("active");
    }
}

let sum = (a, b) => {return a + b}

console.log(sum(1, 1));