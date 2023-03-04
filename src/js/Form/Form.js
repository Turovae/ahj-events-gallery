import './Form.css';

export default class Form {
  constructor(gallery) {
    this.element = null;
    this.nameEl = null;
    this.urlEl = null;
    this.btnEl = null;
    // this.errMsgEl = null;
    this.gallery = gallery;

    this.addImg = this.addImg.bind(this);

    this.drawUi();
  }

  drawUi() {
    this.element = document.createElement('form');
    this.element.classList.add('form');
    this.element.addEventListener('submit', this.addImg);

    const labelName = document.createElement('label');
    labelName.classList.add('form-item');
    labelName.textContent = 'Название';
    this.element.appendChild(labelName);

    this.nameEl = document.createElement('input');
    this.nameEl.classList.add('form-input');
    labelName.appendChild(this.nameEl);
    this.nameEl.required = 'required';

    const labelUrl = document.createElement('label');
    labelUrl.classList.add('form-item');
    labelUrl.textContent = 'Ссылка на изображение';
    this.element.appendChild(labelUrl);

    this.urlEl = document.createElement('input');
    this.urlEl.classList.add('form-input');
    labelUrl.appendChild(this.urlEl);
    this.urlEl.required = 'required';

    this.btnEl = document.createElement('button');
    this.btnEl.type = 'submit';
    this.btnEl.classList.add('form-btn');
    this.btnEl.textContent = 'Добавить';
    this.element.appendChild(this.btnEl);
  }

  async addImg(event) {
    event.preventDefault();

    const name = this.nameEl.value;
    const url = this.urlEl.value;

    try {
      await this.gallery.add({ name, url });
      this.nameEl.value = '';
      this.urlEl.value = '';
    } catch (e) {
      this.createErrMsg(e.message);
    }
  }

  createErrMsg(msg) {
    const errMsgEl = document.createElement('div');
    errMsgEl.classList.add('error-message');
    errMsgEl.textContent = msg;
    this.urlEl.insertAdjacentElement('afterend', errMsgEl);

    setTimeout(() => {
      errMsgEl.remove();
    }, 1000);
  }
}
