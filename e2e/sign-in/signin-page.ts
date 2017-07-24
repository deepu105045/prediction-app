import { browser, element, by } from "protractor/built";

var SigninPage = function () {
    browser.get('http://localhost:4200/sign-in');
};

SigninPage.prototype = Object.create({},{
    username: { get: function () { return element(by.id('username')); }},
    password: { get : function() { return element(by.id('password'));}},
    submitButton: {function(){return element(by.id('submitButton'))}},

    login: function(username,password){ 
        this.username.sendKeys(username);
        this.password.sendKeys(password);
        this.submitButton.click();
     }

});

module.exports = SigninPage;