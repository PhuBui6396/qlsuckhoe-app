package com.tlu.qlsuckhoe.service.criteria;

import java.util.List;

public class Dinhkyadd {
	private int idsinhvien;
	private int idhocki;
	private String ngaykham;
	private float chieucao;
	private float cannang;
	private int huyetap;
	private int nhiptim;
	private List<BenhId> idbenh;
	private String loaisuckhoe;
	private String ketluan;
	public int getIdsinhvien() {
		return idsinhvien;
	}
	public void setIdsinhvien(int idsinhvien) {
		this.idsinhvien = idsinhvien;
	}
	public int getIdhocki() {
		return idhocki;
	}
	public void setIdhocki(int idhocki) {
		this.idhocki = idhocki;
	}
	public String getNgaykham() {
		return ngaykham;
	}
	public void setNgaykham(String ngaykham) {
		this.ngaykham = ngaykham;
	}
	public float getChieucao() {
		return chieucao;
	}
	public void setChieucao(float chieucao) {
		this.chieucao = chieucao;
	}
	public float getCannang() {
		return cannang;
	}
	public void setCannang(float cannang) {
		this.cannang = cannang;
	}
	public int getHuyetap() {
		return huyetap;
	}
	public void setHuyetap(int huyetap) {
		this.huyetap = huyetap;
	}
	public int getNhiptim() {
		return nhiptim;
	}
	public void setNhiptim(int nhiptim) {
		this.nhiptim = nhiptim;
	}
	public List<BenhId> getIdbenh() {
		return idbenh;
	}
	public void setIdbenh(List<BenhId> idbenh) {
		this.idbenh = idbenh;
	}
	public String getLoaisuckhoe() {
		return loaisuckhoe;
	}
	public void setLoaisuckhoe(String loaisuckhoe) {
		this.loaisuckhoe = loaisuckhoe;
	}
	public String getKetluan() {
		return ketluan;
	}
	public void setKetluan(String ketluan) {
		this.ketluan = ketluan;
	}
}
