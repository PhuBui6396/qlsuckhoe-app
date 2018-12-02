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
import com.tlu.qlsuckhoe.entity.Nhasanxuat;
import com.tlu.qlsuckhoe.service.NhasanxuatServiceImpl;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin
@RequestMapping(value = "YTE/nhasanxuat")
@Api(value="onlinestore", description="Quản lý nhà sản xuất",tags= {"Nha San Xuat"})
public class NhasanxuatController {
	@Autowired
	private NhasanxuatServiceImpl nhasanxuatService;
	@ApiOperation(value = "Paging List Nhà Sản Xuất",response = Iterable.class,tags={"Nha San Xuat"})
	@RequestMapping(method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<PageResult<Nhasanxuat>> search(@RequestParam("page") int page,@RequestParam("pagesize") int pagesize) {
		return new ResponseEntity<PageResult<Nhasanxuat>>(nhasanxuatService.search(page, pagesize), HttpStatus.OK);
	}
    @ApiOperation(value = "List Nhà Sản Xuất",response = Iterable.class,tags={"Nha San Xuat"})
    @RequestMapping(value="/list",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<List<Nhasanxuat>> findAll() {
		return new ResponseEntity<List<Nhasanxuat>>(nhasanxuatService.findAll(), HttpStatus.OK);
	}
    @ApiOperation(value = "List Nhà Sản Xuất",response = Iterable.class,tags={"Nha San Xuat"})
    @RequestMapping(value="/list",method=RequestMethod.POST)
	public ResponseEntity<Object> addList(@RequestBody List<Nhasanxuat> nhasanxuat) {
    	nhasanxuatService.addList(nhasanxuat);
		return new ResponseEntity<Object>(nhasanxuat, HttpStatus.OK);
	}
    @ApiOperation(value = "Find One Nhà Sản Xuất",tags={"Nha San Xuat"},response=Nhasanxuat.class,produces = "application/json")
    @RequestMapping(value="/{idNhasanxuat}",method=RequestMethod.GET)
	public ResponseEntity<Object> getById(@PathVariable int idNhasanxuat) {
    	Nhasanxuat t= nhasanxuatService.findById(idNhasanxuat);	
    	if(t!=null)
    		return new ResponseEntity<Object>(t,HttpStatus.OK);
    	return new ResponseEntity<Object>("Not Found",HttpStatus.NO_CONTENT);
	}
    @ApiOperation(value = "Add Nhà Sản Xuất",tags={"Nha San Xuat"})
    @RequestMapping(method=RequestMethod.POST,produces = "text/plain")
	public ResponseEntity<String> createNhasanxuat(@RequestBody Nhasanxuat Nhasanxuat) {
		nhasanxuatService.create(Nhasanxuat);
	    return new ResponseEntity<String>("Create!", HttpStatus.CREATED);
	}
    @ApiOperation(value = "Update Nhà Sản Xuất",tags={"Nha San Xuat"})
    @RequestMapping(value="/{idNhasanxuat}",method=RequestMethod.PUT)
	public ResponseEntity<Object> updateNhasanxuat(@PathVariable int idNhasanxuat,@RequestBody Nhasanxuat Nhasanxuat) {
    	nhasanxuatService.update(idNhasanxuat,Nhasanxuat);
    	return new ResponseEntity<Object>(idNhasanxuat,HttpStatus.OK);
	}
    @ApiOperation(value="Delete Nhà Sản Xuất",tags= {"Nha San Xuat"})
    @RequestMapping(value="/{idNhasanxuat}",method=RequestMethod.DELETE)
	public ResponseEntity<Object> deleteNhasanxuat(@PathVariable int idNhasanxuat) {
    	nhasanxuatService.delete(idNhasanxuat);
    	return new ResponseEntity<Object>(idNhasanxuat,HttpStatus.OK);
	}
}
