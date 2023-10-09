package com.lukesportfolio.bookgallery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BookgalleryApplication {

	public static void main(String[] args) {
		System.out.println("backend running in docker");
		SpringApplication.run(BookgalleryApplication.class, args);
	}


}
