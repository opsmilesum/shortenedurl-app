package com.shortened.demo.Repository;

import com.shortened.demo.DAO.ShortenedUrlDAO;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShortenedRepository extends CrudRepository<ShortenedUrlDAO, String> {
  ShortenedUrlDAO findByShortenedUrl(String shortenedUrl);
}
