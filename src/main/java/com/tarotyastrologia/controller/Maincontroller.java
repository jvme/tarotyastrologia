package com.tarotyastrologia.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.tarotyastrologia.model.DatosCalculoHoroscopo;
import com.tarotyastrologia.model.entities.Pais;
import com.tarotyastrologia.model.entities.State;
import com.tarotyastrologia.services.EntitiesService;
import com.tarotyastrologia.signosplanetas.SignosPlanetas;
/*
import at.kugel.zodiac.TextHoroscop;
import at.kugel.zodiac.house.HousePlacidus;
import at.kugel.zodiac.planet.PlanetAA0;
*/
import cz.kibo.api.astrology.builder.CuspBuilder;
import cz.kibo.api.astrology.builder.PlanetBuilder;
import cz.kibo.api.astrology.domain.Cusp;
import cz.kibo.api.astrology.domain.Planet;
import cz.kibo.api.astrology.json.Convertor;
import swisseph.SweConst;

@Controller
public class Maincontroller {
		
	@Autowired
	private EntitiesService entitiesService;
	
	// inject via application.properties
	@Value("${welcome.message}")
	private String message;

	private List<String> tasks = Arrays.asList("a", "b", "c", "d", "e", "f", "g");

	@GetMapping("/")
	public String main(Model model) {
		List<State> lst = entitiesService.getStates();
		model.addAttribute("datosCalculoHoroscopo", new DatosCalculoHoroscopo());
		model.addAttribute("message", message);
		model.addAttribute("tasks", tasks);
		model.addAttribute("module", "home");
		model.addAttribute("paises", lst);
	
		return "index"; // view
	}

	@PostMapping("/")
	public 	String mainSubmit(@ModelAttribute DatosCalculoHoroscopo datosCalculoHoroscopo) {
		return  null;
	}
	
	@GetMapping("/horoscopos")
	public String horoscopos(Model model) {
		model.addAttribute("message", message);
		model.addAttribute("tasks", tasks);
		model.addAttribute("module", "horoscopos");
		return "horoscopos"; // view
	}

	@GetMapping("/calcularhoroscopo")
	public String calcularHoroscopo(@RequestParam(name = "lon", required = true, defaultValue = "") Double lon,
			@RequestParam(name = "lat", required = true, defaultValue = "") Double lat,
			@RequestParam(name = "yy", required = true, defaultValue = "") String yy,
			@RequestParam(name = "mm", required = true, defaultValue = "") String mm,
			@RequestParam(name = "dd", required = true, defaultValue = "") String dd,
			@RequestParam(name = "hh", required = true, defaultValue = "") String hh,
			@RequestParam(name = "mn", required = true, defaultValue = "") String mn, Model model) {

		LocalDateTime event = LocalDateTime.parse(yy + "-" + mm + "-" + dd + "T" + hh + ":" + mn + ":00");
		ZonedDateTime lzdt = ZonedDateTime.of(event, ZoneId.of("America/Buenos_Aires"));
		ZoneOffset zoneOffset = lzdt.getOffset();
		//replace Z to +00:00
        String offset = zoneOffset.getId().replaceAll("Z", "+00:00");
		ZonedDateTime utczdt = lzdt.withZoneSameInstant(ZoneId.of("UTC"));
		
		model.addAttribute("LocalDateTime", event.toString());
		model.addAttribute("LocalZonedDateTime", lzdt.toString());
		model.addAttribute("ZoneOffset", offset);
		model.addAttribute("UtcZonedDateTime", utczdt);
		
		
		Planet planetEphemeris = new PlanetBuilder(event)
				//.planets()
				.planet("Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto, NNode")
				.topo(lon, lat, 0).build();

		List<Double> nnode = planetEphemeris.getPlanets().get("NNode");
		List<Double> snode = new ArrayList<Double>();
		Double snode1 = nnode.get(0) + 180;
		if (snode1 > 360) {
			snode1 = 360 - snode1;
		}
		snode.add(snode1);
		snode.add(nnode.get(1));
		planetEphemeris.getPlanets().put("SNode", snode);
		
		Cusp cuspEphemeris = new CuspBuilder(event)
				.houses("Placidus") 	
  				.topo(lon, lat, 0)
 				.build();
		
		List<Double> newCusp = new ArrayList<Double>();
		
		Convertor conPlanets = new Convertor(planetEphemeris.getPlanets());
		Convertor conCusp = new Convertor(cuspEphemeris.getCusps());
		JSONObject jsonPlanets = conPlanets.getJSON();
		JSONObject jsonCusp = conCusp.getJSON();
		JSONObject planetsCusp = new JSONObject();
		planetsCusp.put("planets", jsonPlanets.get("planets"));
		planetsCusp.put("cusps", jsonCusp.get("cusps"));
		
		SignosPlanetas sp = new SignosPlanetas();
		sp.calcSignosCuspidesPlanetas(cuspEphemeris.getCusps(), planetEphemeris.getPlanets());
		JSONObject spjson = sp.signosCuspidesPlanetas2Json();
		JSONObject planetasCuspidesjson = sp.planetasCuspides2Json();
	
		model.addAttribute("data", planetsCusp.toString());
		model.addAttribute("spjson", spjson.toString());
		model.addAttribute("planetasCuspidesjson", planetasCuspidesjson.toString());
        
        return "efemerides"; //view
    }
    
    // /hello?name=kotlin
    @GetMapping("/hello")
    public String mainWithParam(@RequestParam(name = "name", required = false, defaultValue = "") String name, Model model) {
        model.addAttribute("message", name);
        return "welcome"; //view
    }

    @GetMapping("/paises")
    public String paises(Model model) {
    	model.addAttribute("paises", entitiesService.getPaises());
        return "welcome"; //view
    }

}
