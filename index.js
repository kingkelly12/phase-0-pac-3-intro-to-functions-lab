function shout(string) {
    return string.toUpperCase();
  }

function whisper(string) {
    console.log(string);
    return string.toLowerCase();
}

function logShout(string) {
    console.log(whisper(string.toUpperCase()));  
}

function logWhisper(string) {
    console.log(logShout(string.toLowerCase()));
}

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
      return "I can't hear you!";
    } else if (string.toUpperCase() === string) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  