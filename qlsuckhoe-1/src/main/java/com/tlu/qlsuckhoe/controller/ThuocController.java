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
import com.tlu.qlsuckhoe.entity.Thuoc;
import com.tlu.qlsuckhoe.service.ThuocServiceImpl;
import com.tlu.qlsuckhoe.service.criteria.ThuocCriteria;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin
@RequestMapping(value="YTE/thuoc")
@Api(value="onlinestore", description="Quản lý Thuốc",tags= {"Thuoc"})
public class ThuocController {
	@Autowired
	private ThuocServiceImpl ThuocService;
	@ApiOperation(value = "Paging List Thuốc",response = Iterable.class,tags={"Thuoc"})
	@RequestMapping(method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<PageResult<Thuoc>> search(@RequestParam("page") int page,@RequestParam("pagesize") int pagesize) {
		return new ResponseEntity<PageResult<Thuoc>>(ThuocService.search(page, pagesize), HttpStatus.OK);
	}
    @ApiOperation(value = "List Thuốc",response = Iterable.class,tags={"Thuoc"})
    @RequestMapping(value="/list",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<List<Thuoc>> findAll() {
		return new ResponseEntity<List<Thuoc>>(ThuocService.findAll(), HttpStatus.OK);
	}
    @ApiOperation(value = "Find One Thuốc",tags={"Thuoc"},response=Thuoc.class,produces = "application/json")
    @RequestMapping(value="/{idThuoc}",method=RequestMethod.GET)
	public ResponseEntity<Object> getById(@PathVariable int idThuoc) {
    	Thuoc t= ThuocService.findById(idThuoc);	
    	if(t!=null)
    		return new ResponseEntity<Object>(t,HttpStatus.OK);
    	return new ResponseEntity<Object>("Not Found",HttpStatus.NO_CONTENT);
	}
    @ApiOperation(value = "Find Thuốc By Idloaithuoc",tags={"Thuoc"},response=Thuoc.class,produces = "application/json")
    @RequestMapping(value="/loaithuoc",method=RequestMethod.GET)
	public ResponseEntity<Object> getAllThuocById(@RequestParam("idloaithuoc") int idloaithuoc) {
    	List<Thuoc> t= ThuocService.findAllThuocByIdloaithuoc(idloaithuoc);	
    	if(t!=null)
    		return new ResponseEntity<Object>(t,HttpStatus.OK);
    	return new ResponseEntity<Object>("Not Found",HttpStatus.NO_CONTENT);
	}
    @ApiOperation(value = "Add Thuốc",tags={"Thuoc"})
    @RequestMapping(method=RequestMethod.POST,produces = "text/plain")
	public ResponseEntity<String> createThuoc(@RequestBody ThuocCriteria Thuoc) {
		ThuocService.create(Thuoc);
	    return new ResponseEntity<String>("Create!", HttpStatus.OK);
	}
    @ApiOperation(value = "Update Thuốc",tags={"Thuoc"})
    @RequestMapping(value="/{idThuoc}",method=RequestMethod.PUT,produces="text/plain")
	public ResponseEntity<String> updateThuoc(@PathVariable int idThuoc,@RequestBody ThuocCriteria Thuoc) {
    	ThuocService.update(idThuoc,Thuoc);
    	return new ResponseEntity<String>("Update Success!",HttpStatus.OK);
	}
    @ApiOperation(value="Delete Thuốc",tags= {"Thuoc"})
    @RequestMapping(value="/{idThuoc}",method=RequestMethod.DELETE,produces="text/plain")
	public ResponseEntity<String> deleteThuoc(@PathVariable int idThuoc) {
    	ThuocService.delete(idThuoc);
    	return new ResponseEntity<String>("Delete Success!",HttpStatus.OK);
	}

}
