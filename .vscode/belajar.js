const nama = [
    {
        username: "fatwa",
        asal: "jakarta",
        umur: 21,
    }
];

const sapaan = (username, asal, umur) => {
    console.log(`halo selamat malam ${username}`);

    if (asal === "jakarta") {
        console.log(`ternyata si ${username} dekat dengan daerah ku`);
    } else if (asal === "semarang") {
        console.log("dekat ini mah");
    } else {
        console.log("daerah mana tu");
    }
};

// loop melalui setiap data di array "nama"
nama.forEach((item, index) => {
    console.log(`${index} ini yang diproses:`, item);
    
    // panggil sapaan dengan data dari setiap item
    sapaan(item.username, item.asal, item.umur);
});