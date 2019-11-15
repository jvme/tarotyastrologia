package com.tarotyastrologia.signosplanetas;

public class CuspideAngle {
	Integer cuspideNumber;
	Double cuspideAngle;

	
	public CuspideAngle() {
	}
	
	public CuspideAngle(Integer cuspideNumber, Double cuspideAngle) {
		super();
		this.cuspideNumber = cuspideNumber;
		this.cuspideAngle = cuspideAngle;
	}

	public Integer getCuspideNumber() {
		return cuspideNumber;
	}
	public void setCuspideNumber(Integer cuspideNumber) {
		this.cuspideNumber = cuspideNumber;
	}
	public Double getCuspideAngle() {
		return cuspideAngle;
	}
	public void setCuspideAngle(Double cuspideAngle) {
		this.cuspideAngle = cuspideAngle;
	}
}
