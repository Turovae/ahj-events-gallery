import './ImgItm.css';

export default class ImgItm {
  constructor(name, url, remCallback) {
    this.element = null;
    this.name = name;
    this.url = url;
    this.removeImg = remCallback;

    this.img = null;
    this.delete = this.delete.bind(this);
  }

  create() {
    this.element = document.createElement('div');
    this.element.classList.add('gallery-item');
    this.element.appendChild(this.img);

    this.img.alt = this.name;
    this.img.classList.add('item-img');

    const imgNameEl = document.createElement('div');
    imgNameEl.classList.add('item-name');
    imgNameEl.textContent = this.name;
    this.element.appendChild(imgNameEl);

    const imgItmDelBtn = document.createElement('button');
    imgItmDelBtn.classList.add('item-delete');
    imgItmDelBtn.textContent = 'X';
    this.element.appendChild(imgItmDelBtn);
    imgItmDelBtn.addEventListener('click', this.delete);
  }

  load() {
    this.img = document.createElement('img');
    this.img.src = this.url;

    return new Promise((resolve, reject) => {
      this.img.onload = () => {
        this.create();
        resolve(true);
      };
      this.img.onerror = () => {
        reject(new Error('Неверный URL изображения'));
      };
    });
  }

  delete() {
    this.element.remove();
    this.removeImg(this);
  }
}
