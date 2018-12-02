package com.tlu.qlsuckhoe.controller;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tlu.qlsuckhoe.entity.Account;
import com.tlu.qlsuckhoe.service.AccountService;
import com.tlu.qlsuckhoe.service.JwtService;
import com.tlu.qlsuckhoe.service.criteria.UserCriteria;
//import com.tlu.qlsuckhoe.service.AccountService;
//import com.tlu.qlsuckhoe.service.JwtService;

@RestController
@RequestMapping(value="/api")
@CrossOrigin
public class AuthenticateController {
	static final String TOKEN_PREFIX = "Bearer";
	@Autowired
	private AccountService ac;
	@Autowired
	private JwtService jwtService;
//
//	@Autowired
//	private AccountService accountService;
	@RequestMapping(value="/authenticate",method=RequestMethod.POST)
	public ResponseEntity<Object> login(HttpServletRequest request,@RequestBody Account user) {
		String result = "";
		HttpStatus httpStatus = null;
		try {
			if (ac.checkLogin(user)) {
				UserCriteria userCriteria = new UserCriteria();
				result = jwtService.generateTokenLogin(user.getUsername());
				Account a=ac.findByUsername(user.getUsername());
				userCriteria.setIduser(a.getId());
				userCriteria.setUsername(a.getUsername());
				userCriteria.setToken(result.replace(TOKEN_PREFIX+" ", ""));
				userCriteria.setToke_type(TOKEN_PREFIX);
				userCriteria.setRole(a.getRole());
				httpStatus = HttpStatus.OK;
				return new ResponseEntity<Object>(userCriteria,httpStatus);
			} else {
				result = "Wrong userId and password";
				httpStatus = HttpStatus.BAD_REQUEST;
				return new ResponseEntity<Object>(result,httpStatus);
			}
		} catch (Exception ex) {
			result = "Server Error";
			httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<Object>(result,httpStatus);
	}
}
