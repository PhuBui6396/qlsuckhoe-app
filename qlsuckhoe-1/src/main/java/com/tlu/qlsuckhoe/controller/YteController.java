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
import com.tlu.qlsuckhoe.entity.Yte;
import com.tlu.qlsuckhoe.service.YteServiceImpl;
import com.tlu.qlsuckhoe.service.criteria.YteCriteria;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin
@RequestMapping(value="ADMIN/yte")
@Api(value="onlinestore", description="Quản lý Nhân Viên y tế",tags= {"Nhan vien y te"})
public class YteController {
	@Autowired
	private YteServiceImpl YteService;
	@ApiOperation(value = "Paging List Nhân Viên Y Tế",response = Iterable.class,tags={"Nhan vien y te"})
	@RequestMapping(method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<PageResult<Yte>> search(@RequestParam("page") int page,@RequestParam("pagesize") int pagesize) {
		return new ResponseEntity<PageResult<Yte>>(YteService.search(page, pagesize), HttpStatus.OK);
	}
    @ApiOperation(value = "List Nhân Viên Y Tế",response = Iterable.class,tags={"Nhan vien y te"})
    @RequestMapping(value="/list",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<List<Yte>> findAll() {
		return new ResponseEntity<List<Yte>>(YteService.findAll(), HttpStatus.OK);
	}
    @ApiOperation(value = "Find One Nhân Viên Y Tế",tags={"Nhan vien y te"},response=Yte.class,produces = "application/json")
    @RequestMapping(value="/{idYte}",method=RequestMethod.GET)
	public ResponseEntity<Object> getById(@PathVariable int idYte) {
    	Yte t= YteService.findById(idYte);	
    	if(t!=null)
    		return new ResponseEntity<Object>(t,HttpStatus.OK);
    	return new ResponseEntity<Object>("Not Found",HttpStatus.NO_CONTENT);
	}
    @ApiOperation(value = "Add Nhân Viên Y Tế",tags={"Nhan vien y te"})
    @RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<Object> createYte(@RequestBody YteCriteria Yte) {
		YteService.create(Yte);
	    return new ResponseEntity<Object>(Yte, HttpStatus.OK);
	}
    @ApiOperation(value = "Update Nhân Viên Y Tế",tags={"Nhan vien y te"})
    @RequestMapping(value="/{idYte}",method=RequestMethod.PUT)
	public ResponseEntity<Object> updateYte(@PathVariable int idYte,@RequestBody YteCriteria Yte) {
    	YteService.update(idYte,Yte);
    	return new ResponseEntity<Object>(idYte,HttpStatus.OK);
	}
    @ApiOperation(value="Delete Nhân Viên Y Tế",tags= {"Nhan vien y te"})
    @RequestMapping(value="/{idYte}",method=RequestMethod.DELETE)
	public ResponseEntity<Object> deleteYte(@PathVariable int idYte) {
    	YteService.delete(idYte);
    	return new ResponseEntity<Object>(idYte,HttpStatus.OK);
    }

}
