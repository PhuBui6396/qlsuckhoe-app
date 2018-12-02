package com.tlu.qlsuckhoe.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import com.tlu.qlsuckhoe.rest.CustomAccessDeniedHandler;
import com.tlu.qlsuckhoe.rest.JwtAuthenticationTokenFilter;
import com.tlu.qlsuckhoe.rest.RestAuthenticationEntryPoint;
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	  @Bean
	  public JwtAuthenticationTokenFilter jwtAuthenticationTokenFilter() throws Exception {
	    JwtAuthenticationTokenFilter jwtAuthenticationTokenFilter = new JwtAuthenticationTokenFilter();
	    jwtAuthenticationTokenFilter.setAuthenticationManager(authenticationManager());
	    
	    return jwtAuthenticationTokenFilter;
	  }
	@Bean
	public RestAuthenticationEntryPoint restServicesEntryPoint() {
		return new RestAuthenticationEntryPoint();
	}

	@Bean
	public CustomAccessDeniedHandler customAccessDeniedHandler() {
		return new CustomAccessDeniedHandler();
	}
	@Bean
	@Override
	protected AuthenticationManager authenticationManager() throws Exception {
		return super.authenticationManager();
	}
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors().and().csrf().disable().authorizeRequests();
		http.authorizeRequests().antMatchers("/api**").permitAll();
		http.antMatcher("/**").httpBasic().authenticationEntryPoint(restServicesEntryPoint()).and()
		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().authorizeRequests()
		.antMatchers(HttpMethod.GET,"/YTE/sinhvien/**").access("hasAuthority('SINHVIEN') or hasAuthority('YTE') or hasAuthority('ADMIN')")
		.antMatchers(HttpMethod.GET,"/ADMIN/hocki/**").access("hasAuthority('ADMIN') or hasAuthority('YTE') or hasAuthority('SINHVIEN')")
		.antMatchers(HttpMethod.PUT,"/YTE/sinhvien/change/**").access("hasAuthority('SINHVIEN')")
		.antMatchers(HttpMethod.GET,"/YTE/dinhky/findsv/**").access("hasAuthority('SINHVIEN') or hasAuthority('YTE')")
		.antMatchers(HttpMethod.GET,"/YTE/sucosuckhoe/**").access("hasAuthority('SINHVIEN') or hasAuthority('YTE')")
		.antMatchers(HttpMethod.GET,"/YTE/tintuc/**").access("hasAuthority('SINHVIEN') or hasAuthority('YTE')")
		.antMatchers(HttpMethod.POST,"/YTE/sinhvien/**").access("hasAuthority('ADMIN')")
		.antMatchers(HttpMethod.DELETE,"/YTE/sinhvien/**").access("hasAuthority('ADMIN')")
		.antMatchers(HttpMethod.PUT,"/YTE/sinhvien/**").access("hasAuthority('ADMIN') or hasAuthority('SINHVIEN')")
		.antMatchers("/YTE/**").access("hasAuthority('YTE')")
		.antMatchers("/ADMIN/**").access("hasAuthority('ADMIN')").and()
		.addFilterBefore(jwtAuthenticationTokenFilter(), UsernamePasswordAuthenticationFilter.class)
		.exceptionHandling().accessDeniedHandler(customAccessDeniedHandler());
	}
}