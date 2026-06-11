
const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




function tanya(pertanyaan){
    return new Promise((resolve)=>{
        rl.question(pertanyaan,resolve);

    });
}


async function main(){
    const hasil = [];


    for(let i = 1; i <= 3; i++){
        const input = parseFloat(await tanya(`masukkan uang iyuran ${i} `));
        hasil.push(input);
    }



hasil.forEach((nilai,index)=>{
    console.log(`Iyuran ${index + 1}: ${nilai}`);
});


console.log("Total:", hasil.reduce((a,b)=> a+b,0))


rl.close()

}


main();