define([
  'marionette',
  'app/views/todo-item-view',
  'hbs!../../../templates/todo-item-list'
], function(Marionette, TodoItemView, TodoItemListTemplate) {
  'use strict';

  return Marionette.CompositeView.extend({
    template: TodoItemListTemplate,
    childView: TodoItemView,
    childViewContainer: 'ul#todo-list',
//    //new code add - Nirupa
//        ui: {
//        			toggle: '.toggle-all'
//        		},
//
//        		events: {
//        			'click @ui.toggle': 'onToggleAllClick'
//        		},
    collectionEvents: {
      'change:completed': 'render',
//      //new code add - Nirupa
//      all: 'setCheckAllState'
    },
//    //new code add - Nirupa
//    setCheckAllState: function () {
//    			function reduceCompleted(left, right) {
//    				return left && right.get('completed');
//    			}
//
//    			var allCompleted = this.collection.reduce(reduceCompleted, true);
//    			this.ui.toggle.prop('checked', allCompleted);
//    			this.$el.parent().toggle(!!this.collection.length);
//    		},
//
//    		onToggleAllClick: function (e) {
//    			var isChecked = e.currentTarget.checked;
//
//    			this.collection.each(function (todo) {
//    				todo.save({ completed: isChecked });
//    			});
//    		}

  });
});
