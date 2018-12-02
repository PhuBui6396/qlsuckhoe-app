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
import com.tlu.qlsuckhoe.entity.Loaithuoc;
import com.tlu.qlsuckhoe.service.LoaithuocServiceImpl;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin
@RequestMapping(value="YTE/loaithuoc")
@Api(value="onlinestore", description="Quản lý loại thuốc",tags= {"loai thuoc"})
public class LoaithuocController {
	@Autowired
	private LoaithuocServiceImpl loaithuocService;
	@ApiOperation(value = "Paging List loại thuốc",response = Iterable.class,tags={"loai thuoc"})
	@RequestMapping(method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<PageResult<Loaithuoc>> search(@RequestParam("page") int page,@RequestParam("pagesize") int pagesize) {
		return new ResponseEntity<PageResult<Loaithuoc>>(loaithuocService.search(page, pagesize), HttpStatus.OK);
	}
    @ApiOperation(value = "List loại thuốc",response = Iterable.class,tags={"loai thuoc"})
    @RequestMapping(value="/list",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<List<Loaithuoc>> findAll() {
		return new ResponseEntity<List<Loaithuoc>>(loaithuocService.findAll(), HttpStatus.OK);
	}
    @ApiOperation(value = "Find One loại thuốc",tags={"loai thuoc"},response=Loaithuoc.class,produces = "application/json")
    @RequestMapping(value="/{idloaithuoc}",method=RequestMethod.GET)
	public ResponseEntity<Object> getById(@PathVariable int idloaithuoc) {
    	Loaithuoc t= loaithuocService.findById(idloaithuoc);	
    	if(t!=null)
    		return new ResponseEntity<Object>(t,HttpStatus.OK);
    	return new ResponseEntity<Object>("Not Found",HttpStatus.NO_CONTENT);
	}
    @ApiOperation(value = "Add loại thuốc",tags={"loai thuoc"})
    @RequestMapping(method=RequestMethod.POST,produces = "text/plain")
	public ResponseEntity<Object> createloaithuoc(@RequestBody Loaithuoc loaithuoc) {
		loaithuocService.create(loaithuoc);
	    return new ResponseEntity<Object>("Create!", HttpStatus.OK);
	}
    @ApiOperation(value = "Add List loại thuốc",tags={"loai thuoc"})
    @RequestMapping(value="/list",method=RequestMethod.POST)
	public ResponseEntity<Object> addListloaithuoc(@RequestBody List<Loaithuoc> loaithuoc) {
		loaithuocService.addList(loaithuoc);
	    return new ResponseEntity<Object>(loaithuoc, HttpStatus.OK);
	}
    @ApiOperation(value = "Update loại thuốc",tags={"loai thuoc"})
    @RequestMapping(value="/{idloaithuoc}",method=RequestMethod.PUT)
	public ResponseEntity<Object> updateloaithuoc(@PathVariable int idloaithuoc,@RequestBody Loaithuoc loaithuoc) {
    	loaithuocService.update(idloaithuoc,loaithuoc);
    	return new ResponseEntity<Object>(idloaithuoc,HttpStatus.OK);
	}
    @ApiOperation(value="Delete loại thuốc",tags= {"loai thuoc"})
    @RequestMapping(value="/{idloaithuoc}",method=RequestMethod.DELETE)
	public ResponseEntity<Object> deleteloaithuoc(@PathVariable int idloaithuoc) {
    	loaithuocService.delete(idloaithuoc);
    	return new ResponseEntity<Object>(idloaithuoc,HttpStatus.OK);
	}
}
