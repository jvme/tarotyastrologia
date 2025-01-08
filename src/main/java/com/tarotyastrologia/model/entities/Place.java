package com.tarotyastrologia.model.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "t_places")
public class Place  implements Serializable  {
	private static final long serialVersionUID = 1L;

	private Long stateid;
	private String placename;
	private Long latitude;
	private Long longitude;
	private Long zoneref;
	private Long summerref;
	@Id
	private Long placeid;
	public Long getStateid() {
		return stateid;
	}
	public void setStateid(Long stateid) {
		this.stateid = stateid;
	}
	public String getPlacename() {
		return placename;
	}
	public void setPlacename(String placename) {
		this.placename = placename;
	}
	public Long getLatitude() {
		return latitude;
	}
	public void setLatitude(Long latitude) {
		this.latitude = latitude;
	}
	public Long getLongitude() {
		return longitude;
	}
	public void setLongitude(Long longitude) {
		this.longitude = longitude;
	}
	public Long getZoneref() {
		return zoneref;
	}
	public void setZoneref(Long zoneref) {
		this.zoneref = zoneref;
	}
	public Long getSummerref() {
		return summerref;
	}
	public void setSummerref(Long summerref) {
		this.summerref = summerref;
	}
	public Long getPlaceid() {
		return placeid;
	}
	public void setPlaceid(Long placeid) {
		this.placeid = placeid;
	}
		
}
