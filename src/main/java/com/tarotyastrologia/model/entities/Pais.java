package com.tarotyastrologia.model.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Paises")
public class Pais implements Serializable  {
	private static final long serialVersionUID = 1L;

	private Long language;
	@Id
	private String paisID;
	private String pais;
	private Long idzona;
	private Long orden;
	
	public Long getLanguage() {
		return language;
	}
	public void setLanguage(Long language) {
		this.language = language;
	}
	public String getPaisID() {
		return paisID;
	}
	public void setPaisID(String paisID) {
		this.paisID = paisID;
	}
	public String getPais() {
		return pais;
	}
	public void setPais(String pais) {
		this.pais = pais;
	}
	public Long getIdzona() {
		return idzona;
	}
	public void setIdzona(Long idzona) {
		this.idzona = idzona;
	}
	public Long getOrden() {
		return orden;
	}
	public void setOrden(Long orden) {
		this.orden = orden;
	}
	
	
}
