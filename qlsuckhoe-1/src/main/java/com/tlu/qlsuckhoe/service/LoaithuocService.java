/*
 * Created on 2018-09-27 ( Date ISO 2018-09-27 - Time 09:24:55 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.tlu.qlsuckhoe.service;

import com.tlu.qlsuckhoe.entity.Loaithuoc;
import com.tlu.qlsuckhoe.entity.PageResult;

import java.util.List;

public interface LoaithuocService {

	public Loaithuoc findById(Integer idloaithuoc);

	public List<Loaithuoc> findAll();

	public void delete(Integer idloaithuoc);

	public Loaithuoc create(Loaithuoc loaithuoc);
	
	public void addList(List<Loaithuoc> loaithuoc);

	public Loaithuoc update(int idloaithuoc,Loaithuoc loaithuoc);

	public Boolean exist(Loaithuoc loaithuoc);
	
	public PageResult<Loaithuoc> search(int pageNo,int pageSize);
}
