import Container from './Container/Container';

const container = new Container();
container.bindToDOM('.app');
container.drawUi();

// Тестовые добавления картинок
container.gallery.add({
  name: 'image1',
  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLBdorcj02q1KOF6DU8lB3tl_JhSan8kpUa8NmLT7&s',
});

container.gallery.add({
  name: 'image2',
  url: 'https://avatars.mds.yandex.net/i?id=16bc79b44a105d90def71ad8a7516e28_l-5882901-images-thumbs&n=27&h=384&w=480',
});
