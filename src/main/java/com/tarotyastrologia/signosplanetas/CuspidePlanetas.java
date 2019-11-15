package com.tarotyastrologia.signosplanetas;

import java.util.List;

public class CuspidePlanetas {
	Integer cuspideNumber;
	Double cuspideAngle;
	List<PlanetAngle> planetsAngles;
	
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
	public List<PlanetAngle> getPlanetsAngles() {
		return planetsAngles;
	}
	public void setPlanetsAngles(List<PlanetAngle> planetsAngles) {
		this.planetsAngles = planetsAngles;
	}
	
	
}
