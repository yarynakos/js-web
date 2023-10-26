package com.fridge.freezer.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Fridge {
    @Id
    @GeneratedValue
    private Integer id;

    @Column(length = 500)
    private String image;

    @Column
    private String name;

    @Column
    private Integer price;
}
