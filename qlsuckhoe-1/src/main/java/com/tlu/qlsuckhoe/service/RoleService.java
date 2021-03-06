/*
 * Created on 2018-09-27 ( Date ISO 2018-09-27 - Time 09:24:55 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.tlu.qlsuckhoe.service;

import com.tlu.qlsuckhoe.entity.Role;
import java.util.List;

public interface RoleService {

	public Role findById(Integer idrole);

	public List<Role> findAll();

	public Boolean delete(Integer idrole);

	public Role create(Role role);

	public Role update(Role role);

	public Boolean exist(Role role);
}
