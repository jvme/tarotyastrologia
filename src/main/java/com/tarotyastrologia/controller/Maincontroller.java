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

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import at.kugel.zodiac.TextHoroscop;
import at.kugel.zodiac.house.HousePlacidus;
import at.kugel.zodiac.planet.PlanetAA0;
import cz.kibo.api.astrology.builder.CuspBuilder;
import cz.kibo.api.astrology.builder.PlanetBuilder;
import cz.kibo.api.astrology.domain.Cusp;
import cz.kibo.api.astrology.domain.Planet;
import cz.kibo.api.astrology.json.Convertor;
import swisseph.SweConst;

@Controller
public class Maincontroller {
		
	// inject via application.properties
	@Value("${welcome.message}")
	private String message;

	private List<String> tasks = Arrays.asList("a", "b", "c", "d", "e", "f", "g");

	@GetMapping("/")
	public String main(Model model) {
		model.addAttribute("message", message);
		model.addAttribute("tasks", tasks);
		model.addAttribute("module", "home");
		return "index"; // view
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
		
		String jsonplanetEphemeris = planetEphemeris.toJSON();

		Cusp cuspEphemeris = new CuspBuilder(event)
				.houses("Placidus") 	
  				.topo(lon, lat, 0)
    			//.zodiac("Fagan Bradley")	
 				.build();
		String jsoncuspEphemeris = cuspEphemeris.toJSON();		
		
		List<Double> newCusp = new ArrayList<Double>();
		double cuspAnt = cuspEphemeris.getCusps().get(newCusp.size());
		cuspEphemeris.getCusps().forEach(cusp -> {
			newCusp.add(cuspAnt-cusp);
		});
/*
		LocalDateTime ahora = LocalDateTime.now();
		Planet planetEphemerisHoy = new PlanetBuilder(ahora).planets().topo(lon, lat, 0).build();
		Cusp cuspEphemerisHoy = new CuspBuilder(ahora)
  				.houses("Placidus")
  				.topo(lon, lat, 0)
    			//.zodiac("Fagan Bradley")	
 				.build();
*/		
		Convertor conPlanets = new Convertor(planetEphemeris.getPlanets());
		Convertor conCusp = new Convertor(cuspEphemeris.getCusps());
		JSONObject jsonPlanets = conPlanets.getJSON();
		JSONObject jsonCusp = conCusp.getJSON();
		JSONObject planetsCusp = new JSONObject();
		planetsCusp.put("planets", jsonPlanets.get("planets"));
		planetsCusp.put("cusps", jsonCusp.get("cusps"));
		
		JSONObject jsonNewCusp = new JSONObject();
		newCusp.forEach(cusp -> {
			//jsonNewCusp.
		});
	//	planetsCusp.put("newCusp", newCusp.);
		
/*	
		Convertor conPlanetsHoy = new Convertor(planetEphemerisHoy.getPlanets());
		Convertor conCuspHoy = new Convertor(cuspEphemerisHoy.getCusps());
		JSONObject jsonPlanetsHoy = conPlanetsHoy.getJSON();
		JSONObject jsonCuspHoy = conCuspHoy.getJSON();
		JSONObject planetsCuspHoy = new JSONObject();
		planetsCuspHoy.put("planets", jsonPlanetsHoy.get("planets"));
		planetsCuspHoy.put("cusps", jsonCuspHoy.get("cusps"));
		
	*/	
		model.addAttribute("planetEphemeris", jsonplanetEphemeris);
		model.addAttribute("cuspEphemeris", jsoncuspEphemeris);
		model.addAttribute("data", planetsCusp.toString());
		//model.addAttribute("dataHoy", planetsCuspHoy.toString());


		
		
		// get a horoscop instance
		TextHoroscop horoscop = new TextHoroscop();
		// set your desired planet position calculation algorithm
		horoscop.setPlanet(new PlanetAA0());
		// set your desired house system calculation algorithm
		// may be anything from the at.kugel.zodiac.house package.
		horoscop.setHouse(new HousePlacidus());
		// set your user data time value
		horoscop.setTime(Integer.parseInt(dd), Integer.parseInt(mm), Integer.parseInt(yy), Integer.parseInt(hh), Integer.parseInt(mm), 0, 0);
		// set your user data location value
		horoscop.setLocationDegree(2.17, 41.35);
		// calculate the values
		horoscop.calcValues();
		// do something with the data, e.g. output raw data
		String horoscoptxt = horoscop.toString();

	    
        model.addAttribute("horoscoptxt", horoscoptxt);
        
        
        return "efemerides"; //view
    }
    
    // /hello?name=kotlin
    @GetMapping("/hello")
    public String mainWithParam(@RequestParam(name = "name", required = false, defaultValue = "") String name, Model model) {
        model.addAttribute("message", name);
        return "welcome"; //view
    }

}
