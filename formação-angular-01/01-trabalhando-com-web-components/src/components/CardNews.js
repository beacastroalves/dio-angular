class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement('div');
    componentRoot.classList.add('card');

    const cardLeft = document.createElement('div');
    cardLeft.classList.add('card__left');
    const autor = document.createElement('span');
    autor.textContent = "By " + (this.getAttribute('autor') || "Anonymous");

    const linkTitle = document.createElement('a');
    linkTitle.textContent = this.getAttribute('title');
    linkTitle.href = this.getAttribute('url');
    linkTitle.target = this.getAttribute('target')

    const newsContent = document.createElement('p');
    newsContent.textContent = this.getAttribute('content');
    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement('div');
    cardRight.classList.add('card__right');
    const newsImage = document.createElement('img');
    newsImage.src = this.getAttribute('photo') || "./assets/userdefault.png";
    newsImage.alt = this.getAttribute('alt');
    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .card {
      width: 768px;
      display: flex;
      justify-content: space-between;
      box-shadow: 8px 8px 32px 0px rgba(0, 0, 0, 0.25);
      margin: 24px;
    }

    .card__left {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 16px;
    }

    .card__left span {
      display: flex;
      gap: 8px;
      align-items: center;
      font-weight: 40;
    }

    .card__left span img {
      width: 32px;
      border-radius: 50%;
    }

    .card__left a {
      font-weight: bold;
      font-size: 24px;
      cursor: pointer;
      color: #131313;
      text-decoration: none;
    }

    .card__left > p {
      color: rgb(120, 120, 120);
    }

    .card__right {
      flex: 1;
      display: flex;
      padding: 16px
    }

    .card__right img {
      max-width: 400px;
      height: fit-content;
      max-width: 100%;
    }
    `

    return style;
  }
}

customElements.define('card-news', CardNews);