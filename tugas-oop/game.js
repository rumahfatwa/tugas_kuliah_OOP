const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d");




let player = {
    x: 180,
    y: 550,
    width: 60,
    height: 20,
    speed: 6
};

let ball = {
    x: Math.random() * 380,
    y: 0,
    radius: 10,
    speed: 3
};


let score = 0;
let gameover = false;


document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") player.x -= player.speed;
    if (e.key === "ArrowRight") player.x += player.speed;
});

function update() {
    ball.y += ball.speed;
    if (
    ball.y + ball.radius >= player.y &&
    ball.x > player.x &&
    ball.x < player.x + player.width
) {
    score++;
    resetball()

}

if (ball.y > canvas.height) {
    gameover = true;
}
}


function resetball() {
    ball.y = 0;
    ball.x = Math.random() * canvas.width;

}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    ctx.fillRect(player.x, player.y, player.width, player.height);

    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillText("score :" + score, 10, 30);
    ctx.fill()

    if (gameover) {
        ctx.fillText("game over", 120, 300);
    }

}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}


gameLoop();








