package com.leaseIt.service;

import com.leaseIt.dto.RegistrationRequest;
import com.leaseIt.model.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    User registerUser(RegistrationRequest request);
    String loginUser(String email, String password);
    void logoutUser(String email);
}