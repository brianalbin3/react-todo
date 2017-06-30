var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');


describe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set searchText', () => {
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'dog'
			};
			var res = reducers.searchTextReducer(df(''), df(action));

			expect(res).toEqual(action.searchText);
		});
	});

	describe('showCompletedReducer', () => {
		it('should toggle showCompleted', () => {
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED',
			};
			var res = reducers.showCompletedReducer(df(true), df(action));

			expect(res).toBe(false);
		});
	});

	describe('todosReducer', () => {
		it('should add new todo', () => {
			var action = {
				type: 'ADD_TODO',
				text: 'Eat candy'
			};
			var res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1);
			expect(res[0].text).toEqual(action.text);
		});

		it('should toggle the todo', () => {
			var todos = [{
				id: 1,
				text: 'Eat candy',
				completed: false,
				completedAt: undefined
			}];
			var action = {
				type: 'TOGGLE_TODO',
				id: 1
			};
			var res = reducers.todosReducer(df(todos), df(action));
			expect(res[0].completed).toBe(true);
			expect(res[0].completedAt).toBeA('number');
		});
	});
});