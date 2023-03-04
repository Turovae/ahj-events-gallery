import Form from '../Form/Form';
import Gallery from '../Gallery/Gallery';

export default class Container {
  constructor() {
    this.element = null;
    this.form = null;
    this.gallery = null;
  }

  bindToDOM(container) {
    let appContainer;
    if (typeof container === 'string') {
      appContainer = document.querySelector(container);
    } else {
      appContainer = container;
    }
    if (!(appContainer instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }

    this.element = appContainer;
  }

  drawUi() {
    this.gallery = new Gallery();
    this.form = new Form(this.gallery);
    this.form.drawUi();
    this.element.appendChild(this.form.element);

    this.gallery.drawUi();
    this.element.appendChild(this.gallery.element);
  }
}
