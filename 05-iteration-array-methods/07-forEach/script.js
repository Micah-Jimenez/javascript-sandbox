const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// console.log(socials.__proto__);

// socials.forEach((n, index, arr) => console.log(`${index} - ${n}`, arr));

function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials)

const socialObjs = [
  {name: 'Twitter', url: 'https://twitter.com'},
  {name: 'Facebook', url: 'https://facebook.com'},
  {name: 'Linkedin', url: 'https://linkedin.com'},
  {name: 'Instagram', url: 'https://instagram.com'},
]

socialObjs.forEach(n => console.log(n.url))