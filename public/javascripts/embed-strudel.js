class Strudel extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    setTimeout(() => {
      const code = (this.innerHTML + '').replace('<!--', '').replace('-->', '').trim();
      const iframe = document.createElement('iframe');
      const src = `https://strudel.cc/#${encodeURIComponent(btoa(code))}`;
      iframe.setAttribute('src', src);
      iframe.setAttribute('width', '600');
      iframe.setAttribute('height', '400');
      this.appendChild(iframe);
    });
  }
}
customElements.define('strudel-repl', Strudel);

