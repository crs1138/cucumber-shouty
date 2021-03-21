class Person {
    messages = [];
    
    moveTo( distance ) {}

    shout( message ) {}

    messagesHeard() {
        return this.messages;
    }

    hearMessage( message ) {
        this.messages.push( message );
    }
};

module.exports = Person;