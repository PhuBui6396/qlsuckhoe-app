package com.tlu.qlsuckhoe.service.criteria;

public class UserCriteria {
	private int iduser;
	private String username;
	private String token;
	private String toke_type;
	private String role;
	public int getIduser() {
		return iduser;
	}
	public void setIduser(int iduser) {
		this.iduser = iduser;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getToke_type() {
		return toke_type;
	}
	public void setToke_type(String toke_type) {
		this.toke_type = toke_type;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	
}
