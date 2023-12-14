package com.fridge.freezer.repositories;

import com.fridge.freezer.models.Beauty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BeautyRepository extends JpaRepository<Beauty, Integer> {}
