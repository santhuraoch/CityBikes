# CITY BIKES

Development Environment
-------------------------------------------

IntelliJ IDEA 2020.2 (Ultimate Edition)
Build #IU-202.6397.94, built on July 27, 2020

JavaSE-1.8

-------------------------------------------
How to Run Cucumber Tests
-------------------------------------------
Open IDE and navigate to Runner Class,  RunCucumberTests.java
Path: src/test/java/org/networks/citybikes/test/RunCucumberTests.java

To run the Test Scenarios, under Cucumber Options please specify the tag that is defined inside the feature file.

* Valid tags used in the Feature Files:
* {} :- Run all the scenarios in all the available feature files
* {@citybikelocation} :- To run all the scenarios of CityBikeLocation.feature file
        - {@validlocation} :- To run this specific feature
        - {@validCoOrdinates} :- To run this specific feature
* {@citybikecount} :- To run all the scenarios of CityBikeCount.feature file
- Navigate to the RunCucumberTests.java file and Run as JUnit test.
- Reports are generated and available in  test-reports folder


Note
-----------
The given project is mavenised to import the dependencies/libraries mentioned in the pom.xml

DEPENDENCIES USED IN THE pom.xml FILE
--------------------------------------------------
* city-bikes
* rest-assured
* cucumber-java
* cucumber-junit
* json



