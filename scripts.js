let data = [{
  photo: 'img/01.jpg',
  title: 'My title',
  description: 'What happened here, why is this a very nice image'
}, {
  photo: 'img/02.jpg',
  title: 'My title 2',
  description: 'What happened here, why is this a very nice image 2'
}, {
  photo: 'img/03.jpg',
  title: 'My title 3',
  description: 'What happened here, why is this a very nice image 3'
}, {
  photo: 'img/04.jpg',
  title: 'My title 4',
  description: 'What happened here, why is this a very nice image 4'
}, {
  photo: 'img/05.jpg',
  title: 'My title ',
  description: 'What happened here, why is this a very nice image '
}, {
  photo: 'img/06.jpg',
  title: 'My title 6',
  description: 'What happened here, why is this a very nice image 6'
}, {
  photo: 'img/07.jpg',
  title: 'My title 7',
  description: 'What happened here, why is this a very nice image 7'
}, {
  photo: 'img/08.jpg',
  title: 'My title 8',
  description: 'What happened here, why is this a very nice image 8'
}, {
  photo: 'img/09.jpg',
  title: 'My title 9',
  description: 'What happened here, why is this a very nice image 9'
}, {
  photo: 'img/10.jpg',
  title: 'My title 10',
  description: 'What happened here, why is this a very nice image 10'
}];

let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', data[currentPhoto].photo);
}

loadPhoto(currentPhoto);

$('#r_arrow').click(() => {
  currentPhoto++;
  
  if (currentPhoto >= data.length) {
    currentPhoto = 0;
  }

  loadPhoto(currentPhoto);
})

$('#l_arrow').click(() => {
  currentPhoto--;

  if (currentPhoto < 0) {
    currentPhoto = 9;
  }

  loadPhoto(currentPhoto);
})