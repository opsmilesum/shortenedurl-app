package com.shortened.demo;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.shortened.demo.Service.ShortenedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Query implements GraphQLQueryResolver {
  @Autowired private ShortenedService shortenedService;

  public String getOriginalUrl(String shortenedUrl) {
    return shortenedService.queryOriginalUrl(shortenedUrl);
  }
}
