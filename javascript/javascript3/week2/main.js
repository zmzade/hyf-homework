const promise1 = moveElement(document.getElementById("red-button"), {
  x: 20,
  y: 300,
});
const promise2 = moveElement(document.getElementById("blue-button"), {
  x: 400,
  y: 300,
});
const promise3 = moveElement(document.getElementById("green-button"), {
  x: 400,
  y: 20,
});

async function translateOneByOne() {
  await moveElement(document.getElementById("red-button"), {
    x: 20,
    y: 300,
  });
  console.log("Red has been moved");
  await moveElement(document.getElementById("blue-button"), {
    x: 400,
    y: 300,
  });
  console.log("Blue has been moved");
  await moveElement(document.getElementById("green-button"), {
    x: 400,
    y: 20,
  });
  console.log("Green has been moved");
}
translateOneByOne();

function translateAllAtOnce() {
  Promise.all([promise1, promise2, promise3]).then(() =>
    console.log("all circles moved")
  );
}
translateAllAtOnce();
