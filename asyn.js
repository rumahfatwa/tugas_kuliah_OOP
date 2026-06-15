const token = ~~[Math.random() * 122334344];

const picture = ["tiga.jpg", "empat.jpg", "lima.jpg"];

function Login(username) {
  console.log("precessing sedang memproses");
  return new Promise((succes, failed) => {
    if (username != "muh fatwa") failed("sorry wrong data");
    setTimeout(() => {
      succes({ token });
    }, 300);
  });
}

function Getuser(token) {
  console.log("processing apikey");

  return new Promise((succes, failed) => {
    if (!token) failed("mohon maaf token anda tidak ada");
    setTimeout(() => {
      succes({ API: "FEAIOE" });
    }, 500);
  });
}

function Getpickture(API) {
  console.log("ini adalah memproses picture....");

  return new Promise((succes, failed) => {
    if (!API) failed("mohon maaf api key tidak di temukan");
    setTimeout(() => {
      succes({ p: ["foto.jpg", "foto2.jpg", "foto3.jpg"] });
    }, 500);
  });
}

async function userDisplay() {

  try{
 const { token } = await Login("muh fatwa");
  const { API } = await Getuser(token);
  const {p} = await Getpickture(API);
  console.log(`token: ${token}
    apikey ${API}
    picture ${p}`);
  }catch(err){
  console.log(err)
}
 
}

userDisplay();
