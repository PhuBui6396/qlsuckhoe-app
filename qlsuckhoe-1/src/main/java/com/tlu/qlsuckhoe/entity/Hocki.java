/*
 * Created on 2018-09-27 ( Date ISO 2018-09-27 - Time 09:24:55 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.tlu.qlsuckhoe.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;

import org.hibernate.annotations.Proxy;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Persistent class for Hocki entity stored in table hocki.
 * This class is a "record entity" without JPA links.
 * @author Telosys (http://www.telosys.org/) version 3.0.0
 */
@Entity
@Table(name="hocki", catalog="qlsuckhoe" )
@Proxy(lazy=false)
public class Hocki implements Serializable {

	private static final long serialVersionUID = 1L;

    //----------------------------------------------------------------------
    // ENTITY PRIMARY KEY ( BASED ON A SINGLE FIELD )
    //----------------------------------------------------------------------
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="idhocki", nullable=false)
    private Integer idhocki ; 
    //----------------------------------------------------------------------
    // ENTITY DATA FIELDS 
    //----------------------------------------------------------------------    
    @Column(name="tenhocki", length=45)
    private String tenhocki ; 
    @OneToMany(fetch=FetchType.LAZY,cascade=CascadeType.ALL,mappedBy="hocki")
    @JsonIgnore
    private List<Dinhky> dinhky;
    //----------------------------------------------------------------------
    // CONSTRUCTOR(S)
    //----------------------------------------------------------------------
    public Hocki() {
		super();
    }

    //----------------------------------------------------------------------
    // GETTER & SETTER FOR THE KEY FIELD
    //----------------------------------------------------------------------
	public void setIdhocki(Integer idhocki) {
        this.idhocki = idhocki ;
    }
	public Integer getIdhocki() {
        return this.idhocki;
    }
	
    public List<Dinhky> getDinhky() {
		return dinhky;
	}

	public void setDinhky(List<Dinhky> dinhky) {
		this.dinhky = dinhky;
	}

	//----------------------------------------------------------------------
    // GETTERS & SETTERS FOR FIELDS
    //----------------------------------------------------------------------
	//--- DATABASE MAPPING : tenhocki (VARCHAR) 
	public void setTenhocki(String tenhocki) {this.tenhocki = tenhocki;}
	public String getTenhocki() {return this.tenhocki;}


    //----------------------------------------------------------------------
    // toString METHOD
    //----------------------------------------------------------------------
 	public String toString() {
		StringBuilder sb = new StringBuilder(); 
		sb.append(idhocki); 
		sb.append(tenhocki); 
        return sb.toString();
    }
}