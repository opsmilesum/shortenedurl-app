package com.shortened.demo.Service;

import com.shortened.demo.DAO.ShortenedUrlDAO;
import com.shortened.demo.Repository.ShortenedRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Random;

@Component
@Slf4j
public class ShortenedService {
    @Autowired
    private ShortenedRepository shortenedRepository;

    private final static String WEB_URL = "http://shortenedurl/";
    private final static int RETRY_TIMES = 3;
    private static final char[] base64URL = {
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '_'
    };


    private String getShortenedCode() {
        StringBuilder shortenedUrl = new StringBuilder();
        Random random = new Random(Instant.now().getNano());
        for (int i = 0; i < 6; i++) {
            shortenedUrl.append(base64URL[random.nextInt(base64URL.length)]);
        }
        return shortenedUrl.toString();
    }

    public String createShortenedUrl(String originalUrl) {
        // Check original url is legal: http://xxx/xxx;
        for (int i = 0; i < RETRY_TIMES; i++) {
            ShortenedUrlDAO shortenedUrlDAO = buildShortenedUrlDAO(originalUrl);
            try {
                shortenedUrlDAO = shortenedRepository.save(shortenedUrlDAO);
            } catch (Exception e) {
                //
                continue;
            }
            return shortenedUrlDAO.getShortenedUrl();
        }
        throw new RuntimeException("Create Failed, please try again.");
    }

    public String queryOriginalUrl(String shortenedUrl) {
        ShortenedUrlDAO shortenedUrlDAO = shortenedRepository.findByShortenedUrl(shortenedUrl);
        if (shortenedUrlDAO == null) {
            return null;
        }
        return shortenedUrlDAO.getOriginalUrl();
    }

    private ShortenedUrlDAO buildShortenedUrlDAO(String originalUrl) {
        return ShortenedUrlDAO.builder()
                .originalUrl(originalUrl)
                .shortenedUrl(WEB_URL + getShortenedCode())
                .disabled(false)
                .createdAt(Instant.now())
                .createdBy(0L)
                .build();
    }
}
