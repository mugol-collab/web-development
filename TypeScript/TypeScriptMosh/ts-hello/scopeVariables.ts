function doSomething() {
    for (let i = 0; i < 5; i++){    // let define alcance de bloque
        console.log(i);             // y var alcance de función
    }
    console.log('Finally: ' + i);
}

doSomething();