package com.example.controller;

import com.example.model.Food;
import com.example.service.food.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/food")
public class FoodController {

    @Autowired
    private FoodService foodService;

    @GetMapping("/list")
    public ResponseEntity<List<Food>> getAllFood() {
        try {
            List<Food> foodList = foodService.getAllFood();
            if (foodList == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(foodList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/sort-by-name")
    public ResponseEntity<List<Food>> getAllSortByName() {
        try {
            List<Food> foods = foodService.getAllFoodSortByName();
            if (foods == null){
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(foods, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/sort-by-price")
    public ResponseEntity<List<Food>> getAllSortByPrice() {
        try {
            List<Food> foods = foodService.getAllSortByPrice();
            if (foods == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(foods, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/search")
    public ResponseEntity<List<Food>> getFoodBySearch(@RequestParam String foodName,
                                                      @RequestParam Integer categoryId) {
        try {
            if (foodName.equals("undefined")) {
                foodName = null;
            }

            if (categoryId == 0) {
                categoryId = null;
            }
            List<Food> foods = foodService.getFoodBySearch(foodName, categoryId);
            if (foods == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(foods, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Food> getFoodById(@PathVariable("id") Integer foodId) {
        try {
            Food food = foodService.getFoodById(foodId);
            if (food == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(food, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
