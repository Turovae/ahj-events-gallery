import ImgItm from '../ImgItem/ImgItm';

export default class Gallery {
  constructor() {
    this.element = null;
    this.gallery = new Set();

    this.remove = this.remove.bind(this);
  }

  drawUi() {
    this.element = document.createElement('div');
    this.element.classList.add('gallery');
  }

  async add(element) {
    const imgEl = new ImgItm(element.name, element.url, this.remove);
    try {
      await imgEl.load();
      this.gallery.add(imgEl);
      this.redraw();
    } catch (e) {
      throw new Error(e.message);
    }
  }

  redraw() {
    [...this.gallery].forEach((item) => {
      this.element.appendChild(item.element);
    });
  }

  remove(item) {
    this.gallery.delete(item);
    this.redraw();
  }
}
