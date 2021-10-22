let queue = [ "sheep", "wolf", "sheep", "sheep", "sheep"];
queue.reverse();
let position = queue.indexOf("wolf");
function warnTheSheep(queue) { 
  if (position == 0) {
    console.log("Pls go away and stop eating my sheep")
  } else {
  	console.log("Oi! Sheep number " + position + ". You are about to be eaten by a wolf!")
  }
}
warnTheSheep();
