/* eslint-env browser, mocha */
import { html, LitElement } from 'https://cdn.klimapartner.net/modules/lit-element/lit-element.js'

class KaskadiAuthenticator extends LitElement {
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
    const res = await fetch('https://97j2nzedqk.execute-api.eu-central-1.amazonaws.com/prod/auth/login', init)
    const json = await res.json()
    const event = new CustomEvent('login', {
      detail: json
    })
    this.dispatchEvent(event)
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
