package com.leaseIt.service;

import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.concurrent.TimeUnit;

@Service
public class TokenBlacklistService {

    @Autowired
    private RedisTemplate<String, String> redisTemplate;

    // Add token to blacklist
    public void addToBlacklist(String token) {
        // Store the token with an expiration time (same as the token's expiration)
        Date expirationDate = Jwts.parser()
                .setSigningKey("your-secret-key") // Use the same secret key used to sign the token
                .parseClaimsJws(token)
                .getBody()
                .getExpiration();

        redisTemplate.opsForValue().set(token, "revoked", expirationDate.getTime() - System.currentTimeMillis(), TimeUnit.MILLISECONDS);
    }

    // Check if token is blacklisted
    public boolean isBlacklisted(String token) {
        return redisTemplate.hasKey(token);
    }
}