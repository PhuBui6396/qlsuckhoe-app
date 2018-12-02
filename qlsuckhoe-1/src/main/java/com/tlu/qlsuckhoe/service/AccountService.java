package com.tlu.qlsuckhoe.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tlu.qlsuckhoe.entity.Account;
import com.tlu.qlsuckhoe.entity.Admin;
import com.tlu.qlsuckhoe.entity.Sinhvien;
import com.tlu.qlsuckhoe.entity.Yte;

@Service
@Transactional
public class AccountService {
	@Autowired
	private AdminServiceImpl adminService;
	@Autowired
	private SinhvienServiceImpl sinhvienService;
	@Autowired
	private YteServiceImpl yteService;
	public List<Account> findAll(){
		List<Account> ac = new ArrayList<Account>();
		for(Admin ad : adminService.findAll())
		{
				Account a= new Account();
				a.setId(ad.getIdadmin());
				a.setUsername(ad.getTendangnhap());
				a.setPassworld(ad.getMatkhau());
				a.setRole(ad.getRole().getName());
				ac.add(a);
		}
		for(Sinhvien us : sinhvienService.findAll())
		{
				Account a= new Account();
				a.setId(us.getIdsinhvien());
				a.setUsername(us.getMasv());
				a.setPassworld(us.getMatkhau());
				a.setRole(us.getRole().getName());
				ac.add(a);
		}
		for(Yte yte : yteService.findAll())
		{
				Account a= new Account();
				a.setId(yte.getIdyte());
				a.setUsername(yte.getTendangnhap());
				a.setPassworld(yte.getMatkhau());
				a.setRole(yte.getRole().getName());
				ac.add(a);
		}
		return ac;
	}
	public Account findByUsername(String username)
	{
		for(Admin ad : adminService.findAll())
		{
			if (ad.getTendangnhap().equals(username)) {
				Account a= new Account();
				a.setId(ad.getIdadmin());
				a.setUsername(ad.getTendangnhap());
				a.setPassworld(ad.getMatkhau());
				a.setRole(ad.getRole().getName());
				return a;
			}
		}
		for(Sinhvien us : sinhvienService.findAll())
		{
			if (us.getMasv().equals(username)) {
				Account a= new Account();
				a.setId(us.getIdsinhvien());
				a.setUsername(us.getMasv());
				a.setPassworld(us.getMatkhau());
				a.setRole(us.getRole().getName());
				return a;
			}
		}
		for(Yte yte : yteService.findAll())
		{
			if(yte.getTendangnhap().equals(username))
			{
				Account a= new Account();
				a.setId(yte.getIdyte());
				a.setUsername(yte.getTendangnhap());
				a.setPassworld(yte.getMatkhau());
				a.setRole(yte.getRole().getName());
				return a;
			}
		}
		return null;
	}
	public boolean checkLogin(Account user)
	{
		Account ac = findByUsername(user.getUsername());
		if(ac!=null)
		{
			if(ac.getPassworld().equals(user.getPassworld()))
				return true;
			else
				return false;
		}
		return false;
	}
}
