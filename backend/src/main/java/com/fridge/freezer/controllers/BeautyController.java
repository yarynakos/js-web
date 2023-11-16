package com.fridge.freezer.controllers;

import com.fridge.freezer.models.Fridge;
import com.fridge.freezer.services.FridgeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/fridges")
public class FridgeController {
    private final FridgeService fridgeService;

    public FridgeController(FridgeService fridgeService) {
        this.fridgeService = fridgeService;
    }

    @GetMapping
    private List<Fridge> getAll() {
        return this.fridgeService.findAll();
    }

    @GetMapping("/{id}")
    private Fridge getById(@PathVariable Integer id) {
        return this.fridgeService.findById(id);
    }

    @PostMapping
    private Fridge create(@RequestBody Fridge fridge) {
        return this.fridgeService.create(fridge);
    }

    @PutMapping("/{id}")
    private Fridge update(@PathVariable Integer id, @RequestBody Fridge fridge) {
        return this.fridgeService.update(id, fridge);
    }

    @DeleteMapping("/{id}")
    private void delete(@PathVariable Integer id) {
        this.fridgeService.delete(id);
    }
}
