class DefaultContent {
  beforeRegister() {
    this.is = 'default-content';
  }

  ready() {
    let parent = Polymer.dom(this).parentNode,
        shouldRemove;

    if (!parent || typeof parent._setDefaultElement !== 'function') {
      console.warn('The default-content element must be used within an element implementing _setDefaultElement');
      return;
    };

    shouldRemove = parent._setDefaultElement(this);

    if (shouldRemove) {
      this.remove();
    }
  }
}

Polymer(DefaultContent);
