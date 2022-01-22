package com.shortened.demo;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.shortened.demo.Service.ShortenedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Mutation implements GraphQLMutationResolver {
  @Autowired private ShortenedService shortenedService;

  public String createShortenedUrl(String originalUrl) {
    return shortenedService.createShortenedUrl(originalUrl);
  }
}
