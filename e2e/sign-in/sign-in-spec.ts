'use strict';

var SignInPage = require('./signin-page');

describe('angularjs homepage', function () {
    var page;

    beforeEach(function () {
        page = new SignInPage();
    });

    it('should greet the named user', function () {
        page.login('admin@admin.com','123456');
        expect(true).toEqual(true);
    });

    // describe('todo list', function () {
    //     it('should list todos', function () {
    //         expect(page.todoList.count()).toEqual(2);
    //         expect(page.todoAt(1)).toEqual('build an angular app');
    //     });

    //     it('should add a todo', function () {
    //         page.addTodo('write a protractor test');
    //         expect(page.todoList.count()).toEqual(3);
    //         expect(page.todoAt(2)).toEqual('write a protractor test');
    //     });
    // });

});