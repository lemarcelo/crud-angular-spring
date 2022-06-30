package com.marcelo.controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.marcelo.model.Course;
import com.marcelo.repository.CourseRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
// Cria o construtor -> Realiza a injeção com o construtor
@AllArgsConstructor
public class CourseController {

    // Final para garantir que a instãncia não terá alterações
    private final CourseRepository courseRepository;

    @GetMapping
    public @ResponseBody List<Course> list() {
        return courseRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Course create(@RequestBody Course course) {
        // System.out.println(course.getName());
        return courseRepository.save(course);
        // Vantagem de utilizar o ResponseEntity<Course>(Assinatura e retorno) é que se
        // caso for necessário manipular o header ou cabeçalho da resposta você tem
        // métodos para fazer isso
        // return ResponseEntity.status(HttpStatus.CREATED)
        // .body(courseRepository.save(course));

    }
}
