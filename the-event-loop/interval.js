let currentCount = 3;
const countdown = setInterval(() => {
  if (currentCount > 0) {
    console.log(currentCount);
    currentCount--;
  } else {
    console.log('Blast Off!');
    clearInterval(countdown);
  }
}, 1000);
