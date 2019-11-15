package com.tarotyastrologia.signosplanetas;

import java.util.List;

public class CuspidesPlanetas {
	List<CuspideAngle> cuspides;
	List<PlanetAngle> planetas;
	
	
	public CuspidesPlanetas() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public CuspidesPlanetas(List<CuspideAngle> cuspides, List<PlanetAngle> planetas) {
		super();
		this.cuspides = cuspides;
		this.planetas = planetas;
	}

	public List<CuspideAngle> getCuspides() {
		return cuspides;
	}
	public void setCuspides(List<CuspideAngle> cuspides) {
		this.cuspides = cuspides;
	}
	public List<PlanetAngle> getPlanetas() {
		return planetas;
	}
	public void setPlanetas(List<PlanetAngle> planetas) {
		this.planetas = planetas;
	}
	
	
}
