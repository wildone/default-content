class DefaultContent {
  beforeRegister() {
    this.is = 'default-content';
  }

  ready() {
    let parent = Polymer.dom(this).parentNode,
        onReadyForDefault = () => {
          let shouldRemove = parent._setDefaultElement(this);

          if (shouldRemove) {
            this.remove();
          }
        };

    if (parent._readyForDefault) {
      onReadyForDefault();
    } else {
      parent.addEventListener('ready-for-default', onReadyForDefault);
    }
  }
}

Polymer(DefaultContent);

// Remove the hiding style element
(() => {
  let hider = document.getElementById('sm-hide-dc');
  if (hider) {
    hider.remove();
  }
})();
