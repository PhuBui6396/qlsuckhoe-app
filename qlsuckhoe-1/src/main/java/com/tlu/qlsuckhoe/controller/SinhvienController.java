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

import com.tlu.qlsuckhoe.entity.Chuyennganh;
import com.tlu.qlsuckhoe.entity.Khoa;
//import com.tlu.qlsuckhoe.entity.Khoa;
import com.tlu.qlsuckhoe.entity.PageResult;
import com.tlu.qlsuckhoe.entity.Sinhvien;
import com.tlu.qlsuckhoe.service.SinhvienServiceImpl;
import com.tlu.qlsuckhoe.service.criteria.SinhvienCriteria;
import com.tlu.qlsuckhoe.service.criteria.SinhvienPost;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin
@RequestMapping(value="YTE/sinhvien")
@Api(value="onlinestore", description="Quản lý sinh viên",tags= {"Sinh Vien"})
public class SinhvienController {
	@Autowired
	private SinhvienServiceImpl SinhvienService;
	@ApiOperation(value = "Paging List sinh viên",response = Iterable.class,tags={"Sinh Vien"})
	@RequestMapping(method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<PageResult<Sinhvien>> search(@RequestParam("page") int page,@RequestParam("pagesize") int pagesize) {
		return new ResponseEntity<PageResult<Sinhvien>>(SinhvienService.seacrh(page, pagesize), HttpStatus.OK);
	}
	@ApiOperation(value = "Paging List Sinh Viên Khoa",response = Iterable.class,tags={"Sinh Vien"})
	@RequestMapping(value="/khoapage",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<PageResult<Sinhvien>> searchKhoaPagination(@RequestParam("khoa") String khoa,@RequestParam("page") int page,@RequestParam("pagesize") int pagesize) {
		return new ResponseEntity<PageResult<Sinhvien>>(SinhvienService.searchKhoaPagination(khoa,page,pagesize), HttpStatus.OK);
	}
	@ApiOperation(value = "List Sinh Viên Khoa",response = Iterable.class,tags={"Sinh Vien"})
	@RequestMapping(value="/khoasv",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<List<Sinhvien>> search(@RequestParam("khoa") String khoa) {
		return new ResponseEntity<List<Sinhvien>>(SinhvienService.searchKhoa(khoa), HttpStatus.OK);
	}
	@ApiOperation(value = "Find Sinh Viên",response = Iterable.class,tags={"Sinh Vien"})
	@RequestMapping(value="/findsv",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<Sinhvien> searchsv(@RequestParam("maten") String maten) {
		return new ResponseEntity<Sinhvien>(SinhvienService.searchMaten(maten), HttpStatus.OK);
	}
	@ApiOperation(value = "List Khoa",response = Iterable.class,tags={"Sinh Vien"})
	@RequestMapping(value="/khoa",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<List<Khoa>> findAllKhoa() {
		return new ResponseEntity<List<Khoa>>(SinhvienService.findAllKhoa(), HttpStatus.OK);
	}
	@ApiOperation(value = "List Chuyên Ngành",response = Iterable.class,tags={"Sinh Vien"})
	@RequestMapping(value="/chuyennganh",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<List<Chuyennganh>> findAllChuyenNganh() {
		return new ResponseEntity<List<Chuyennganh>>(SinhvienService.findAllChuyennganh(), HttpStatus.OK);
	}
	@ApiOperation(value = "List Sinh Viên Chuyên Ngành",response = Iterable.class,tags={"Sinh Vien"})
	@RequestMapping(value="/findcn",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<List<Sinhvien>> findAllSvChuyenNganh(@RequestParam("khoa") String khoa,@RequestParam("chuyennganh") String chuyennganh) {
		return new ResponseEntity<List<Sinhvien>>(SinhvienService.findSinhvienByCn(khoa, chuyennganh), HttpStatus.OK);
	}
    @ApiOperation(value = "List sinh viên",response = Iterable.class,tags={"Sinh Vien"})
    @RequestMapping(value="/list",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<List<Sinhvien>> findAll() {
		return new ResponseEntity<List<Sinhvien>>(SinhvienService.findAll(), HttpStatus.OK);
	}
    @ApiOperation(value = "Đổi Mật Khẩu")
    @RequestMapping(value="/change/{idsinhvien}",method=RequestMethod.PUT,produces = "text/plain")
	public ResponseEntity<String> ChangePass(@PathVariable("idsinhvien") int idsinhvien,@RequestBody String passWord) {
    	SinhvienService.changePass(idsinhvien, passWord);
		return new ResponseEntity<String>("Success!", HttpStatus.OK);
	}
    @ApiOperation(value = "Find One sinh viên",tags={"Sinh Vien"},response=Sinhvien.class,produces = "application/json")
    @RequestMapping(value="/{idSinhvien}",method=RequestMethod.GET)
	public ResponseEntity<Object> getById(@PathVariable int idSinhvien) {
    	Sinhvien t= SinhvienService.findById(idSinhvien);	
    	if(t!=null)
    		return new ResponseEntity<Object>(t,HttpStatus.OK);
    	return new ResponseEntity<Object>("Not Found",HttpStatus.NO_CONTENT);
	}
	@ApiOperation(value = "List Sinh Viên Chưa Khám Định Kỳ Theo Học Kỳ",response = Iterable.class,tags={"Sinh Vien"})
	@RequestMapping(value="/findsvdk",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<List<Sinhvien>> searchSinhvien(@RequestParam("khoa") String khoa,@RequestParam("idhocki") int idhocki) {
		return new ResponseEntity<List<Sinhvien>>(SinhvienService.findSinhvienByIdhk(khoa, idhocki), HttpStatus.OK);
	}
	@ApiOperation(value = "PageList Sinh Viên Chưa Khám Định Kỳ Theo Học Kỳ",response = Iterable.class,tags={"Sinh Vien"})
	@RequestMapping(value="/findpagesvdk",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<PageResult<Sinhvien>> searchSinhvienPage(@RequestParam("khoa") String khoa,@RequestParam("idhocki")int idhocki,@RequestParam("pageNo")int pageNo,@RequestParam("pageSize")int pageSize) {
		return new ResponseEntity<PageResult<Sinhvien>>(SinhvienService.findSinhvienByIdhkPage(khoa, idhocki, pageNo, pageSize), HttpStatus.OK);
	}
	@ApiOperation(value = "Find Sinh Viên Chưa Khám Định Kỳ Theo Mã Sinh Viên Hoặc Tên",response = Iterable.class,tags={"Sinh Vien"})
	@RequestMapping(value="/findmasv",method=RequestMethod.GET,produces = "application/json")
	public ResponseEntity<List<Sinhvien>> searchSinhvienMa(@RequestParam("khoa") String khoa,@RequestParam("idhocki")int idhocki,@RequestParam("maten")String maten) {
		return new ResponseEntity<List<Sinhvien>>(SinhvienService.findSvChuaKhamByHockiKhoaMaten(khoa, idhocki, maten), HttpStatus.OK);
	}
    @ApiOperation(value = "Add sinh viên",tags={"Sinh Vien"})
    @RequestMapping(value="/addsv",method=RequestMethod.POST)
	public ResponseEntity<Object> createSinhvien(@RequestBody SinhvienCriteria Sinhvien) {
		SinhvienService.create(Sinhvien);
	    return new ResponseEntity<Object>("Create!", HttpStatus.OK);
	}
    @ApiOperation(value = "Add list sinh viên",tags={"Sinh Vien"})
    @RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<Object> addListSinhvien(@RequestBody List<SinhvienPost> listsv) {
		SinhvienService.addListsv(listsv);
	    return new ResponseEntity<Object>(listsv, HttpStatus.OK);
	}
    @ApiOperation(value = "Update sinh viên",tags={"Sinh Vien"})
    @RequestMapping(value="/{idSinhvien}",method=RequestMethod.PUT)
	public ResponseEntity<Object> updateSinhvien(@PathVariable int idSinhvien,@RequestBody SinhvienCriteria Sinhvien) {
    	SinhvienService.update(idSinhvien,Sinhvien);
    	return new ResponseEntity<Object>(Sinhvien,HttpStatus.OK);
	}
    @ApiOperation(value="Delete sinh viên",tags= {"Sinh Vien"})
    @RequestMapping(value="/{idSinhvien}",method=RequestMethod.DELETE)
	public ResponseEntity<Object> deleteSinhvien(@PathVariable int idSinhvien) {
    	SinhvienService.delete(idSinhvien);
		return new ResponseEntity<Object>(idSinhvien,HttpStatus.OK);
	}


}
