class Stopwatch {
  elapsedTimeInSeconds = 0;
  intervalId = null;
  start() {
    this.intervalId = setInterval(() => {
      this.elapsedTimeInSeconds++;
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.elapsedTimeInSeconds = 0;
  }
}

const sw1 = new Stopwatch();
sw1.start();
