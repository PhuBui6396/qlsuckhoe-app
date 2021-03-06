/*
 * Created on 2018-09-27 ( Date ISO 2018-09-27 - Time 09:24:54 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.tlu.qlsuckhoe.service;

import com.tlu.qlsuckhoe.entity.Danhmuc;
import com.tlu.qlsuckhoe.entity.PageResult;

import java.util.List;

public interface DanhmucService {

	public Danhmuc findById(Integer iddanhmuc);

	public List<Danhmuc> findAll();

	public void delete(Integer iddanhmuc);

	public Danhmuc create(Danhmuc danhmuc);
	
	public void addList(List<Danhmuc> danhmuc);

	public Danhmuc update(int iddanhmuc,Danhmuc danhmuc);

	public Boolean exist(Danhmuc danhmuc);
	
	public PageResult<Danhmuc> search(int pageNo,int pageSize);
}
