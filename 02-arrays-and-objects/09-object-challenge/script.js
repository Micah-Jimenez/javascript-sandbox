library = [
  {
    title: 'Art of War',
    author: 'Sun Tzu',
    status: {
      own: false,
      reading: true,
      read: false,
    },
  },
  {
    title: 'Diary of a Wimpy Kid',
    author: 'Jeff Kinney',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Hatchet',
    author: 'Gary Paulsen',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].read = true;
library[1].read = true;
library[2].read = true;

const {title: firstBook} = library[0];

const str = JSON.stringify(library);

console.log(str);