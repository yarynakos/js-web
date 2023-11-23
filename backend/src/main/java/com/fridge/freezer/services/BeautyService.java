package com.fridge.freezer.services;

import com.fridge.freezer.models.Beauty;
import com.fridge.freezer.repositories.BeautyRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class BeautyService {
    private final BeautyRepository beautyRepository;

    public BeautyService(BeautyRepository beautyRepository) {
        this.beautyRepository = beautyRepository;
    }

    public List<Beauty> findAll() {
        return this.beautyRepository.findAll();
    }

    public Beauty findById(Integer id) {
        return this.beautyRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Beauty create(Beauty beauty) {
        return this.beautyRepository.save(beauty);
    }

    public Beauty update(Integer id, Beauty beauty) {
        Beauty updatedBeauty = this.beautyRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        updatedBeauty.setImage(beauty.getImage());
        updatedBeauty.setName(beauty.getName());
        updatedBeauty.setPrice(beauty.getPrice());
        return this.beautyRepository.save(updatedBeauty);
    }

    public void delete(Integer id) {
        this.beautyRepository.deleteById(id);
    }
}
