function bible(msg) {
  const rating = Math.floor(10 * Math.random());
  const robertisms = ['And that is how you get to the final solution! ... Oh, wait.', 'I can\'t believe we\'re spending our time doing CSS.'];
  switch (msg.content.toLowerCase()) {
    case 'hi robert':
      msg.reply('Hello, my child');
      break;
    case 'bye robert':
      msg.reply(`Goodbye, ${msg.author.username}, I'm very impressed with how quickly you are picking up the curriculum!`);
      break;
    case 'vaporeon':
      msg.reply('Hey guys did you know that in terms of [REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED][REDACTED] ');
      break;
    case 'binary':
      msg.reply('01001000 01100101 01111001 00100000 01100111 01110101 01111001 01110011 00101100 00100000 01100100 01101001 01100100 00100000 01111001 01101111 01110101 00100000 01101011 01101110 01101111 01110111 00100000 01110100 01101000 01100001 01110100 00100000 01101001 01101110 00100000 01110100 01100101 01110010 01101101 01110011 00100000 01101111 01100110 00100000 01101101 01100001 01101100 01100101 00100000 01101000 01110101 01101101 01100001 01101110 00100000 01100001 01101110 01100100 00100000 01100110 01100101 01101101 01100001 01101100 01100101 00100000 01010000 01101111 01101011 11000011 10101001 01101101 01101111 01101110 00100000 01100010 01110010 01100101 01100101 01100100 01101001 01101110 01100111 00101100 00100000 01010110 01100001 01110000 01101111 01110010 01100101 01101111 01101110 00100000 01101001 01110011 00100000 01110100 01101000 01100101 00100000 01101101 01101111 01110011 01110100 00100000 01100011 01101111 01101101 01110000 01100001 01110100 01101001 01100010 01101100 01100101 00100000 01010000 01101111 01101011 11000011 10101001 01101101 01101111 01101110 00100000 01100110 01101111 01110010 00100000 01101000 01110101 01101101 01100001 01101110 01110011 00111111');
      break;
    case 'robert rate my meme':
      rating > 6
        ? msg.reply('Haha! This is an absolutely outstanding meme. Nice job!')
        : msg.reply('Nice job. I\'ve commented some changes that you could make to improve this meme.');
      break;
    case 'Do you approve my code Robert?':
      rating > 5
        ? msg.reply('This is very nice code. Well done. I made lots of comments that could improve it, but that\'s only because it was so well done to begin with that I could comment on those details.')
        : msg.reply('I\'ve commented some changes that you could make to improve this code.');
      break;
    case '?wisdom':
      msg.reply(robertisms[0]);
      break;
  }
}

module.exports = bible;
