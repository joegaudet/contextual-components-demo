import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  actions: {
    /**
     * Some basic actions for pressing keys if they are wired up
     */
    handleKeyUp(_, e){
      this.get('onChange')(e.target.value);

      if (e.code === 'Enter') {
        this.get('onCommandEnter')();
      }

      if (e.code === 'Escape') {
        this.get('onEsc')();
      }
    },

    /**
     * Changes events occur on input blur events, they also appear to happen when the emoji
     * keyboard is used
     *
     * @param {Event} e
     */
    handleChangeEvent(e){
      this.get('onChange')(e.target.value);
    }
  }
});
