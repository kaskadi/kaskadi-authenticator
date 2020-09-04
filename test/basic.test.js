/* eslint-env browser, mocha */
/* global chai */
import '../kaskadi-authenticator.js'
const should = chai.should()
describe('kaskadi-authenticator', function () {
  this.timeout(30000)
  let elem
  before(async () => {
    elem = document.createElement('kaskadi-authenticator')
    document.body.appendChild(elem)
    await elem.updateComplete
  })
  it('should log in user', (done) => {
    elem.addEventListener('login', (e) => {
      should.exist(e.detail.accessToken)
      done()
    })
    elem.shadowRoot.querySelector('#username').value = 'User'
    elem.shadowRoot.querySelector('#password').value = 'secret!'
    elem.shadowRoot.querySelector('button').click()
  })
})
