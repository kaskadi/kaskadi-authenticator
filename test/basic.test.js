/* eslint-env browser, mocha */
import '../kaskadi-authenticator.js'
describe('kaskadi-authenticator', () => {
  it('should render the string "Hello World"', async () => {
    // create kaskadi-authenticator element
    var elem = document.createElement('kaskadi-authenticator')
    document.body.appendChild(elem)
    // wait until it's finished rendering
    await elem.updateComplete
    // actual test
    elem.shadowRoot.querySelector('div').textContent.should.equal('Hello World!')
    var cs = getComputedStyle(elem.shadowRoot.querySelector('div'))
    cs.color.should.equal('rgb(255, 0, 0)')
  })
})
