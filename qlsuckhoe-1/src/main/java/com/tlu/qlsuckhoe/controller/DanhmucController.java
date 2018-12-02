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

import com.tlu.qlsuckhoe.entity.Danhmuc;
import com.tlu.qlsuckhoe.entity.PageResult;
import com.tlu.qlsuckhoe.service.DanhmucServiceImpl;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin
@RequestMapping(value = "YTE/danhmuc")
@Api(value="onlinestore", description="Quản lý Danh Mục",tags= {"Danh Muc"})
public class DanhmucController {
	@Autowired
	private DanhmucServiceImpl DanhmucService;
	@ApiOperation(value = "Paging List Danh Mục",response = Iterable.class,tags={"Danh Muc"})
	@RequestMapping(method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<PageResult<Danhmuc>> search(@RequestParam("page") int page,@RequestParam("pagesize") int pagesize) {
		return new ResponseEntity<PageResult<Danhmuc>>(DanhmucService.search(page, pagesize), HttpStatus.OK);
	}
    @ApiOperation(value = "List Danh Mục",response = Iterable.class,tags={"Danh Muc"})
    @RequestMapping(value="/list",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<List<Danhmuc>> findAll() {
		return new ResponseEntity<List<Danhmuc>>(DanhmucService.findAll(), HttpStatus.OK);
	}
    @ApiOperation(value = "Add List Danh Mục",response = Iterable.class,tags={"Danh Muc"})
    @RequestMapping(value="/list",method=RequestMethod.POST)
	public ResponseEntity<Object> addList(@RequestBody List<Danhmuc> danhmuc) {
    	DanhmucService.addList(danhmuc);
		return new ResponseEntity<Object>(danhmuc, HttpStatus.OK);
	}
    @ApiOperation(value = "Find One Danh Mục",tags={"Danh Muc"},response=Danhmuc.class,produces = "application/json")
    @RequestMapping(value="/{idDanhmuc}",method=RequestMethod.GET)
	public ResponseEntity<Object> getById(@PathVariable int idDanhmuc) {
    	Danhmuc t= DanhmucService.findById(idDanhmuc);	
    	if(t!=null)
    		return new ResponseEntity<Object>(t,HttpStatus.OK);
    	return new ResponseEntity<Object>("Not Found",HttpStatus.NO_CONTENT);
	}
    @ApiOperation(value = "Add Danh Mục",tags={"Danh Muc"})
    @RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<Object> createDanhmuc(@RequestBody Danhmuc Danhmuc) {
		DanhmucService.create(Danhmuc);
	    return new ResponseEntity<Object>("CREATE!", HttpStatus.CREATED);
	}
    @ApiOperation(value = "Update Danh Mục",tags={"Danh Muc"})
    @RequestMapping(value="/{idDanhmuc}",method=RequestMethod.PUT)
	public ResponseEntity<Object> updateDanhmuc(@PathVariable int idDanhmuc,@RequestBody Danhmuc Danhmuc) {
    	DanhmucService.update(idDanhmuc,Danhmuc);
    	return new ResponseEntity<Object>(idDanhmuc,HttpStatus.OK);
	}
    @ApiOperation(value="Delete Danh Mục",tags= {"Danh Muc"})
    @RequestMapping(value="/{idDanhmuc}",method=RequestMethod.DELETE)
	public ResponseEntity<Object> deleteDanhmuc(@PathVariable int idDanhmuc) {
    	DanhmucService.delete(idDanhmuc);
		return new ResponseEntity<Object>(idDanhmuc,HttpStatus.OK);
	}

}
