package com.tlu.qlsuckhoe.service.criteria;

import java.util.List;

public class Dinhkypost {
	private String ngaykham;
	private float chieucao;
	private float cannang;
	private int huyetap;
	private int nhiptim;
	private List<Ketquapost> ketqua;
	private String loaisuckhoe;
	private String ketluan;
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
	public List<Ketquapost> getKetqua() {
		return ketqua;
	}
	public void setKetqua(List<Ketquapost> ketqua) {
		this.ketqua = ketqua;
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
