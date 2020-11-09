/* eslint-env browser, mocha */
import { KaskadiElement, html } from 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-element/kaskadi-element.js'

/**
 * Element offering a login interface to Kaskadi's project backend.
 *
 * This consists of two input fields for respectively username and password. It then sends a request to the backend and dispatches a new event with the login attempt response.
 *
 * This element inherits properties from a base class `KaskadiElement`. To see which properties are available, please refer to [`KaskadiElement` documentation](https://github.com/kaskadi/kaskadi-element).
 *
 * @module kaskadi-authenticator
 *
 * @param {Event} onlogin - after attempting to log in the element will dispatch a `login` event containing in its `detail` field the response payload
 *
 * @example
 *
 * <kaskadi-authenticator></kaskadi-authenticator>
 */

class KaskadiAuthenticator extends KaskadiElement {
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

// force
