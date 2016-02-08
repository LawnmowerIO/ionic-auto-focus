# ionic-auto-focus
An Ionic directive that gives focus to the element with the `auto-focus` attribute

The native `autofocus` attribute only works the first time a view is activated in Ionic. It may also lead to rendering glitches during transition from state to state. This directive waits for the state to be active and then puts focus on the element which also opens the soft keyboard on mobile devices.


### Bower

`bower install adamduren/ionic-auto-focus`

### Usage

In `index.html`:

```html
<script src="lib/ionic-auto-focus/auto-focus.js"></script>
```

In `app.js`:

```javascript
angular.module('myApp', ['autoFocus'])
```

In `someTemplate.html`:

```html
<ion-view>
  <ion-content>
    <form>
      <div class="list">
        <label class="item item-input">
          <input type="text" name="title" placeholder="Title" auto-focus>
        </label>
        </div>
      </div>
    </form>
  </ion-content>
</ion-view>
```
