package com.tarotyastrologia.services;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.querydsl.jpa.impl.JPAQuery;
import com.tarotyastrologia.model.entities.Pais;
import com.tarotyastrologia.model.entities.State;
import com.tarotyastrologia.model.entities.Place;
import com.tarotyastrologia.model.entities.QPais;
import com.tarotyastrologia.model.entities.QPlace;
import com.tarotyastrologia.model.entities.QState;

@Service("EntitiesService")
@Repository
public class EntitiesServiceImpl implements EntitiesService {
	@PersistenceContext
	private EntityManager em;

	QPais qpais = QPais.pais1;
	QState qstate = QState.state;
	QPlace qplace = QPlace.place;
	
	@Override
	public List<Pais> getPaises() {
		
 		List<Pais> lstPaises =
		new JPAQuery<Pais>(em)
		.from(qpais)
		.fetch();

 		return lstPaises;
	}

	@Override
	public List<State> getStates() {
		
 		List<State> lstStates =
		new JPAQuery<State>(em)
		.from(qstate)
		.fetch();

 		return lstStates;
	}

	@Override
	public List<Place> getPlaces(Long state) {
 		List<Place> lstStates =
		new JPAQuery<Place>(em)
		.from(qplace)
		.fetch();

 		return lstStates;
	}

}
