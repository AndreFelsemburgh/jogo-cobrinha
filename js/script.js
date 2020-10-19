let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

let snake = []; 
// Aqui passamos o que vai ter dentro do Array da cobrinha. 
// Dando um tamanho para snake.
snake[0] = {
    x: 8 * box, 
    y: 8 * box
}


function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

/* 
vamos criar a cobrinha. Ela será um Array de coordenadas. E ela vai trabalhar da seguinte forma: vamos adicionar um elemento e retirar o último para fazer ela andar.
E com essa cobrinha vamos trabalhar com o FOR, já que ela será um ARRAY
*/
 
// O for vai percorrer todo o tamanho do nosso ARRAY e vai INCREMENTAR. 
function criarCobrinha() {
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";  // passamos o contexto denovo, só que dessa vez ele está relacionado a cobrinha, então não precisa setar denovo o nome dele. E estamos dando uma cor verde para a cobrinha
        context.fillRect(snake[i].x, snake[i].y, box, box); // Aqui refere-se ao tamanho da cobrinha. [i].x e [i].y vai ser o tamanho que foi passado lá em cima que é 8 vezes o tamanho da nossa variável box. E o tamanho de box que vai ser o tamanho do quadradinho.
    }
}

criarBG();
criarCobrinha(); // E chamamos a função de criarCobrinha