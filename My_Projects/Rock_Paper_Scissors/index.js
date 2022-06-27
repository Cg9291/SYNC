let rockImg="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3bdb2575-9a92-42f8-8472-bb78c7bd118a_720x405.jpeg";

let paperImg="https://cdn.shopify.com/s/files/1/1320/9925/products/REC_TP_5_3x_52b64ff0-b2d4-4787-908a-7085eb3164c0_1120x1120.jpg?v=1610477216";

let scissorsImg="https://static.toiimg.com/thumb/msid-54252598,width=1200,height=900/54252598.jpg";


let numRef=[
  rockImg,
  paperImg,
  scissorsImg
]

function userChoice(id){
  switch(id){
    case "the-rock":
     document.getElementById("user-img").src=rockImg;
      break;
    case "the-paper":
      document.getElementById("user-img").src=paperImg;
      break;
    case "the-scissors":
      document.getElementById("user-img").src=scissorsImg;
  }

  let randomNum=Math.floor(Math.random()*3);
  document.getElementById("cpu-img").src=numRef[randomNum];

}
