package com.leaseIt.controller;

import com.leaseIt.model.User;
import com.leaseIt.service.JwtTokenService;
import com.leaseIt.service.TokenBlacklistService;
import com.leaseIt.service.UserServiceImpl;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private JwtTokenService jwtTokenService;

    @Autowired
    private TokenBlacklistService tokenBlacklistService;


    private static final Logger log = LoggerFactory.getLogger(UserController.class);

    // Register a new user
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody @Valid User user) {
        log.info("Received request to register user: {}", user.getEmail());
        try {
            User registeredUser = userService.registerUser(user);
            log.info("User registered successfully: {}", registeredUser.getEmail());
            return ResponseEntity.status(HttpStatus.CREATED).body(registeredUser);
        } catch (Exception e) {
            log.error("Registration failed for user: {}", user.getEmail(), e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Registration failed: " + e.getMessage());
        }
    }

    // Login and generate JWT token
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestParam String email, @RequestParam String password) {
        log.info("Received login request for user: {}", email);
        Optional<User> userOptional = Optional.ofNullable(userService.login(email, password));
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            String token = jwtTokenService.generateToken(user.getEmail());
            log.info("Login successful for user: {}", email);
            return ResponseEntity.ok(token);
        } else {
            log.warn("Login failed for user: {}", email);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }

    // Logout and invalidate JWT token
//    @PostMapping("/logout")
//    public ResponseEntity<String> logout(@RequestHeader("Authorization") String token) {
//        log.info("Received logout request");
//        try {
//            String jwtToken = token.substring(7); // Remove "Bearer " prefix
//            jwtTokenService.invalidateToken(jwtToken);
//            log.info("Logout successful for token: {}", jwtToken);
//            return ResponseEntity.ok("Logout successful");
//        } catch (Exception e) {
//            log.error("Logout failed", e);
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Logout failed: " + e.getMessage());
//        }
//    }
    @PostMapping("/logout")
    public ResponseEntity<String> logout(@RequestHeader("Authorization") String token) {
        // Extract the token from the Authorization header
        String jwtToken = token.replace("Bearer ", "");

        // Add the token to the blacklist
        tokenBlacklistService.addToBlacklist(jwtToken);

        return ResponseEntity.ok("Logged out successfully");
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        log.info("Received request to fetch all users");
        List<User> users = userService.getAllUsers();
        log.info("Fetched {} users", users.size());
        return ResponseEntity.ok(users);
    }

    // Delete a user by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable String id) {
        log.info("Received request to delete user with ID: {}", id);
        userService.deleteUser(id);
        log.info("User deleted successfully: {}", id);
        return ResponseEntity.noContent().build();
    }
}