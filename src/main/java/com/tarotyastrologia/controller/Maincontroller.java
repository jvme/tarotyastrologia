package com.tarotyastrologia.controller;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import cz.kibo.api.astrology.builder.PlanetBuilder;
import cz.kibo.api.astrology.domain.Planet;

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
        return "index"; //view
    }

    @GetMapping("/horoscopos")
    public String horoscopos(Model model) {
        model.addAttribute("message", message);
        model.addAttribute("tasks", tasks);
        model.addAttribute("module", "horoscopos");
        return "horoscopos"; //view
    }


    @GetMapping("/calcularhoroscopo")
    public String calcularHoroscopo(
    		@RequestParam(name = "lon", required = true, defaultValue = "") Double lon,
    		@RequestParam(name = "lat", required = true, defaultValue = "") Double lat,
    		@RequestParam(name = "yy", required = true, defaultValue = "") String yy,
    		@RequestParam(name = "mm", required = true, defaultValue = "") String mm,
    		@RequestParam(name = "dd", required = true, defaultValue = "") String dd,
    		@RequestParam(name = "hh", required = true, defaultValue = "") String hh,
    		@RequestParam(name = "mn", required = true, defaultValue = "") String mn,
    		Model model) {
    	
    	LocalDateTime event = LocalDateTime.parse(yy+"-"+mm+"-"+dd+"T"+hh+":"+mn+":00");
		Planet planetEphemeris = new PlanetBuilder(event)
  				.planets() 					
  				.topo(lon, lat, 0)
  				.build();
				
		String json = planetEphemeris.toJSON();

    	
        model.addAttribute("planetEphemeris", json);
        return "efemerides"; //view
    }
    
    // /hello?name=kotlin
    @GetMapping("/hello")
    public String mainWithParam(@RequestParam(name = "name", required = false, defaultValue = "") String name, Model model) {
        model.addAttribute("message", name);
        return "welcome"; //view
    }

}
