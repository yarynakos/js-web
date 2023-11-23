package com.fridge.freezer.controllers;

import com.fridge.freezer.models.Beauty;
import com.fridge.freezer.services.BeautyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/items")
public class BeautyController {
    private final BeautyService beautyService;

    public BeautyController(BeautyService beautyService) {
        this.beautyService = beautyService;
    }

    @GetMapping
    private List<Beauty> getAll() {
        return this.beautyService.findAll();
    }

    @GetMapping("/{id}")
    private Beauty getById(@PathVariable Integer id) {
        return this.beautyService.findById(id);
    }

    @PostMapping
    private Beauty create(@RequestBody Beauty beauty) {
        return this.beautyService.create(beauty);
    }

    @PutMapping("/{id}")
    private Beauty update(@PathVariable Integer id, @RequestBody Beauty beauty) {
        return this.beautyService.update(id, beauty);
    }

    @DeleteMapping("/{id}")
    private void delete(@PathVariable Integer id) {
        this.beautyService.delete(id);
    }
}
