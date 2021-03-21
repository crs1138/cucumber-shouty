Feature: Hear shout
    Scenario: Listener is within range
        Given Lucy is located 15 meters from Sean
        When Sean shouts "free bagels at Sean's"
        Then Lucy hears Sean's message

    Scenario: Listener hears a different
        Given Lucy is located 15 meters from Sean
        When Sean shouts "free coffee"
        Then Lucy hears Sean's message
