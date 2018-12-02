package com.tlu.qlsuckhoe.service.criteria;

import java.util.List;

public class Sucosuckhoeadd {
	private int idsinhvien;
	private String ngay; 
    private String loaisuco; 
    private String bienphap; 
    private String mucdo; 
    private String nguoixuly;
    private List<Thuocadd> thuoc;
    private List<Thietbiadd> thietbi;
	public int getIdsinhvien() {
		return idsinhvien;
	}
	public void setIdsinhvien(int idsinhvien) {
		this.idsinhvien = idsinhvien;
	}
	public String getNgay() {
		return ngay;
	}
	public void setNgay(String ngay) {
		this.ngay = ngay;
	}
	public String getLoaisuco() {
		return loaisuco;
	}
	public void setLoaisuco(String loaisuco) {
		this.loaisuco = loaisuco;
	}
	public String getBienphap() {
		return bienphap;
	}
	public void setBienphap(String bienphap) {
		this.bienphap = bienphap;
	}
	public String getMucdo() {
		return mucdo;
	}
	public void setMucdo(String mucdo) {
		this.mucdo = mucdo;
	}
	public String getNguoixuly() {
		return nguoixuly;
	}
	public void setNguoixuly(String nguoixuly) {
		this.nguoixuly = nguoixuly;
	}
	public List<Thuocadd> getThuoc() {
		return thuoc;
	}
	public void setThuoc(List<Thuocadd> thuoc) {
		this.thuoc = thuoc;
	}
	public List<Thietbiadd> getThietbi() {
		return thietbi;
	}
	public void setThietbi(List<Thietbiadd> thietbi) {
		this.thietbi = thietbi;
	}
    
}
