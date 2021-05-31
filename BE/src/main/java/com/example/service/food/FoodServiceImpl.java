package com.example.service.food;

import com.example.model.Food;
import com.example.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodServiceImpl implements FoodService {

    @Autowired
    private FoodRepository foodRepository;

    @Override
    public List<Food> getAllFood() {
        return foodRepository.findAll();
    }

    @Override
    public List<Food> getAllFoodSortByName() {
        return foodRepository.getAllOrderByFoodName();
    }

    @Override
    public List<Food> getAllSortByPrice() {
        return foodRepository.findAllOrderByPrice();
    }

    @Override
    public List<Food> getFoodBySearch(String foodName, Integer categoryId) {
        return foodRepository.getFoodBySearch(foodName, categoryId);
    }

    @Override
    public Food getFoodById(Integer foodId) {
        return foodRepository.findById(foodId).orElse(null);
    }
}
