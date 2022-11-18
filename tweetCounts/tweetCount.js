var tweet = prompt("Compose your tweet");
var tweetCount = tweet.length();
alert("You have written " + tweetCount + "characters, you have space" + (140 - tweetCount) + "characters remaining");