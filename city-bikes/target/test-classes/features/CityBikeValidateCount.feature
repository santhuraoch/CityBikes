@citybikecount
Feature: As a User
  I want to validate the number of city bikes available in a Country

  @citybikescount
  Scenario Outline: validate the total no of city bikes available in a Country
    Given Citybikes API service is invoked
    When success response is received from the server
    Then the country "<countrycode>" has "<no_of_bikes>" city bikes

    Examples:
      | countrycode | no_of_bikes |
      | ES          | 63          |
      | TH          | 1           |

    @citybikebranches
  Scenario Outline: validate the total no of city bikes(branches) of a particular company
    Given Citybikes API service is invoked
    When  success response is received from the server
    Then a city bike "<CompanyName>" has "<noOfBranches>" branches

    Examples:
      | CompanyName | noOfBranches |
      | Nextbike    | 96           |
      | Velobike    | 4            |
      | Bycyklen    | 1            |
