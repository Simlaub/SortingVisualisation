const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


let array = new Array(200);

function sleep(milliseconds) {
 return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function randomInt(min, max) {
  if (max == null) {
    max = Math.floor(min);
    min = 0;
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
  }
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function setupArray() {
  for (var i = 0; i < array.length; i++) {
    array[i] = new Bar(i, randomInt(1, 250));
    array[i].draw();
  }
}

function swap(a, i) {
  let temp = a[i].value;
  a[i].value = a[i+1].value;
  a[i+1].value = temp;
}

async function bubbleSort(a) {
  let length = a.length;

  for (var j = 0; j < a.length-1; j++) {
    for (var i = 0; i < length-1; i++) {
      if (a[i].value > a[i+1].value) {
        swap(a, i)
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var k = 0; k < a.length; k++) {
        a[k].draw();
      }
      await sleep();
    }

    if (length > 2) {
      length--

    } else {
      return;
    }
  }
}

setupArray()

console.log(array);

document.addEventListener("click", () => bubbleSort(array));
