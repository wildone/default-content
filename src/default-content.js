class DefaultContent {
  beforeRegister() {
    this.is = 'default-content';
  }

  ready() {
    let parent = this.parentElement;

    if (!parent || typeof parent._setDefaultElement !== 'function') {
      console.warn('The default-content element must be used within an element implementing _setDefaultElement');
      return;
    };

    parent._setDefaultElement(this);
  }
}

Polymer(DefaultContent);
