package org.networks.citybikes.test.stepdefinitions;
import org.json.*;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import org.junit.Assert;

import static io.restassured.RestAssured.given;

public class CityBikes {
    private Response response;
    private String uri = "http://api.citybik.es/v2/networks";
    private JSONObject jsonobj;
    private int index;

  

    @Given("^Citybikes API service is invoked$")
    public void citybikes_api_service_is_invoked() {
        response = given().get(uri);
    }

    @Then("^Verify that City of \"([^\"]*)\" is present in \"([^\"]*)\"$")
    public void verify_that_City_is_present_in_Country(String city, String country) {

        JSONArray jsonarray =jsonobj.getJSONArray("networks");

        for(int i=0;i<jsonarray.length();i++) {


            if(city.equalsIgnoreCase(jsonarray.getJSONObject(i).getJSONObject("location").getString("city"))) {
                index=i;
                Assert.assertEquals(jsonarray.getJSONObject(i).getJSONObject("location").getString("country"),country);
                break;
            }}

    }

    @When("^success response is received from the server$")
    public void success_response_is_received_from_the_server() {
        Assert.assertEquals(response.getStatusCode(), 200);
         jsonobj=new JSONObject(response.getBody().asString());
    }


    @Then("^Verify that City of \"([^\"]*)\" is not present in \"([^\"]*)\"$")
    public void verify_that_City_is_not_present_in_Country(String city, String country) {

        JSONArray jsonarray =jsonobj.getJSONArray("networks");

        for(int i=0;i<jsonarray.length();i++) {


            if(city.equalsIgnoreCase(jsonarray.getJSONObject(i).getJSONObject("location").getString("city"))) {
                index=i;
                Assert.assertNotEquals(jsonarray.getJSONObject(i).getJSONObject("location").getString("country"),country);
                break;
            }}

    }
    @Then("^the company in the city has valid latitude and longitude$")
    public void the_company_in_the_city_has_valid_latitude_and_longitude() {
        JSONArray jsonarray =jsonobj.getJSONArray("networks");
        Assert.assertNotEquals(null,jsonarray.getJSONObject(index).getJSONObject("location").getDouble("latitude"));
        Assert.assertNotEquals(null,jsonarray.getJSONObject(index).getJSONObject("location").getDouble("longitude"));
    }

    @Then("^the company in the city is located at latitude \"([^\"]*)\" longitude \"([^\"]*)\"$")
    public void the_company_in_the_city_is_located_at_latitude_longitude(String latitude, String longitude) {
    	
    	 JSONArray jsonarray =jsonobj.getJSONArray("networks"); 
         Assert.assertEquals(latitude,Double.toString(jsonarray.getJSONObject(index).getJSONObject("location").getDouble("latitude")));
         Assert.assertEquals(longitude,Double.toString(jsonarray.getJSONObject(index).getJSONObject("location").getDouble("longitude")));
    }



    @Then("^the country \"([^\"]*)\" has \"([^\"]*)\" city bikes$")
    public void the_country_has_city_bikes(String countryCode, int noOfBikes) {
    	JSONArray jsonarray =jsonobj.getJSONArray("networks"); 
    	int counter=0;
    	for(int i=0;i<jsonarray.length();i++) {
    		if(jsonarray.getJSONObject(i).getJSONObject("location").getString("country").equalsIgnoreCase(countryCode)) {
    			counter++;
    		}
    	}
     Assert.assertEquals(noOfBikes, counter);
    }
    
    @Then("^a city bike \"([^\"]*)\" has \"([^\"]*)\" branches$")
        public void a_city_bike_has_branches(String companyName, int noOfBranches) {
    	JSONArray jsonarray =jsonobj.getJSONArray("networks");
    	int counter=0;
    	for(int i=0;i<jsonarray.length();i++) {
if(jsonarray.getJSONObject(i).getString("name").equalsIgnoreCase(companyName)) {
		counter++;
}
    	}
    	Assert.assertEquals(noOfBranches,counter);
    }
    
}
