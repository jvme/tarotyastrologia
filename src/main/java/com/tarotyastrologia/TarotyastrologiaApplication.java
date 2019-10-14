package com.tarotyastrologia;

import java.net.URI;
import java.net.URISyntaxException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.util.ResourceUtils;

@SpringBootApplication
public class TarotyastrologiaApplication {

	public static void main(String[] args) {
		try {
			URI uri = ResourceUtils.toURI("");
		} catch (URISyntaxException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		SpringApplication.run(TarotyastrologiaApplication.class, args);
	}

}
