package com.tarotyastrologia.controller;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

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
		Planet planetEphemeris = new PlanetBuilder(event).planets().topo(lon, lat, 0).build();

		String jsonplanetEphemeris = planetEphemeris.toJSON();

		Cusp cuspEphemeris = new CuspBuilder(event).houses("Placidus").topo(lon, lat, 0)
				// .zodiac("Fagan Bradley")
				.build();

		String jsoncuspEphemeris = cuspEphemeris.toJSON();

		Convertor conPlanets = new Convertor(planetEphemeris.getPlanets());
		Convertor conCusp = new Convertor(cuspEphemeris.getCusps());
		JSONObject jsonPlanets = conPlanets.getJSON();
		JSONObject jsonCusp = conCusp.getJSON();
		
		
		/*
		 * cuspEphemeris = new CuspBuilder(event) .houses("Koch") .topo(lon, lat, 0)
		 * //.zodiac("Fagan Bradley") .build();
		 * 
		 * jsoncuspEphemeris += cuspEphemeris.toJSON();
		 * 
		 * cuspEphemeris = new CuspBuilder(event) .houses("Porphyrius") .topo(lon, lat,
		 * 0) //.zodiac("Fagan Bradley") .build();
		 * 
		 * jsoncuspEphemeris += cuspEphemeris.toJSON(); cuspEphemeris = new
		 * CuspBuilder(event) .houses("Regiomontanus") .topo(lon, lat, 0)
		 * //.zodiac("Fagan Bradley") .build();
		 * 
		 * jsoncuspEphemeris += cuspEphemeris.toJSON();
		 * 
		 * cuspEphemeris = new CuspBuilder(event) .houses("Campanus") .topo(lon, lat, 0)
		 * //.zodiac("Fagan Bradley") .build();
		 * 
		 * jsoncuspEphemeris += cuspEphemeris.toJSON();
		 * 
		 * cuspEphemeris = new CuspBuilder(event) .houses("Equal") .topo(lon, lat, 0)
		 * //.zodiac("Fagan Bradley") .build();
		 * 
		 * jsoncuspEphemeris += cuspEphemeris.toJSON();
		 * 
		 * cuspEphemeris = new CuspBuilder(event) .houses("Vehlow Equal") .topo(lon,
		 * lat, 0) //.zodiac("Fagan Bradley") .build();
		 * 
		 * jsoncuspEphemeris += cuspEphemeris.toJSON();
		 * 
		 * cuspEphemeris = new CuspBuilder(event) .houses("Whole") .topo(lon, lat, 0)
		 * //.zodiac("Fagan Bradley") .build();
		 * 
		 * jsoncuspEphemeris += cuspEphemeris.toJSON();
		 * 
		 * cuspEphemeris = new CuspBuilder(event) .houses("Horizontal") .topo(lon, lat,
		 * 0) //.zodiac("Fagan Bradley") .build();
		 * 
		 * jsoncuspEphemeris += cuspEphemeris.toJSON();
		 */
		model.addAttribute("planetEphemeris", jsonplanetEphemeris);
		model.addAttribute("cuspEphemeris", jsoncuspEphemeris);
		model.addAttribute("data", jsoncuspEphemeris);

		// get a horoscop instance
		TextHoroscop horoscop = new TextHoroscop();
		// set your desired planet position calculation algorithm
		horoscop.setPlanet(new PlanetAA0());
		// set your desired house system calculation algorithm
		// may be anything from the at.kugel.zodiac.house package.
		horoscop.setHouse(new HousePlacidus());
		// set your user data time value
		horoscop.setTime(1, 1, 1980, Integer.parseInt(hh), Integer.parseInt(mm), 0, 0);
		// set your user data location value
		horoscop.setLocationDegree(2.17, 41.35);
		// calculate the values
		horoscop.calcValues();
		// do something with the data, e.g. output raw data
		String horoscoptxt = horoscop.toString();

		model.addAttribute("horoscoptxt", horoscoptxt);

		return "efemerides"; // view
	}

	// /hello?name=kotlin
	@GetMapping("/hello")
	public String mainWithParam(@RequestParam(name = "name", required = false, defaultValue = "") String name,
			Model model) {
		model.addAttribute("message", name);
		return "welcome"; // view
	}

}
