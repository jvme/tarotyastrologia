package com.tarotyastrologia.model.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "t_states")
public class State implements Serializable  {
	private static final long serialVersionUID = 1L;

	String statename;
	@Id
	Long stateid;
	Long maxlatitude;
	Long minlatitude;
	Long maxlongitude;
	Long minlongitude;
	public String getStatename() {
		return statename;
	}
	public void setStatename(String statename) {
		this.statename = statename;
	}
	public Long getStateid() {
		return stateid;
	}
	public void setStateid(Long stateid) {
		this.stateid = stateid;
	}
	public Long getMaxlatitude() {
		return maxlatitude;
	}
	public void setMaxlatitude(Long maxlatitude) {
		this.maxlatitude = maxlatitude;
	}
	public Long getMinlatitude() {
		return minlatitude;
	}
	public void setMinlatitude(Long minlatitude) {
		this.minlatitude = minlatitude;
	}
	public Long getMaxlongitude() {
		return maxlongitude;
	}
	public void setMaxlongitude(Long maxlongitude) {
		this.maxlongitude = maxlongitude;
	}
	public Long getMinlongitude() {
		return minlongitude;
	}
	public void setMinlongitude(Long minlongitude) {
		this.minlongitude = minlongitude;
	}
	
	
}
