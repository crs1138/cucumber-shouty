const { Given, When, Then } = require( '@cucumber/cucumber' );
const { assertThat, hasItem } = require('hamjest');
const Person = require( '../../src/shouty' );

Given('{person} is located {int} meter(s) from Sean', function (lucy, distance) {
    // Given('Lucy is located {float} meters from Sean', function (float) {
    // Write code here that turns the phrase above into concrete actions

    this.lucy = new Person;
    this.sean = new Person;
    this.lucy.moveTo(distance);
});

When('Sean shouts {string}', function (message) {
    // Write code here that turns the phrase above into concrete actions
    this.sean.shout( message );
    this.message = message;
});

Then('{person} hears {person}\'s message', function (lucy, sean) {
    this.lucy.hearMessage( this.message );
    console.log( this.lucy.messagesHeard() )
    assertThat( this.lucy.messagesHeard(), hasItem( this.message ));
});