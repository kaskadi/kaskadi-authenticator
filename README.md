![](https://img.shields.io/github/package-json/v/kaskadi/kaskadi-authenticator)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/kaskadi-authenticator?color=blue)

[![](https://img.shields.io/badge/live-example-orange)](https://cdn.klimapartner.net/modules/%40kaskadi/kaskadi-authenticator/example/index.html)

**GitHub Actions workflows status**

[![Build status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-authenticator/build?label=build&logo=mocha)](https://github.com/kaskadi/kaskadi-authenticator/actions?query=workflow%3Abuild)
[![BuildFF status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-authenticator/build-on-firefox?label=firefox&logo=firefox-browser)](https://github.com/kaskadi/kaskadi-authenticator/actions?query=workflow%3Abuild-on-firefox)
[![BuildChrome status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-authenticator/build-on-chrome?label=chrome&logo=google-chrome&logoColor=white)](https://github.com/kaskadi/kaskadi-authenticator/actions?query=workflow%3Abuild-on-chrome)
[![Publish status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-authenticator/publish?label=publish&logo=Amazon%20AWS)](https://github.com/kaskadi/kaskadi-authenticator/actions?query=workflow%3Apublish)
[![Docs generation status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-authenticator/generate-docs?label=docs&logo=read-the-docs)](https://github.com/kaskadi/kaskadi-authenticator/actions?query=workflow%3Agenerate-docs)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/kaskadi-authenticator?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-authenticator)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/kaskadi-authenticator?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-authenticator)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/kaskadi-authenticator?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-authenticator)

<!-- You can add badges inside of this section if you'd like -->

****

<!-- automatically generated documentation will be placed in here -->
# Usage instructions

In another element:
```js
// using the latest version
import 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-authenticator/kaskadi-authenticator.js'
// using a specific version
import 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-authenticator/release/v1.0.0/kaskadi-authenticator.js'
```

In the browser:
```html
<!-- using the latest version -->
<script type="module" src="https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-authenticator/kaskadi-authenticator.js"></script>
<!-- using a specific version -->
<script type="module" src="https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-authenticator/release/v1.0.0/kaskadi-authenticator.js"></script>
```

# Custom element documentation

## kaskadi-authenticator

Element offering a login interface to Kaskadi's project backend.

This consists of two input fields for respectively username and password. It then sends a request to the backend and dispatches a new event with the login attempt response.

This element inherits properties from a base class `KaskadiElement`. To see which properties are available, please refer to [`KaskadiElement` documentation].


| Param | Type | Description |
| --- | --- | --- |
| onlogin | `Event` | after attempting to log in the element will dispatch a `login` event containing in its `detail` field the response payload |

**Example**  
```html
<kaskadi-authenticator></kaskadi-authenticator>
```
<!-- LINKS -->

[`KaskadiElement` documentation]:https://github.com/kaskadi/kaskadi-element

## Custom styles

No custom CSS properties found in this element.
<!-- automatically generated documentation will be placed in here -->

<!-- You can customize this template as you'd like! -->
