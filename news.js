const request = require('request');
const cheerio = require('cheerio');

request('https://www.folha.uol.com.br/', (err, res, body) => {
  const $ = cheerio.load(body);
  
  console.log('----- \nMANCHETES:\n-----\n');

  $('.c-main-headline__title').each((i, element) => {
    const manchete = $(element).text();
    console.log(manchete + '. \n');
  });

  console.log('----- \nOUTRAS:\n-----\n');

  $('.c-headline__title').each((i, element) => {
    if (i < 6) {
      const title = $(element).text().slice(21);
      console.log(title);
    };
  });

  console.log('----- \nTOP 5:\n-----\n');

  $('.c-most-read__list li a').each((i, element) => {
    const topFive = $(element).text();
    console.log((i+1) + '. ' + topFive + '. \n');
  });
});