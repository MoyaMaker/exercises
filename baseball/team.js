class Team {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  add() {
    this.score++;
  }

  remove() {
    if (this.score > 0) {
      this.score--;
    }
  }

  reset() {
    this.score = 0;
  }

  toString() {
    return JSON.stringify({
      name: this.name,
      score: this.score
    });
  }
}

class Inning {
  constructor(inning, status) {
    this.inning = inning;
    this.status = status;
  }

  next() {
    if (this.status === Status.top) {
      this.status = Status.middle;
    } else if (this.status === Status.middle) {
      this.status = Status.bottom;
    } else {
      this.inning++;
      this.status = Status.top;
    }
  }

  prev() {
    if (this.status === Status.bottom) {
      this.status = Status.middle;
    } else if (this.status === Status.middle) {
      this.status = Status.top;
    } else {
      if (this.inning > 1) {
        this.inning--;
        this.status = Status.bottom;
      }
    }
  }

  reset() {
    this.inning = 1;
    this.status = Status.top;
  }

  toString() {
    return JSON.stringify({
      inning: this.inning,
      status: this.status
    });
  }
}

const Status = {
  top: "top",
  middle: "middle",
  bottom: "bottom"
}