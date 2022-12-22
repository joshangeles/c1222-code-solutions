var books = [
  {
    isbn: 123456789,
    title: 'Krampus McDampus',
    author: 'Dampus McKrampus'
  },
  {
    isbn: 987654321,
    title: 'Why the Rejoinings aren\'t THAT bad',
    author: 'Emet-Selch'
  },
  {
    isbn: 13379001,
    title: 'The 13 Shards of Etheirys',
    author: 'Venat'
  }
];
console.log('Book Array: ', books);
console.log('Book Array is a: ', typeof books);
console.log('Stringified Array: ', JSON.stringify(books));
console.log('The stringified array is a: ', typeof JSON.stringify(books));

var studentJSON = '{"id":2083777,"name":"Joshua Angeles"}';
console.log('studentJSON: ', studentJSON);
console.log('studentJSON is a: ', typeof studentJSON);
console.log('Parsed JSON: ', JSON.parse(studentJSON));
console.log('Parsed JSON is a: ', typeof JSON.parse(studentJSON));
