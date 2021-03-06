/*
 * Created on 2018-09-27 ( Date ISO 2018-09-27 - Time 09:24:55 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.tlu.qlsuckhoe.service;



import java.util.List;

import javax.transaction.Transactional;

import com.tlu.qlsuckhoe.repository.LoaithuocRepository;
import com.tlu.qlsuckhoe.entity.Loaithuoc;
import com.tlu.qlsuckhoe.entity.PageResult;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class LoaithuocServiceImpl implements LoaithuocService {

	@Autowired
	private LoaithuocRepository loaithuocRepository;

	@Override
	public Loaithuoc findById(Integer idloaithuoc) {
		return loaithuocRepository.findOne(idloaithuoc);
	}

	@Override
	@Transactional
	public void delete(Integer idloaithuoc) {
		loaithuocRepository.DeleteById(idloaithuoc);
	}

	@Override
	public Loaithuoc create(Loaithuoc loaithuoc) {
		return loaithuocRepository.save(loaithuoc);
	}

	@Override
	@Transactional
	public Loaithuoc update(int idloaithuoc,Loaithuoc loaithuocToUpdate) {
		Loaithuoc loaithuoc=findById(idloaithuoc);
		loaithuoc.setTenloai(loaithuocToUpdate.getTenloai());
		return loaithuocRepository.save(loaithuoc);
	}

	@Override
	public Boolean exist(Loaithuoc loaithuoc) {
						return loaithuocRepository.exists(loaithuoc.getIdloaithuoc());
									}

	@Override
	public List<Loaithuoc> findAll() {
		return loaithuocRepository.findAll();
	}
	@Override
	public PageResult<Loaithuoc> search(int pageNo, int pageSize) {
		int skip=(pageNo-1)*pageSize;
		List<Loaithuoc> nhasx= loaithuocRepository.findAllLoaithuocWithPagination(skip, pageSize);
		int totalRecordCount=(int)loaithuocRepository.count();
		return new PageResult<Loaithuoc>(nhasx, pageNo, pageSize, totalRecordCount);
	}

	@Override
	@Transactional
	public void addList(List<Loaithuoc> loaithuoc) {
		loaithuocRepository.save(loaithuoc);
	}

}

