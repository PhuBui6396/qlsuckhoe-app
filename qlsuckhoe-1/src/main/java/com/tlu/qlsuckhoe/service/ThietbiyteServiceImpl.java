/*
 * Created on 2018-09-27 ( Date ISO 2018-09-27 - Time 09:24:56 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.tlu.qlsuckhoe.service;



import java.util.List;

import javax.transaction.Transactional;

import com.tlu.qlsuckhoe.repository.ThietbiyteRepository;
import com.tlu.qlsuckhoe.service.criteria.ThietbiyteCriteria;
import com.tlu.qlsuckhoe.entity.PageResult;
import com.tlu.qlsuckhoe.entity.Thietbiyte;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ThietbiyteServiceImpl implements ThietbiyteService {

	@Autowired
	private ThietbiyteRepository thietbiyteRepository;
	@Autowired
	private NhasanxuatServiceImpl nhasx;
	@Override
	public Thietbiyte findById(Integer idthietbiyte) {
		return thietbiyteRepository.findOne(idthietbiyte);
	}

	@Override
	@Transactional
	public void delete(Integer idthietbiyte) {
		thietbiyteRepository.deleteById(idthietbiyte);
	}

	@Override
	@Transactional
	public Thietbiyte create(ThietbiyteCriteria thietbiyte) {
		Thietbiyte th= new Thietbiyte();
		th.setNgaynhap(thietbiyte.getNgaynhap());
		th.setNhasanxuat(nhasx.findById(thietbiyte.getIdnhasanxuat()));
		th.setTenthietbi(thietbiyte.getTenthietbi());
		th.setCachdung(thietbiyte.getCachdung());
		th.setSoluong(thietbiyte.getSoluong());
		thietbiyteRepository.save(th);
		return th;
	}

	@Override
	@Transactional
	public Thietbiyte update(Integer idthietbiyte,ThietbiyteCriteria thietbiyteToUpdate) {
				Thietbiyte thietbiyte = findById(idthietbiyte);
				thietbiyte.setCachdung(thietbiyteToUpdate.getCachdung());
				thietbiyte.setNgaynhap(thietbiyteToUpdate.getNgaynhap());
				thietbiyte.setNhasanxuat(nhasx.findById(thietbiyteToUpdate.getIdnhasanxuat()));
				thietbiyte.setTenthietbi(thietbiyteToUpdate.getTenthietbi());
				thietbiyte.setSoluong(thietbiyteToUpdate.getSoluong());
				return thietbiyteRepository.save(thietbiyte);
	}

	@Override
	public Boolean exist(Thietbiyte thietbiyte) {
		return thietbiyteRepository.exists(thietbiyte.getIdthietbiyte());
																					}

	@Override
	public List<Thietbiyte> findAll() {
		return thietbiyteRepository.findAllThietbi();
	}

	@Override
	public PageResult<Thietbiyte> search(int pageNo, int pageSize) {
		int skip=(pageNo-1)*pageSize;
		List<Thietbiyte> thietbi= thietbiyteRepository.findAllThietbiyteWithPagination(skip,pageSize);
		int totalRecordCount=(int)thietbiyteRepository.count();
		return new PageResult<Thietbiyte>(thietbi, pageNo, pageSize, totalRecordCount);
	}

}
