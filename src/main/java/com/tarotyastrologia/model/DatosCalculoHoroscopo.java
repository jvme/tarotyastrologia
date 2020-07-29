package com.tarotyastrologia.model;

public class DatosCalculoHoroscopo {
	String nombreApellidos;
	String fechaNacimiento;
	String horaMinutos;
	String pais;
	String ciudad;
	
	
	public DatosCalculoHoroscopo() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	public DatosCalculoHoroscopo(String nombreApellidos, String fechaNacimiento, String horaMinutos, String pais,
			String ciudad) {
		super();
		this.nombreApellidos = nombreApellidos;
		this.fechaNacimiento = fechaNacimiento;
		this.horaMinutos = horaMinutos;
		this.pais = pais;
		this.ciudad = ciudad;
	}



	public String getNombreApellidos() {
		return nombreApellidos;
	}
	public void setNombreApellidos(String nombreApellidos) {
		this.nombreApellidos = nombreApellidos;
	}


	public String getFechaNacimiento() {
		return fechaNacimiento;
	}


	public void setFechaNacimiento(String fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}


	public String getHoraMinutos() {
		return horaMinutos;
	}


	public void setHoraMinutos(String horaMinutos) {
		this.horaMinutos = horaMinutos;
	}


	public String getPais() {
		return pais;
	}


	public void setPais(String pais) {
		this.pais = pais;
	}


	public String getCiudad() {
		return ciudad;
	}


	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}
	
	
	
}
