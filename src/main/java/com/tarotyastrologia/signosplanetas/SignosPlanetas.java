package com.tarotyastrologia.signosplanetas;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;

public class SignosPlanetas {

	//Map<String, CuspidePlanetas> signosPlanetas;
	Map<String, CuspidesPlanetas> signosCuspidesPlanetas;
	List<String> signosZodiaco;
	

	public Map<String, CuspidesPlanetas> getSignosPlanetas() {
		return signosCuspidesPlanetas;
	}

	public void setSignosPlanetas(Map<String, CuspidesPlanetas> signosCuspidesPlanetas) {
		this.signosCuspidesPlanetas = signosCuspidesPlanetas;
	}
	
	/**
	 * 
	 */
	public SignosPlanetas() {
		signosCuspidesPlanetas = new HashMap<String, CuspidesPlanetas>();
		signosZodiaco = new ArrayList<String>();
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

	public void calcSignosCuspidesPlanetas(List<Double> cuspPosition, Map<String, List<Double>> planetsPositions) {
		if (!(cuspPosition.size() > 0))
		 return;
		
		Double shift = 360 - cuspPosition.get(0);
		List<Double> zodiacListAngle = new ArrayList<Double>(); 
		for(int i = 0; i < signosZodiaco.size(); i++) {
			zodiacListAngle.add(shift);
			shift += 30;
		}
		
		shift = 360 - cuspPosition.get(0);
		for(int i = 0; i < signosZodiaco.size(); i++) {
			Double angleInicial = zodiacListAngle.get(i);
			Double angleFinal = zodiacListAngle.get((i+1)%12);
			if (angleFinal - angleInicial < 0) {
				angleFinal = angleInicial + 30;
			}
				
			List<PlanetAngle> lst = new ArrayList<PlanetAngle>();
			for (Map.Entry<String, List<Double>> entry: planetsPositions.entrySet()) {
				String planet = entry.getKey();
				List<Double> position = entry.getValue();
				if ((position.get(0) + shift)>= angleInicial && (position.get(0) + shift) < angleFinal) {
					Double gap = (position.get(0) +shift - angleInicial) > 0?position.get(0) + shift - angleInicial: position.get(0) + shift - angleInicial + 360;
					PlanetAngle pa = new PlanetAngle();
					pa.angle = gap;
					pa.planet = planet;
					lst.add(pa);
				}
			}
			List<CuspideAngle> lstCups = new ArrayList<CuspideAngle>();
			for(int j = 0; j < cuspPosition.size(); j++) {
				Double cusp = cuspPosition.get(j);
				if (cusp >= angleInicial && cusp < angleFinal) {
					Double gap = (cusp - angleInicial + shift ) > 0?cusp - angleInicial + shift: cusp - angleInicial + shift + 360;
					CuspideAngle ca = new CuspideAngle(j+1, gap);
					lstCups.add(ca);
				}
				//shift = cuspPosition.get((j + 1)%12);
			}
			CuspidesPlanetas cp = new CuspidesPlanetas(lstCups, lst);
			signosCuspidesPlanetas.put(signosZodiaco.get(i), cp);			
		}
	}
	
	public JSONObject signosCuspidesPlanetas2Json() {
		JSONObject spJson = new JSONObject(signosCuspidesPlanetas);
		return spJson;
	}
}
