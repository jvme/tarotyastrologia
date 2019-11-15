package com.tarotyastrologia.signosplanetas;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SignosPlanetas {

	Map<String, CuspidePlanetas> signosPlanetas;
	List<String> signosZodiaco;
	

	public Map<String, CuspidePlanetas> getSignosPlanetas() {
		return signosPlanetas;
	}

	public void setSignosPlanetas(Map<String, CuspidePlanetas> signosPlanetas) {
		this.signosPlanetas = signosPlanetas;
	}
	
	/**
	 * 
	 */
	public SignosPlanetas() {
		signosPlanetas = new HashMap<String, CuspidePlanetas>();
		signosZodiaco.add("Aries");
		signosZodiaco.add("Taurus");
		signosZodiaco.add("Gemini");
		signosZodiaco.add("Cancer");
		signosZodiaco.add("Leo");
		signosZodiaco.add("Virgo");
		signosZodiaco.add("Libra");
		signosZodiaco.add("Scorpio");
		signosZodiaco.add("Sagittarius");
		signosZodiaco.add("Capricorn");
		signosZodiaco.add("Aquarius");
		signosZodiaco.add("Pisces");
	}

	public void calcSignosPlanetas(List<Double> cuspPosition, Map<String, List<Double>> planetsPositions) {
		int index = 0;
		for(Double cusp: cuspPosition) {
			CuspidePlanetas cPlanetas = new CuspidePlanetas();
			cPlanetas.setCuspideNumber(index);			
			cPlanetas.setCuspideAngle(cusp);
			
			Double angleInicial = cusp;
			Double angleFinal = cuspPosition.get(index+1);
			
			planetsPositions.forEach((planet, position) -> {
				if (position.get(0) >= angleInicial && position.get(0) < angleFinal) {
					Double angle = position.get(0) - angleInicial;
					PlanetAngle pa = new PlanetAngle();
					pa.angle = angle;
					pa.planet = planet;
					cPlanetas.planetsAngles.add(pa);
				}
			});
			signosPlanetas.put(signosZodiaco.get(index), cPlanetas);			
			index++;
		}
	}
}
