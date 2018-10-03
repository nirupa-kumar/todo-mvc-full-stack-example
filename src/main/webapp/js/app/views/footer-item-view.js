define([
  "marionette",
  "hbs!../../../templates/footer"
], function(Marionette, FooterTemplate) {
  "use strict";

  return Marionette.ItemView.extend({
    template: FooterTemplate,
    ui: {
      summary: "#todo-count",
//      //new code add - Nirupa
//      filters: '.filters a',
//      completed: '.completed a',
//      active: '.active a',
//      all: '.all a',
//      clear: '.clear-completed'
    },
    //new code add - Nirupa
//    events: {
//    			'click @ui.clear': 'onClearClick'
//    		},
    collectionEvents: {
      all: "render"
    },
    templateHelpers: {
      activeCountLabel: function() {
        return (this.activeCount === 1 ? "item" : "items") + " left";
      }
    },
    serializeData: function() {
      var active = this.collection.getActive().length;
      var total = this.collection.length;

      return {
        activeCount: active,
        totalCount: total,
        completedCount: total - active
      };
    },
    onRender: function() {
      this.$el.parent().toggle(this.collection.length > 0);
    }
//   //new code add - Nirupa
//    ,
//
//    		updateFilterSelection: function () {
//    			this.ui.filters.removeClass('selected');
//    			this.ui[filterChannel.request('filterState').get('filter')]
//    			.addClass('selected');
//    		},
//
//    		onClearClick: function () {
//    			var completed = this.collection.getCompleted();
//    			completed.forEach(function (todo) {
//    				todo.destroy();
//    			});
//    		}
  });
});