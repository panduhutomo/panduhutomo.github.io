// local reviews data
const reviews = [
    {
      id: 1,
      name: 'Dave Franklin',
      job: 'Dancing About Architecture',
      img: '/img/dave.jpg',
      text: '"Wasted Hearts: A Love Story for the (Loveless) Ages" is a great album, and a surprising one too. It blends indie cool with pop infectiousness and delicate understatement with rock and roll excess. It is lyrically astute and the musical construction and sonic craftsmanship seem to hark back to an earlier, more classic age. If there is any justice in the world these songs should be on everyone’s lips, every radio playlist and in everybody’s record collections.',
      link: 'https://dancing-about-architecture.com/wasted-hearts-a-love-story-for-the-loveless-ages-pandu-hutomo-reviewed-by-dave-franklin/',
    },
    {
      id: 2,
      name: 'Philipp Gottfried',
      job: 'She Wolf Magazin',
      img: '/img/shewolf.jpg',
      text: '"Mojang Supremacy" ist ein Rocksong, der weder zu eingängig, noch zu komplex ist, sondern der flüssig läuft und durch Melodien und Harmonien überzeugt ... Mit musikalischem Feingefühl, lässt er einen Song nieder, wie er (und das ist ein Kompliment!) perfekt in den Soundtrack von Teenie-Streifen wie American Pie gepasst hätte.',
      link: 'https://shewolf.eu/pandu-hutomo-mit-energischem-rocksong-huldigt-er-der-mojang-supremacy-audio-alternative-rock-indie-rock/',
    },
    {
      id: 3,
      name: 'Rick @JamSphere',
      job: 'TunedLoud!',
      img: '/img/tunedloud.png',
      text: '“Madeleine of Rogues” is a stunning and evocative mix of songs that will have a huge impact on unsuspecting listeners ... Pandu Hutomo makes his music accessible while constantly keeping in mind to affirm his trademark originality without compromise.',
      link: 'https://www.tunedloud.com/2021/08/24/pandu-hutomo-madeleine-of-rogues-makes-your-head-spin-creativity-and-precision-filled-performances/',
    },
    {
      id: 4,
      name: 'Tom @B8R',
      job: 'Broken 8 Records',
      img: '/img/broken8.jpg',
      text: 'Like the partners that Pandu loved and lost, each track on the album shines with its own character, detailing the lessons learnt and the scars that are still healing. An ultimately expressive blend of cool indie sounds and emotive pop melodies, "Wasted Hearts" is lyrically moving and brilliantly crafted, arriving as one of the great undiscovered gems of the year so far.',
      link: 'https://broken8records.com/blogs/reviews/pandu-hutomo-wasted-hearts-a-love-story-for-the-loveless-ages',
    },
    {
      id: 5,
      name: 'Bob Smith',
      job: 'The Static Dive',
      img: '/img/staticdive.png',
      text: 'An epic narrative of love and regret ... “South City” is an accomplishment in both literary storytelling and Pop song craftsmanship.',
      link: 'https://staticdive.com/2020/06/14/pandu-hutomo-south-city/',
    },
    {
      id: 6,
      name: 'Jer@SBS',
      job: 'Sleeping Bag Studios',
      img: '/img/sbs.jpeg',
      text: 'The hooks of “Insane” are wildly strong on their own ... it’s the way that he performs this single with such focused intensity, powerful melody & authentic passion combined that gets the absolute most out of it, and proves that Hutomo’s got a genuine gift for this whole music thing. ',
      link: 'https://sleepingbagstudios.ca/pandu-hutomo-insane/',
    },
  ];
  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.innerHTML = `<a href="${item.link}" target="_blank">${item.job}</a>`;
    info.innerHTML = item.text.replace(/(Wasted Hearts|Mojang Supremacy|Madeleine of Rogues|Pandu Hutomo|Insane|South City)/g, '<b>$1</b>').replace(/(classic|American Pie|epic|genuine)/g, '<i>$1</i>');
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.innerHTML = `<a href="${item.link}" target="_blank">${item.job}</a>`;
    info.innerHTML = item.text.replace(/(Wasted Hearts|Mojang Supremacy|Madeleine of Rogues|Pandu Hutomo|Insane|South City)/g, '<b>$1</b>').replace(/(classic|American Pie|epic|genuine)/g, '<i>$1</i>');
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });