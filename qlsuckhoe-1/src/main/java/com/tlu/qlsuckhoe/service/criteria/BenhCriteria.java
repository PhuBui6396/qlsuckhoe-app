/*
 * Created on 2018-09-27 ( Date ISO 2018-09-27 - Time 09:24:54 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.tlu.qlsuckhoe.service.criteria;

/**
 * Criteria bean used for Benh search.
 * @author Telosys (http://www.telosys.org/) version 3.0.0
 */
public class BenhCriteria {

    private String tenbenh;
    private int iddanhmuc;
    private String trieuchung; 
    private String cachchua; 
	// Constructor
	public BenhCriteria() {
		// Needed empty constructor for serialization
	}

	public void setTenbenh(String tenbenh) {this.tenbenh = tenbenh;}
	public String getTenbenh() {return this.tenbenh;}
	public void setTrieuchung(String trieuchung) {this.trieuchung = trieuchung;}
	public String getTrieuchung() {return this.trieuchung;}
	public void setCachchua(String cachchua) {this.cachchua = cachchua;}
	public String getCachchua() {return this.cachchua;}

	public int getIddanhmuc() {
		return iddanhmuc;
	}

	public void setIddanhmuc(int iddanhmuc) {
		this.iddanhmuc = iddanhmuc;
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder(); 
		sb.append(tenbenh); 
		sb.append("|"); 
		sb.append(trieuchung); 
		sb.append("|"); 
		sb.append(cachchua); 
        return sb.toString();
	}
}
