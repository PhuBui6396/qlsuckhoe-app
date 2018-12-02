package com.tlu.qlsuckhoe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
//import com.tlu.qlsuckhoe.entity.PageResult;
import com.tlu.qlsuckhoe.service.SucosuckhoeServiceImpl;
import com.tlu.qlsuckhoe.service.criteria.Sucosuckhoeadd;
import com.tlu.qlsuckhoe.service.criteria.Sucosuckhoelist;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin
@RequestMapping(value="YTE/sucosuckhoe")
@Api(value="onlinestore", description="Quản lý Sự Cố Sức Khỏe",tags= {"Su Co Suc Khoe"})
public class SucosuckhoeController {
	@Autowired
	private SucosuckhoeServiceImpl SucosuckhoeService;
//	@ApiOperation(value = "Paging List Sự Cố Sức Khỏe",response = Iterable.class,tags={"Su Co Suc Khoe"})
//	@RequestMapping(method=RequestMethod.GET,produces = "application/json")
//	public ResponseEntity<PageResult<Sucosuckhoe>> search(@RequestParam("page") int page,@RequestParam("pagesize") int pagesize) {
//		return new ResponseEntity<PageResult<Sucosuckhoe>>(SucosuckhoeService.search(page, pagesize), HttpStatus.OK);
//	}
    @ApiOperation(value = "List Sự Cố Sức Khỏe",response = Sucosuckhoelist.class,tags={"Su Co Suc Khoe"})
    @RequestMapping(value="/list",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<List<Sucosuckhoelist>> findAll(@RequestParam("khoa") String khoa) {
		return new ResponseEntity<List<Sucosuckhoelist>>(SucosuckhoeService.findAllSuco(khoa), HttpStatus.OK);
	}
    @ApiOperation(value = "Find Sự Cố Sức Khỏe Của Sinh Viên Theo Ngày",response = Iterable.class,tags={"Su Co Suc Khoe"})
    @RequestMapping(value="/findsv",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<Sucosuckhoelist> findSv(@RequestParam("idsinhvien")int idsinhvien,@RequestParam("ngay") String ngay) {
		return new ResponseEntity<Sucosuckhoelist>(SucosuckhoeService.findBySinhVien(idsinhvien, ngay), HttpStatus.OK);
	}
    @ApiOperation(value = "Find Sự Cố Sức Khỏe Của Sinh Viên",response = Iterable.class,tags={"Su Co Suc Khoe"})
    @RequestMapping(value="/findidsv",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<Object> findIdsv(@RequestParam("idsinhvien")int idsinhvien) {
		return new ResponseEntity<Object>(SucosuckhoeService.findBySV(idsinhvien), HttpStatus.OK);
	}
    @ApiOperation(value = "Add Sự Cố Sức Khỏe",tags={"Su Co Suc Khoe"})
    @RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<Object> createSucosuckhoe(@RequestBody Sucosuckhoeadd sucosuckhoe) {
		SucosuckhoeService.create(sucosuckhoe);
	    return new ResponseEntity<Object>(sucosuckhoe, HttpStatus.CREATED);
	}
    @ApiOperation(value = "Update Sự Cố Sức Khỏe",tags={"Su Co Suc Khoe"})
    @RequestMapping(value="/update",method=RequestMethod.PUT,produces="text/plain")
	public ResponseEntity<String> updateSucosuckhoe(@RequestParam("idsinhvien") int idsinhvien,@RequestParam("ngay") String ngay,@RequestBody Sucosuckhoeadd Sucosuckhoe) {
    	SucosuckhoeService.update(idsinhvien,ngay,Sucosuckhoe);
    	return new ResponseEntity<String>("Update Success!",HttpStatus.OK);
	}
    @ApiOperation(value="Delete Sự Cố Sức Khỏe",tags= {"Su Co Suc Khoe"})
    @RequestMapping(value="/delete",method=RequestMethod.DELETE,produces="text/plain")
	public ResponseEntity<String> deleteSucosuckhoe(@RequestParam("idsinhvien") int idsinhvien,@RequestParam("ngay") String ngay) {
    	SucosuckhoeService.delete(idsinhvien,ngay);
    	return new ResponseEntity<String>("Delete Success!",HttpStatus.OK);
	}
}
