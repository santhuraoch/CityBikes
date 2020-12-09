@citybikelocation
Feature: As a user
  I want to verify that the city Frankfurt is in Germany and return their corresponded latitude and longitude

  @validlocation
  Scenario Outline: Verify that city Bikes service has a valid latitude and longitude
    Given Citybikes API service is invoked
    When success response is received from the server
    Then Verify that City of "<city>" is present in "<country>"
    And the company in the city has valid latitude and longitude

    Examples:
      | city      | country |
      | Frankfurt | DE      |

  @validCoOrdinates
  Scenario Outline: Verify that city Bikes service provides right location information
    Given Citybikes API service is invoked
    When success response is received from the server
    Then Verify that City of "<city>" is present in "<country>"
    And the company in the city is located at latitude "<latitude>" longitude "<longitude>"

    Examples:
      | city      | country | latitude | longitude |
      | Frankfurt | DE      | 50.1072  | 8.66375   |
      | Moscow    | RU      | 55.75    | 37.616667 |

  @invalidlocation
  Scenario Outline: Verify that a valid City is not mapped to an incorrect country code.
    Given Citybikes API service is invoked
    When success response is received from the server
    Then Verify that City of "<city>" is not present in "<country>"
    And the company in the city has valid latitude and longitude
    Examples:
      | city   | country |
      | Moscow | TH      |