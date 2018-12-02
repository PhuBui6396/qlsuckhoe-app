package com.tlu.qlsuckhoe.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.Contact;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import static springfox.documentation.builders.PathSelectors.regex;
import java.util.Arrays;
import java.util.List;
import com.google.common.collect.Lists;

@Configuration
@EnableSwagger2

public class SwaggerConfig {
	@Bean
	public Docket Tintucapi() {
        
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.basePackage("com.tlu.qlsuckhoe.controller"))
				.paths(regex("/.*"))
				.build()
				.apiInfo(apiInfo())
			    .securitySchemes(Lists.newArrayList(apiKey()))
			    .securityContexts(Arrays.asList(securityContext()));
	}
	private ApiInfo apiInfo() {
		return new ApiInfo(
				"My Rest API",
				"Some description of API",
				"1.0",
				"Terms of service",
				new Contact("Admin", "locahost", "smallboy329@gmail.com"),
				"Apache License Version 2.0",
				"https://www.apache.org/licenses/LICENSE-2.0");
	}
	 private ApiKey apiKey() {
		    return new ApiKey("Authorization", "Authorization","header");
		    }

		    private SecurityContext securityContext() {
		    return SecurityContext.builder().securityReferences(defaultAuth())
		        .forPaths(PathSelectors.any()).build();
		    }

		    private List<SecurityReference> defaultAuth() {
		    AuthorizationScope authorizationScope = new AuthorizationScope(
		        "global", "accessEverything");
		    AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
		    authorizationScopes[0] = authorizationScope;
		    return Arrays.asList(new SecurityReference("Authorization",
		        authorizationScopes));
		    }
}
