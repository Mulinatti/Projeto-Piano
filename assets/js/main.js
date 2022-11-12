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

    tecla.onmousedown = () => {

        song(audio);
        tecla.classList.add("active");   
    }

    tecla.onmouseup = () => {

        tecla.classList.remove("active");
    }

    tecla.onmouseleave = () => {

        tecla.classList.remove("active");
    }
}