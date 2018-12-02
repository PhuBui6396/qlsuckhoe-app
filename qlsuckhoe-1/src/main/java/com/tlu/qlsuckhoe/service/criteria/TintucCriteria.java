/*
 * Created on 2018-09-27 ( Date ISO 2018-09-27 - Time 09:24:57 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.tlu.qlsuckhoe.service.criteria;

import java.util.Date;

/**
 * Criteria bean used for Tintuc search.
 * @author Telosys (http://www.telosys.org/) version 3.0.0
 */
public class TintucCriteria {

    private String tieude; 
    private Date ngaydang; 
    private String noidung; 
	// Constructor
	public TintucCriteria() {
		// Needed empty constructor for serialization
	}

	public void setTieude(String tieude) {this.tieude = tieude;}
	public String getTieude() {return this.tieude;}
	public void setNgaydang(Date ngaydang) {this.ngaydang = ngaydang;}
	public Date getNgaydang() {return this.ngaydang;}
	public void setNoidung(String noidung) {this.noidung = noidung;}
	public String getNoidung() {return this.noidung;}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder(); 
		sb.append(tieude); 
		sb.append("|"); 
		sb.append(ngaydang); 
		sb.append("|"); 
		sb.append(noidung); 
        return sb.toString();
	}
}