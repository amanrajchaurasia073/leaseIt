package com.leaseIt.dto;

import com.leaseIt.model.PropertyDetails;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Data
public class RegistrationRequest {
    private String fullName;
    private String email;
    private String password;
    private List<String> userType;
    private PropertyDetails propertyDetails;
}