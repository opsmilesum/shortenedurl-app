package com.shortened.demo.DAO;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.Instant;

@Entity
@Table(name = "shortened_url")
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ShortenedUrlDAO {
    @Id
    @Column(name = "shortened_url")
    private String shortenedUrl;

    @Column(name = "original_url", nullable = false)
    private String originalUrl;

    private String description;
    private boolean disabled;
    private Instant createdAt;
    private long createdBy;
}
