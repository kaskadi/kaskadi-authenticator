/* eslint-env browser, mocha */
import { KaskadiElement, html } from 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-element/kaskadi-element.js'

class KaskadiAuthenticator extends KaskadiElement {
  constructor () {
    super()
    this.lang = 'en'
  }

  static get properties () {
    return {
      lang: { type: String }
    }
  }

  async authenticate (e) {
    const fetchBody = {
      Username: this.shadowRoot.querySelector('#username').value,
      Password: this.shadowRoot.querySelector('#password').value,
      method: 'Cognito'
    }
    const init = {
      method: 'POST',
      body: JSON.stringify(fetchBody)
    }
    await fetch('https://api.klimapartner.net/auth/login', init)
      .then(res => res.json())
      .then(json => new CustomEvent('login', { detail: json }))
      .then(event => this.dispatchEvent(event))
  }

  render () {
    return html`
    <div>
      <input type="text" id="username" name="username" placeholder="Username">
      <input type="password" id="password" name="password" placeholder="Password" @change="${this.authenticate}">
      <button @click="${this.authenticate}">Login</button>
    </div>`
  }
}

customElements.define('kaskadi-authenticator', KaskadiAuthenticator)
