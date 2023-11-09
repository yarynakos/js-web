package com.fridge.freezer.repositories;

import com.fridge.freezer.models.Fridge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FridgeRepository extends JpaRepository<Fridge, Integer> {}
