/*
 * Created on 2018-09-27 ( Date ISO 2018-09-27 - Time 09:24:56 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.tlu.qlsuckhoe.repository;

import com.tlu.qlsuckhoe.entity.Thietbiyte;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Jpa repository for Thietbiyte.
 * @author Telosys (http://www.telosys.org/) version 3.0.0
 */
@Repository
public interface ThietbiyteRepository  extends JpaRepository<Thietbiyte, Integer> {
	@Query(value="Select * from thietbiyte limit :skip,:size",nativeQuery=true)
	List<Thietbiyte> findAllThietbiyteWithPagination(@Param("skip") Integer skip,@Param("size") Integer size);
	@Query(value="Select * from thietbiyte where idthietbiyte != 1",nativeQuery=true)
	List<Thietbiyte> findAllThietbi();
	@Query(value="Delete from thietbiyte where idthietbiyte = :idthietbiyte",nativeQuery=true)
	@Transactional
	@Modifying
	void deleteById(@Param("idthietbiyte") int idthietbiyte);
}