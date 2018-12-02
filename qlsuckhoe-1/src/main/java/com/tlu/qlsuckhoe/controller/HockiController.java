package com.tlu.qlsuckhoe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tlu.qlsuckhoe.entity.Hocki;
import com.tlu.qlsuckhoe.entity.PageResult;
import com.tlu.qlsuckhoe.service.HockiServiceImpl;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin
@RequestMapping(value = "ADMIN/hocki")
@Api(value="onlinestore", description="Quản lý Học Kì",tags= {"Hoc ki"})
public class HockiController {
	@Autowired
	private HockiServiceImpl HockiService;
	@ApiOperation(value = "Paging List Học Kì",response = Iterable.class,tags={"Hoc ki"})
	@RequestMapping(method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<PageResult<Hocki>> search(@RequestParam("page") int page,@RequestParam("pagesize") int pagesize) {
		return new ResponseEntity<PageResult<Hocki>>(HockiService.search(page, pagesize), HttpStatus.OK);
	}
    @ApiOperation(value = "List Học Kì",response = Iterable.class,tags={"Hoc ki"})
    @RequestMapping(value="/list",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<List<Hocki>> findAll() {
		return new ResponseEntity<List<Hocki>>(HockiService.findAll(), HttpStatus.OK);
	}
    @ApiOperation(value = "Find One Học Kì",tags={"Hoc ki"},response=Hocki.class,produces = "application/json")
    @RequestMapping(value="/{idHocki}",method=RequestMethod.GET)
	public ResponseEntity<Object> getById(@PathVariable int idHocki) {
    	Hocki t= HockiService.findById(idHocki);	
    	if(t!=null)
    		return new ResponseEntity<Object>(t,HttpStatus.OK);
    	return new ResponseEntity<Object>("Not Found",HttpStatus.NO_CONTENT);
	}
    @ApiOperation(value = "Add Học Kì",tags={"Hoc ki"})
    @RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<Object> createHocki(@RequestBody Hocki Hocki) {
		HockiService.create(Hocki);
	    return new ResponseEntity<Object>(Hocki, HttpStatus.CREATED);
	}
    @ApiOperation(value = "Add list Học Kì",tags={"Hoc ki"})
    @RequestMapping(value="/list",method=RequestMethod.POST)
	public ResponseEntity<Object> createHocki(@RequestBody List<Hocki> Hocki) {
		HockiService.addHocki(Hocki);
	    return new ResponseEntity<Object>(Hocki, HttpStatus.CREATED);
	}
    @ApiOperation(value = "Update Học Kì",tags={"Hoc ki"})
    @RequestMapping(value="/{idHocki}",method=RequestMethod.PUT)
	public ResponseEntity<Object> updateHocki(@PathVariable int idHocki,@RequestBody Hocki Hocki) {
    	HockiService.update(idHocki,Hocki);
    	return new ResponseEntity<Object>(idHocki,HttpStatus.OK);
	}
    @ApiOperation(value="Delete Học Kì",tags= {"Hoc ki"})
    @RequestMapping(value="/{idHocki}",method=RequestMethod.DELETE)
	public ResponseEntity<Object> deleteHocki(@PathVariable int idHocki) {
    	HockiService.delete(idHocki);
    	return new ResponseEntity<Object>(idHocki,HttpStatus.OK);
	}

}
