package com.example.service.food;

import com.example.model.Food;

import java.util.List;

public interface FoodService {
    List<Food> getAllFood();

    List<Food> getAllFoodSortByName();

    List<Food> getAllSortByPrice();

    List<Food> getFoodBySearch(String foodName, Integer categoryId);

    Food getFoodById(Integer foodId);
}
