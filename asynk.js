const token = ~~[Math.random() * 122334344];

const picture = ["tiga.jpg", "empat.jpg", "lima.jpg"];

function Login(username, callback) {
  console.log("precessing sedang memproses");

  setTimeout(() => {
    return callback({ token, username });
  });
}

function Getuser(token,callback) {
  console.log("processing apikey");

  if(token)
  setTimeout(() => {
     return callback({API:"KKFAOF"})
  },500);
}

function Getpickture(API,callback) {

  console.log("ini adalah memproses picture....")

  if(API) 
  setTimeout(()=>{
   return callback({p: ["foto.jpg","foto2.jpg","foto3.jpg"]})
  })
  
}

Login("muhfatwa", function (response) {
  console.log("kelar", response);
  const {token}= response;

 Getuser(token, function(response){
  const {API} = response;
  console.log(API);

  Getpickture(API, function(response){
    const {p} = response;
    console.log(p);
  })
 })


});
