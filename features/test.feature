Feature: My first test

Scenario: learn automation test
    Given I navigate to home page
    When I fill "test-automation" in the bar search
    And I click on the search button
    Then I see the result label