Feature: Login
  I as a freelancer
  I want login application
  To do jobs

  Scenario: Login with success
    Given I am on the login screen
    When filling in user credentials
    And I click on Sign In
    Then I check Dashboard logged in the home page

  Scenario: Login with wrong user
    Given I am on the login screen
    When fill the user wrong
    And I click on Sign In
    Then I check user error message

  Scenario: Login with wrong password
    Given I am on the login screen
    When fill the password wrong
    And I click on Sign In
    Then I check password error message


