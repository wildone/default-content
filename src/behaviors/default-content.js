const name = 'default',
      defaults = {
        type: String,
        observer: '_setDefaultAttribute'
      };

export default function(config) {
  return {
    properties: {
      [name]: Object.assign({}, defaults, config)
    },

    ready() {
      this.fire('ready-for-default');
      this._readyForDefault = true;
    },

    _setDefaultAttribute() {
      console.warn('_setDefaultAttribute should be overriden by the host element');
    }
  };
};
