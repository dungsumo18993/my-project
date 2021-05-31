package com.example.service.rating;

import com.example.model.Rating;
import com.example.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingServiceImpl implements RatingService {

    @Autowired
    private RatingRepository ratingRepository;

    @Override
    public List<Rating> getAllRating() {
        return ratingRepository.findAllOrderByRatingLevel();
    }
}
