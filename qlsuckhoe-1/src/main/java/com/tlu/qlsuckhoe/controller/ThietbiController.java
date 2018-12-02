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

import com.tlu.qlsuckhoe.entity.PageResult;
import com.tlu.qlsuckhoe.entity.Thietbiyte;
import com.tlu.qlsuckhoe.service.ThietbiyteServiceImpl;
import com.tlu.qlsuckhoe.service.criteria.ThietbiyteCriteria;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin
@RequestMapping(value="YTE/thietbi")
@Api(value="onlinestore", description="Quản lý thiết bị y tế",tags= {"Thiet Bi Y Ye"})
public class ThietbiController {
	@Autowired
	private ThietbiyteServiceImpl thietbiyteService;
	@ApiOperation(value = "Paging List Thiết Bị Y Tế",response = Iterable.class,tags={"Thiet Bi Y Ye"})
	@RequestMapping(method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<PageResult<Thietbiyte>> search(@RequestParam("page") int page,@RequestParam("pagesize") int pagesize) {
		return new ResponseEntity<PageResult<Thietbiyte>>(thietbiyteService.search(page, pagesize), HttpStatus.OK);
	}
    @ApiOperation(value = "List Thiết Bị Y Tế",response = Iterable.class,tags={"Thiet Bi Y Ye"})
    @RequestMapping(value="/list",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<List<Thietbiyte>> findAll() {
		return new ResponseEntity<List<Thietbiyte>>(thietbiyteService.findAll(), HttpStatus.OK);
	}
    @ApiOperation(value = "Find One Thiết Bị Y Tế",tags={"Thiet Bi Y Ye"},response=Thietbiyte.class,produces = "application/json")
    @RequestMapping(value="/{idthietbiyte}",method=RequestMethod.GET)
	public ResponseEntity<Object> getById(@PathVariable int idthietbiyte) {
    	Thietbiyte t= thietbiyteService.findById(idthietbiyte);	
    	if(t!=null)
    		return new ResponseEntity<Object>(t,HttpStatus.OK);
    	return new ResponseEntity<Object>("Not Found",HttpStatus.NO_CONTENT);
	}
    @ApiOperation(value = "Add Thiết Bị Y Tế",tags={"Thiet Bi Y Ye"})
    @RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<Object> createthietbiyte(@RequestBody ThietbiyteCriteria thietbiyte) {
		thietbiyteService.create(thietbiyte);
	    return new ResponseEntity<Object>(thietbiyte, HttpStatus.OK);
	}
    @ApiOperation(value = "Update Thiết Bị Y Tế",tags={"Thiet Bi Y Ye"})
    @RequestMapping(value="/{idthietbiyte}",method=RequestMethod.PUT,produces="text/plain")
	public ResponseEntity<Object> updatethietbiyte(@PathVariable int idthietbiyte,@RequestBody ThietbiyteCriteria thietbiyte) {
    	thietbiyteService.update(idthietbiyte,thietbiyte);
    	return new ResponseEntity<Object>("Update Success!",HttpStatus.OK);
	}
    @ApiOperation(value="Delete Thiết Bị Y Tế",tags= {"Thiet Bi Y Ye"})
    @RequestMapping(value="/{idthietbiyte}",method=RequestMethod.DELETE)
	public ResponseEntity<Object> deletethietbiyte(@PathVariable int idthietbiyte) {
    	thietbiyteService.delete(idthietbiyte);
    	return new ResponseEntity<Object>(idthietbiyte,HttpStatus.OK);
	}
	
}
