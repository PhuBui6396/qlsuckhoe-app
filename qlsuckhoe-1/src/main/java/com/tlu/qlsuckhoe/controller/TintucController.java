package com.tlu.qlsuckhoe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.web.PagedResourcesAssembler;
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
import com.tlu.qlsuckhoe.entity.Tintuc;
import com.tlu.qlsuckhoe.service.TintucServiceImpl;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
//import io.swagger.annotations.ApiResponses;
//import io.swagger.annotations.ApiResponse;
@RestController
@CrossOrigin
@RequestMapping(value = "YTE/tintuc")
@Api(value="onlinestore", description="Quản lý tin tức",tags= {"Tin tuc"})
public class TintucController {
	@Autowired
	private TintucServiceImpl tintucService;
//    @ApiResponses(value = {
//            @ApiResponse(code = 200, message = "Successfully retrieved list"),
//            @ApiResponse(code = 204, message = "identity deleted sucessfully"),
//            @ApiResponse(code = 401, message = "You are not authorized to view the resource"),
//            @ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden"),
//            @ApiResponse(code = 404, message = "The resource you were trying to reach is not found")
//    })
    @ApiOperation(value = "Paging List Tin Tức",response = Iterable.class,tags={"Tin tuc"})
	@RequestMapping(method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<PageResult<Tintuc>> search(@RequestParam("page") int page,@RequestParam("pagesize") int pagesize) {
		return new ResponseEntity<PageResult<Tintuc>>(tintucService.search(page, pagesize), HttpStatus.OK);
	}
    @ApiOperation(value = "List Tin Tức",response = Iterable.class,tags={"Tin tuc"})
    @RequestMapping(value="/list",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<List<Tintuc>> findAll() {
		return new ResponseEntity<List<Tintuc>>(tintucService.findAll(), HttpStatus.OK);
	}
    @ApiOperation(value = "Find One Tin Tức",tags={"Tin tuc"},response=Tintuc.class,produces = "application/json")
    @RequestMapping(value="/{idtintuc}",method=RequestMethod.GET)
	public ResponseEntity<Object> getById(@PathVariable int idtintuc) {
    	Tintuc t= tintucService.findById(idtintuc);	
    	if(t!=null)
    		return new ResponseEntity<Object>(t,HttpStatus.OK);
    	return new ResponseEntity<Object>("Not Found",HttpStatus.NO_CONTENT);
	}
    @ApiOperation(value = "Add Tin Tức",tags={"Tin tuc"})
    @RequestMapping(method=RequestMethod.POST,produces = "text/plain")
	public ResponseEntity<String> createTintuc(@RequestBody Tintuc tintuc) {
		tintucService.create(tintuc);
	    return new ResponseEntity<String>("Create!", HttpStatus.CREATED);
	}
    @ApiOperation(value = "Update Tin Tức",tags={"Tin tuc"})
    @RequestMapping(value="/{idtintuc}",method=RequestMethod.PUT,produces="text/plain")
	public ResponseEntity<String> updateTintuc(@PathVariable int idtintuc,@RequestBody Tintuc tintuc) {
    	tintucService.update(idtintuc,tintuc);
    	return new ResponseEntity<String>("Update Success!",HttpStatus.OK);
	}
    @ApiOperation(value="Delete Tin Tức",tags= {"Tin tuc"})
    @RequestMapping(value="/{idtintuc}",method=RequestMethod.DELETE,produces="text/plain")
	public ResponseEntity<String> deleteTinTuc(@PathVariable int idtintuc) {
    	boolean check = tintucService.delete(idtintuc);
    	if(check)
    		return new ResponseEntity<String>("Delete Success!",HttpStatus.OK);
    	return new ResponseEntity<String>("Delete Fail!",HttpStatus.NO_CONTENT);
	}
}
