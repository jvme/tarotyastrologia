package com.tarotyastrologia.services;

import java.util.List;

import com.tarotyastrologia.model.entities.Pais;
import com.tarotyastrologia.model.entities.Place;
import com.tarotyastrologia.model.entities.State;

public interface EntitiesService {
	public List<Pais> getPaises();
	public List<State> getStates();
	public List<Place> getPlaces(Long state);
}
