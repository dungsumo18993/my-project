package com.example.repository;

import com.example.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@Repository
public interface FoodRepository extends JpaRepository<Food, Integer> {

    @Query(value = "SELECT f" +
            " FROM Food f" +
            " ORDER BY f.foodName")
    List<Food> getAllOrderByFoodName();

    @Query(value = "SELECT f" +
            " FROM Food f" +
            " ORDER BY f.price, f.foodName")
    List<Food> findAllOrderByPrice();

    @Query(value = "SELECT f" +
            " FROM Food f" +
            " WHERE (:name is null or f.foodName like %:name%) and" +
            " (:categoryId is null or f.category.id = :categoryId)")
    List<Food> getFoodBySearch(String name, Integer categoryId);
}
