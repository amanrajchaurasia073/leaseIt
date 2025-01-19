package com.leaseIt.model;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Data
class HomeDetails {

    @NotBlank(message = "Property size is required")
    private String propertySize; // ["1bhk", "2bhk", "3bhk", "4bhk"]

    public String getPropertySize() {
        return propertySize;
    }

    public void setPropertySize(String propertySize) {
        this.propertySize = propertySize;
    }
}