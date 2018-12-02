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
import com.tlu.qlsuckhoe.entity.Benh;
import com.tlu.qlsuckhoe.service.BenhServiceImpl;
import com.tlu.qlsuckhoe.service.criteria.BenhCriteria;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin
@RequestMapping(value="YTE/benh")
@Api(value="onlinestore", description="Quản lý bệnh",tags= {"Benh"})
public class BenhController {
	@Autowired
	private BenhServiceImpl BenhService;
	@ApiOperation(value = "Paging List bệnh",response = Iterable.class,tags={"Benh"})
	@RequestMapping(method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<PageResult<Benh>> search(@RequestParam("page") int page,@RequestParam("pagesize") int pagesize) {
		return new ResponseEntity<PageResult<Benh>>(BenhService.search(page, pagesize), HttpStatus.OK);
	}
    @ApiOperation(value = "List bệnh",response = Iterable.class,tags={"Benh"})
    @RequestMapping(value="/list",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<List<Benh>> findAll() {
		return new ResponseEntity<List<Benh>>(BenhService.findAll(), HttpStatus.OK);
	}
    @ApiOperation(value = "Find One bệnh",tags={"Benh"},response=Benh.class,produces = "application/json")
    @RequestMapping(value="/{idBenh}",method=RequestMethod.GET)
	public ResponseEntity<Object> getById(@PathVariable int idBenh) {
    	Benh t= BenhService.findById(idBenh);	
    	if(t!=null)
    		return new ResponseEntity<Object>(t,HttpStatus.OK);
    	return new ResponseEntity<Object>("Not Found",HttpStatus.NO_CONTENT);
	}
    @ApiOperation(value = "Tìm bệnh theo danh mục",response = Iterable.class,tags={"Benh"})
    @RequestMapping(value="/iddanhmuc/{iddanhmuc}",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<List<Benh>> findbenhIddanhmuc(@PathVariable int iddanhmuc) {
		return new ResponseEntity<List<Benh>>(BenhService.findIddanhmuc(iddanhmuc), HttpStatus.OK);
	}
    @ApiOperation(value = "Add bệnh",tags={"Benh"})
    @RequestMapping(method=RequestMethod.POST,produces = "text/plain")
	public ResponseEntity<Object> createBenh(@RequestBody BenhCriteria Benh) {
		BenhService.create(Benh);
	    return new ResponseEntity<Object>("Create!", HttpStatus.OK);
	}
    @ApiOperation(value = "Update bệnh",tags={"Benh"})
    @RequestMapping(value="/{idBenh}",method=RequestMethod.PUT,produces="text/plain")
	public ResponseEntity<String> updateBenh(@PathVariable int idBenh,@RequestBody BenhCriteria Benh) {
    	BenhService.update(idBenh,Benh);
    	return new ResponseEntity<String>("Update Success!",HttpStatus.OK);
	}
    @ApiOperation(value="Delete bệnh",tags= {"Benh"})
    @RequestMapping(value="/{idBenh}",method=RequestMethod.DELETE,produces="text/plain")
	public ResponseEntity<Object> deleteBenh(@PathVariable int idBenh) {
    		BenhService.delete(idBenh);
    		return new ResponseEntity<Object>("Delete Success!",HttpStatus.OK);
	}
}
