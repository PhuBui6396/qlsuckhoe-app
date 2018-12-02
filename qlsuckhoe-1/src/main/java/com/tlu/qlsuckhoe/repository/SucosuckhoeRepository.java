/*
 * Created on 2018-09-27 ( Date ISO 2018-09-27 - Time 09:24:56 )
 * Generated by Telosys ( http://www.telosys.org/ ) version 3.0.0
*/
package com.tlu.qlsuckhoe.repository;

import com.tlu.qlsuckhoe.entity.Sucosuckhoe;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Jpa repository for Sucosuckhoe.
 * @author Telosys (http://www.telosys.org/) version 3.0.0
 */
@Repository
public interface SucosuckhoeRepository  extends JpaRepository<Sucosuckhoe, Integer> {
	@Query(value="Select * from sucosuckhoe sc where sc.idsinhvien= :idsinhvien and sc.ngay = :ngay",nativeQuery=true)
	List<Sucosuckhoe> findByIdSinhvien(@Param("idsinhvien") int idsinhvien,@Param("ngay") String ngay);
	@Query(value="Select * from sucosuckhoe sc group by sc.idsinhvien order by STR_TO_DATE(sc.ngay,'%d/%m/%y') DESC",nativeQuery=true)
	List<Sucosuckhoe> findGroupbySinhvien();
	@Query(value="Select * from sucosuckhoe sc where sc.idsinhvien in (Select idsinhvien from sinhvien where khoa = :khoa) group by sc.idsinhvien order by STR_TO_DATE(sc.ngay,'%d/%m/%y') DESC",nativeQuery=true)
	List<Sucosuckhoe> findGroupbySinhvienKhoa(@Param("khoa") String khoa);
	@Query(value="Select * from sucosuckhoe sc where sc.idsinhvien= :idsinhvien group by sc.ngay order by STR_TO_DATE(sc.ngay,'%d/%m/%y') DESC",nativeQuery=true)
	List<Sucosuckhoe> findByIdSinhvienngay(@Param("idsinhvien") int idsinhvien);
	@Query(value="Select * from sucosuckhoe sc where sc.idsinhvien= :idsinhvien and sc.ngay = :ngay",nativeQuery=true)
	List<Sucosuckhoe> findByIdSinhvienN(@Param("idsinhvien") int idsinhvien,@Param("ngay") String ngay);
	@Query(value="Select * from sucosuckhoe sc where sc.idsinhvien= :idsinhvien and sc.ngay = :ngay and idthuoc != 1",nativeQuery=true)
	List<Sucosuckhoe> findByThuoc(@Param("idsinhvien") int idsinhvien,@Param("ngay") String ngay);
	@Query(value="Select * from sucosuckhoe sc where sc.idsinhvien= :idsinhvien and sc.ngay = :ngay and idthietbi != 1",nativeQuery=true)
	List<Sucosuckhoe> findByThietbi(@Param("idsinhvien") int idsinhvien,@Param("ngay") String ngay);
	@Query(value="Delete from sucosuckhoe where idsinhvien = :idsinhvien and ngay = :ngay",nativeQuery=true)
	@Transactional
	@Modifying
	void deleteUpdate(@Param("idsinhvien") int idsinhvien,@Param("ngay") String ngay);
}