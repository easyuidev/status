# Make a status page for your website

You can see our example at [status.easyui.dev](https://status.easyui.dev)

## How to configure
1. Edit [this line](https://github.com/easyuidev/status/blob/7a0883e8e8bce593e5b5fc77eee7f42f2ac36f36/public/index.html#L13) in public/index.html, filling in the name of your website.
```js
var websiteName = "Easy UI"
```
2. Edit [this line](https://github.com/easyuidev/status/blob/7a0883e8e8bce593e5b5fc77eee7f42f2ac36f36/public/index.html#L10) in public/index.html, replacing the image src with an image on your website
```html
<img id="myImage" class="hidden" src="https://www.easyui.dev/uploads/articles/1lkwjtyqyvuedfjig17g.jpeg"  onload="pageOnline()" onerror="pageOffline()">
<!--Replace this image src with an image on your website, prefereably something small-->
```
3. Run `npm run build` to build the css
4. Open public/index.html to see your status page
5. Deploy this to wherever you want
