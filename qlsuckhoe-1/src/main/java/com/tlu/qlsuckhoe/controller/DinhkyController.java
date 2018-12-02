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
import com.tlu.qlsuckhoe.entity.Dinhky;
import com.tlu.qlsuckhoe.service.DinhkyServiceImpl;
import com.tlu.qlsuckhoe.service.criteria.ChisoBMI;
import com.tlu.qlsuckhoe.service.criteria.CountBenh1;
import com.tlu.qlsuckhoe.service.criteria.Dinhkyadd;
import com.tlu.qlsuckhoe.service.criteria.Dinhkylist;
import com.tlu.qlsuckhoe.service.criteria.Dinhkypost;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin
@RequestMapping(value="YTE/dinhky")
@Api(value="onlinestore", description="Quản lý khám định kỳ",tags= {"Kham dinh ky"})
public class DinhkyController {
	@Autowired
	private DinhkyServiceImpl DinhkyService;
    @ApiOperation(value = "Find Kết Quả Khám Định Kỳ Sinh Viên",tags={"Kham dinh ky"},response=Dinhkylist.class,produces = "application/json")
    @RequestMapping(value="/findsv",method=RequestMethod.GET)
	public ResponseEntity<List<Dinhkylist>> searchSV(@RequestParam("idsinhvien") int idsinhvien,@RequestParam("idhocki") int idhocki) {	
    	return new ResponseEntity<List<Dinhkylist>>(DinhkyService.findSvKhamByIdsinhvien(idsinhvien, idhocki),HttpStatus.OK);
	}
    @ApiOperation(value = "Find Kết Quả Khám Định Kỳ Sinh Viên",tags={"Kham dinh ky"},response=Dinhky.class,produces = "application/json")
    @RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<List<Dinhky>> findAll() {	
    	return new ResponseEntity<List<Dinhky>>(DinhkyService.findAll(),HttpStatus.OK);
	}
    @ApiOperation(value = "Find Benh",tags={"Kham dinh ky"},response=Dinhky.class,produces = "application/json")
    @RequestMapping(value="/benh",method=RequestMethod.GET)
	public ResponseEntity<CountBenh1> findBenh(@RequestParam int idhocki) {	
    	return new ResponseEntity<CountBenh1>(DinhkyService.countBenh(idhocki),HttpStatus.OK);
	}
    @ApiOperation(value = "Find Chỉ Số BMI",tags={"Kham dinh ky"},produces = "application/json")
    @RequestMapping(value="/chiso",method=RequestMethod.GET)
	public ResponseEntity<ChisoBMI> findChiso(@RequestParam int idhocki) {	
    	return new ResponseEntity<ChisoBMI>(DinhkyService.chisoBMI(idhocki),HttpStatus.OK);
	}
    @ApiOperation(value = "Find Kết Quả Mới Khám Định Kỳ Sinh Viên",tags={"Kham dinh ky"},response=Dinhky.class,produces = "application/json")
    @RequestMapping(value="/findsv/{idsinhvien}",method=RequestMethod.GET)
	public ResponseEntity<Dinhky> finKetqua(@PathVariable int idsinhvien) {	
    	return new ResponseEntity<Dinhky>(DinhkyService.findKetquaNew(idsinhvien),HttpStatus.OK);
	}
    @ApiOperation(value = "Find All Sinh Viên Đã Khám Định Kỳ",tags={"Kham dinh ky"},response=Dinhkylist.class,produces = "application/json")
    @RequestMapping(value="/findsvby",method=RequestMethod.GET)
	public ResponseEntity<List<Dinhkylist>> findAllsv(@RequestParam("idhocki") int idhocki,@RequestParam("khoa") String khoa,@RequestParam("chuyennganh") String chuyennganh) {	
    	return new ResponseEntity<List<Dinhkylist>>(DinhkyService.findSvKhamByHockiAndKhoa(idhocki, khoa,chuyennganh),HttpStatus.OK);
	}
    @ApiOperation(value = "Add Khám Định Kỳ",tags={"Kham dinh ky"})
    @RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<Object> createDinhky(@RequestBody Dinhkyadd dinhky) {
		DinhkyService.create(dinhky);
	    return new ResponseEntity<Object>(dinhky, HttpStatus.OK);
	}
    @ApiOperation(value = "Update Khám Định Kỳ",tags={"Kham dinh ky"})
    @RequestMapping(value="/update",method=RequestMethod.PUT,produces="text/plain")
	public ResponseEntity<String> updateDinhky(@RequestBody Dinhkypost Dinhky) {
    	DinhkyService.update(Dinhky);
    	return new ResponseEntity<String>("Update Success!",HttpStatus.OK);
	}
    @ApiOperation(value="Delete Khám Định Kỳ",tags= {"Kham dinh ky"})
    @RequestMapping(value="/delete",method=RequestMethod.PUT,produces="text/plain")
	public ResponseEntity<String> deleteDinhky(@RequestBody Dinhkypost idDinhky) {
    	DinhkyService.delete(idDinhky);
    	return new ResponseEntity<String>("Delete Success!",HttpStatus.OK);
	}
}
