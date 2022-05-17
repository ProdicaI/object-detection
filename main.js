let img = "";
let status = ""; 

async function preload() {
  img = loadImage("dog_cat.jpg");
}

async function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();

  let objectDetector = ml5.objectDetector("cocossd", () => {
    console.log("Model loaded.");

    status = true;

    objectDetector.detect(img, (error, results) => {
      if (error) console.error(error);
        else console.log(results);
    });
  });

 document.getElementById("status").innerHTML = "Status: Detecting objects.";
}

async function draw() {
  image(img, 0, 0, 640, 480);

  fill("#FF0000");
  text("Dog", 45, 75);
  noFill();
  stroke("#FF0000");
  rect(30, 60, 450, 350);

  fill("#FF0000");
  text("Cat", 320, 120);
  noFill();
  stoke("#FF0000");
  rect(320, 120, 200, 350);
}
