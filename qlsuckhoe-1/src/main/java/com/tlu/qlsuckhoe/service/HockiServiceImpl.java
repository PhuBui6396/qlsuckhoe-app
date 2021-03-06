/*
 * Created on 2018-09-27 ( Date ISO 2018-09-27 - Time 09:24:55 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.tlu.qlsuckhoe.service;



import java.util.List;

import javax.transaction.Transactional;

import com.tlu.qlsuckhoe.repository.HockiRepository;
import com.tlu.qlsuckhoe.entity.Hocki;
import com.tlu.qlsuckhoe.entity.PageResult;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class HockiServiceImpl implements HockiService {

	@Autowired
	private HockiRepository hockiRepository;

	@Override
	public Hocki findById(Integer idhocki) {
		return hockiRepository.findOne(idhocki);
	}

	@Override
	@Transactional
	public void delete(Integer idhocki) {
			hockiRepository.DeleteById(idhocki);
	}
	@Override
	@Transactional
	public Hocki create(Hocki hocki) {
		return hockiRepository.save(hocki);
	}

	@Override
	@Transactional
	public Hocki update(int idhocki,Hocki hockiToUpdate) {
		Hocki hocki = findById(idhocki);
		hocki.setTenhocki(hockiToUpdate.getTenhocki());
		return hockiRepository.save(hocki);
	}

	@Override
	public Boolean exist(Hocki hocki) {
						return hockiRepository.exists(hocki.getIdhocki());
									}

	@Override
	public List<Hocki> findAll() {
		return hockiRepository.listHocki();
	}

	@Override
	public PageResult<Hocki> search(int pageNo, int pageSize) {
		int skip=(pageNo-1)*pageSize;
		List<Hocki> Hocki= hockiRepository.findAllHockiWithPagination(skip, pageSize);
		int totalRecordCount=(int)hockiRepository.count();
		return new PageResult<Hocki>(Hocki, pageNo, pageSize, totalRecordCount);
	}

	@Override
	@Transactional
	public void addHocki(List<Hocki> hocki) {
		hockiRepository.save(hocki);
	}
}

