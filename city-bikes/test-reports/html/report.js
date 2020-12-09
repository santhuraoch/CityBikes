$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/CityBikeLocation.feature");
formatter.feature({
  "name": "As a user",
  "description": "  I want to verify that the city Frankfurt is in Germany and return their corresponded latitude and longitude",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@citybikelocation"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify that city Bikes service has a valid latitude and longitude",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validlocation"
    }
  ]
});
formatter.step({
  "name": "Citybikes API service is invoked",
  "keyword": "Given "
});
formatter.step({
  "name": "success response is received from the server",
  "keyword": "When "
});
formatter.step({
  "name": "Verify that City of \"\u003ccity\u003e\" is present in \"\u003ccountry\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "the company in the city has valid latitude and longitude",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "city",
        "country"
      ]
    },
    {
      "cells": [
        "Frankfurt",
        "DE"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that city Bikes service has a valid latitude and longitude",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@citybikelocation"
    },
    {
      "name": "@validlocation"
    }
  ]
});
formatter.step({
  "name": "Citybikes API service is invoked",
  "keyword": "Given "
});
formatter.match({
  "location": "CityBikes.citybikes_api_service_is_invoked()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "success response is received from the server",
  "keyword": "When "
});
formatter.match({
  "location": "CityBikes.success_response_is_received_from_the_server()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that City of \"Frankfurt\" is present in \"DE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CityBikes.verify_that_City_is_present_in_Country(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the company in the city has valid latitude and longitude",
  "keyword": "And "
});
formatter.match({
  "location": "CityBikes.the_company_in_the_city_has_valid_latitude_and_longitude()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that city Bikes service provides right location information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validCoOrdinates"
    }
  ]
});
formatter.step({
  "name": "Citybikes API service is invoked",
  "keyword": "Given "
});
formatter.step({
  "name": "success response is received from the server",
  "keyword": "When "
});
formatter.step({
  "name": "Verify that City of \"\u003ccity\u003e\" is present in \"\u003ccountry\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "the company in the city is located at latitude \"\u003clatitude\u003e\" longitude \"\u003clongitude\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "city",
        "country",
        "latitude",
        "longitude"
      ]
    },
    {
      "cells": [
        "Frankfurt",
        "DE",
        "50.1072",
        "8.66375"
      ]
    },
    {
      "cells": [
        "Moscow",
        "RU",
        "55.75",
        "37.616667"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that city Bikes service provides right location information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@citybikelocation"
    },
    {
      "name": "@validCoOrdinates"
    }
  ]
});
formatter.step({
  "name": "Citybikes API service is invoked",
  "keyword": "Given "
});
formatter.match({
  "location": "CityBikes.citybikes_api_service_is_invoked()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "success response is received from the server",
  "keyword": "When "
});
formatter.match({
  "location": "CityBikes.success_response_is_received_from_the_server()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that City of \"Frankfurt\" is present in \"DE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CityBikes.verify_that_City_is_present_in_Country(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the company in the city is located at latitude \"50.1072\" longitude \"8.66375\"",
  "keyword": "And "
});
formatter.match({
  "location": "CityBikes.the_company_in_the_city_is_located_at_latitude_longitude(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that city Bikes service provides right location information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@citybikelocation"
    },
    {
      "name": "@validCoOrdinates"
    }
  ]
});
formatter.step({
  "name": "Citybikes API service is invoked",
  "keyword": "Given "
});
formatter.match({
  "location": "CityBikes.citybikes_api_service_is_invoked()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "success response is received from the server",
  "keyword": "When "
});
formatter.match({
  "location": "CityBikes.success_response_is_received_from_the_server()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that City of \"Moscow\" is present in \"RU\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CityBikes.verify_that_City_is_present_in_Country(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the company in the city is located at latitude \"55.75\" longitude \"37.616667\"",
  "keyword": "And "
});
formatter.match({
  "location": "CityBikes.the_company_in_the_city_is_located_at_latitude_longitude(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that a valid City is not mapped to an incorrect country code.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalidlocation"
    }
  ]
});
formatter.step({
  "name": "Citybikes API service is invoked",
  "keyword": "Given "
});
formatter.step({
  "name": "success response is received from the server",
  "keyword": "When "
});
formatter.step({
  "name": "Verify that City of \"\u003ccity\u003e\" is not present in \"\u003ccountry\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "the company in the city has valid latitude and longitude",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "city",
        "country"
      ]
    },
    {
      "cells": [
        "Moscow",
        "TH"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that a valid City is not mapped to an incorrect country code.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@citybikelocation"
    },
    {
      "name": "@invalidlocation"
    }
  ]
});
formatter.step({
  "name": "Citybikes API service is invoked",
  "keyword": "Given "
});
formatter.match({
  "location": "CityBikes.citybikes_api_service_is_invoked()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "success response is received from the server",
  "keyword": "When "
});
formatter.match({
  "location": "CityBikes.success_response_is_received_from_the_server()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that City of \"Moscow\" is not present in \"TH\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CityBikes.verify_that_City_is_not_present_in_Country(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the company in the city has valid latitude and longitude",
  "keyword": "And "
});
formatter.match({
  "location": "CityBikes.the_company_in_the_city_has_valid_latitude_and_longitude()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/CityBikeValidateCount.feature");
formatter.feature({
  "name": "As a User",
  "description": "  I want to validate the number of city bikes available in a Country",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@citybikecount"
    }
  ]
});
formatter.scenarioOutline({
  "name": "validate the total no of city bikes available in a Country",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@citybikescount"
    }
  ]
});
formatter.step({
  "name": "Citybikes API service is invoked",
  "keyword": "Given "
});
formatter.step({
  "name": "success response is received from the server",
  "keyword": "When "
});
formatter.step({
  "name": "the country \"\u003ccountrycode\u003e\" has \"\u003cno_of_bikes\u003e\" city bikes",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "countrycode",
        "no_of_bikes"
      ]
    },
    {
      "cells": [
        "ES",
        "63"
      ]
    },
    {
      "cells": [
        "TH",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "validate the total no of city bikes available in a Country",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@citybikecount"
    },
    {
      "name": "@citybikescount"
    }
  ]
});
formatter.step({
  "name": "Citybikes API service is invoked",
  "keyword": "Given "
});
formatter.match({
  "location": "CityBikes.citybikes_api_service_is_invoked()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "success response is received from the server",
  "keyword": "When "
});
formatter.match({
  "location": "CityBikes.success_response_is_received_from_the_server()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the country \"ES\" has \"63\" city bikes",
  "keyword": "Then "
});
formatter.match({
  "location": "CityBikes.the_country_has_city_bikes(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate the total no of city bikes available in a Country",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@citybikecount"
    },
    {
      "name": "@citybikescount"
    }
  ]
});
formatter.step({
  "name": "Citybikes API service is invoked",
  "keyword": "Given "
});
formatter.match({
  "location": "CityBikes.citybikes_api_service_is_invoked()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "success response is received from the server",
  "keyword": "When "
});
formatter.match({
  "location": "CityBikes.success_response_is_received_from_the_server()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the country \"TH\" has \"1\" city bikes",
  "keyword": "Then "
});
formatter.match({
  "location": "CityBikes.the_country_has_city_bikes(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "validate the total no of city bikes(branches) of a particular company",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@citybikebranches"
    }
  ]
});
formatter.step({
  "name": "Citybikes API service is invoked",
  "keyword": "Given "
});
formatter.step({
  "name": "success response is received from the server",
  "keyword": "When "
});
formatter.step({
  "name": "a city bike \"\u003cCompanyName\u003e\" has \"\u003cnoOfBranches\u003e\" branches",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "CompanyName",
        "noOfBranches"
      ]
    },
    {
      "cells": [
        "Nextbike",
        "96"
      ]
    },
    {
      "cells": [
        "Velobike",
        "4"
      ]
    },
    {
      "cells": [
        "Bycyklen",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "validate the total no of city bikes(branches) of a particular company",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@citybikecount"
    },
    {
      "name": "@citybikebranches"
    }
  ]
});
formatter.step({
  "name": "Citybikes API service is invoked",
  "keyword": "Given "
});
formatter.match({
  "location": "CityBikes.citybikes_api_service_is_invoked()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "success response is received from the server",
  "keyword": "When "
});
formatter.match({
  "location": "CityBikes.success_response_is_received_from_the_server()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a city bike \"Nextbike\" has \"96\" branches",
  "keyword": "Then "
});
formatter.match({
  "location": "CityBikes.a_city_bike_has_branches(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate the total no of city bikes(branches) of a particular company",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@citybikecount"
    },
    {
      "name": "@citybikebranches"
    }
  ]
});
formatter.step({
  "name": "Citybikes API service is invoked",
  "keyword": "Given "
});
formatter.match({
  "location": "CityBikes.citybikes_api_service_is_invoked()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "success response is received from the server",
  "keyword": "When "
});
formatter.match({
  "location": "CityBikes.success_response_is_received_from_the_server()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a city bike \"Velobike\" has \"4\" branches",
  "keyword": "Then "
});
formatter.match({
  "location": "CityBikes.a_city_bike_has_branches(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate the total no of city bikes(branches) of a particular company",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@citybikecount"
    },
    {
      "name": "@citybikebranches"
    }
  ]
});
formatter.step({
  "name": "Citybikes API service is invoked",
  "keyword": "Given "
});
formatter.match({
  "location": "CityBikes.citybikes_api_service_is_invoked()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "success response is received from the server",
  "keyword": "When "
});
formatter.match({
  "location": "CityBikes.success_response_is_received_from_the_server()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a city bike \"Bycyklen\" has \"1\" branches",
  "keyword": "Then "
});
formatter.match({
  "location": "CityBikes.a_city_bike_has_branches(String,int)"
});
formatter.result({
  "status": "passed"
});
});