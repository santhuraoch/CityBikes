package org.networks.citybikes.test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        glue = {"org.networks.citybikes.test.stepdefinitions"},
        features = {"src/test/resources/features"},
        tags = {""},
        plugin = {"html:test-reports/html"}
)

public class RunCucumberTests {

}