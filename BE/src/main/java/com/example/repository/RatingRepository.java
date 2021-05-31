package com.example.repository;

import com.example.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Integer> {

    @Query(value = "SELECT r" +
            " FROM Rating r" +
            " ORDER BY r.ratingLevel desc")
    List<Rating> findAllOrderByRatingLevel();
}
