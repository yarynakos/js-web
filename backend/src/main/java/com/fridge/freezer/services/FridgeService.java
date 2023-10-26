package com.fridge.freezer.services;

import com.fridge.freezer.models.Fridge;
import com.fridge.freezer.repositories.FridgeRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class FridgeService {
    private final FridgeRepository fridgeRepository;

    public FridgeService (FridgeRepository fridgeRepository) {
        this.fridgeRepository = fridgeRepository;
    }

    public List<Fridge> findAll() {
        return this.fridgeRepository.findAll();
    }

    public Fridge findById(Integer id) {
        return this.fridgeRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Fridge create(Fridge fridge) {
        return this.fridgeRepository.save(fridge);
    }

    public Fridge update(Integer id, Fridge fridge) {
        Fridge updatedFridge = this.fridgeRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        updatedFridge.setImage(fridge.getImage());
        updatedFridge.setName(fridge.getName());
        updatedFridge.setPrice(fridge.getPrice());
        return this.fridgeRepository.save(updatedFridge);
    }

    public void delete(Integer id) {
        this.fridgeRepository.deleteById(id);
    }
}
