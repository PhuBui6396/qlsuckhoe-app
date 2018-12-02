package com.tlu.qlsuckhoe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tlu.qlsuckhoe.entity.Role;
import com.tlu.qlsuckhoe.service.RoleService;

@RestController
@RequestMapping(value="/Role")
public class RoleController {
	@Autowired
	private RoleService roleService;
	@RequestMapping(method=RequestMethod.GET)
	private ResponseEntity<List<Role>> findall(){
		return new ResponseEntity<List<Role>>( roleService.findAll(),HttpStatus.OK);
	}
}
