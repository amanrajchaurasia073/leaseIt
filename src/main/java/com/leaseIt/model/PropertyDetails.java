package com.leaseIt.model;

import jakarta.validation.constraints.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@Data
public class PropertyDetails {
    @NotBlank(message = "Property name is required")
    @Size(max = 100, message = "Property name must be less than 100 characters")
    private String propertyName;

    @NotNull(message = "Monthly rent is required")
    @Positive(message = "Monthly rent must be a positive value")
    private Double monthlyRent;

    @NotNull(message = "Deposit amount is required")
    @Positive(message = "Deposit amount must be a positive value")
    private Double depositAmount;

    @PositiveOrZero(message = "Refund amount must be a positive value or zero")
    private Double refundAmount;

    @NotBlank(message = "City is required")
    @Size(max = 50, message = "City must be less than 50 characters")
    private String city;

    @NotBlank(message = "Address is required")
    @Size(max = 200, message = "Address must be less than 200 characters")
    private String address;

    @NotBlank(message = "Contact number is required")
    @Pattern(regexp = "^[0-9]{10}$", message = "Contact number must be a 10-digit number")
    private String contactNumber;

    @NotBlank(message = "Owner name is required")
    @Size(max = 50, message = "Owner name must be less than 50 characters")
    private String ownerName;

    @NotEmpty(message = "Property type must not be empty")
    private List<String> propertyType; // ["PG", "Rooms", "Homes"]

    private RoomDetails roomDetails; // Only if propertyType contains "Rooms"

    private PGDetails pgDetails; // Only if propertyType contains "PG"

    private HomeDetails homeDetails; // Only if propertyType contains "Homes"

    @NotEmpty(message = "Photos must not be empty")
    private List<String> photos; // List of photo URLs or Blob references

    @NotBlank(message = "Location is required")
    @Size(max = 100, message = "Location must be less than 100 characters")
    private String location;

    @NotEmpty(message = "Finishing must not be empty")
    private List<String> finishing; // ["semi-furnished", "fully-furnished", "un-furnished"]

    private List<String> extraFacilities;

    public String getPropertyName() {
        return propertyName;
    }

    public void setPropertyName(String propertyName) {
        this.propertyName = propertyName;
    }

    public Double getMonthlyRent() {
        return monthlyRent;
    }

    public void setMonthlyRent(Double monthlyRent) {
        this.monthlyRent = monthlyRent;
    }

    public Double getDepositAmount() {
        return depositAmount;
    }

    public void setDepositAmount(Double depositAmount) {
        this.depositAmount = depositAmount;
    }

    public Double getRefundAmount() {
        return refundAmount;
    }

    public void setRefundAmount(Double refundAmount) {
        this.refundAmount = refundAmount;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public List<String> getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(List<String> propertyType) {
        this.propertyType = propertyType;
    }

    public RoomDetails getRoomDetails() {
        return roomDetails;
    }

    public void setRoomDetails(RoomDetails roomDetails) {
        this.roomDetails = roomDetails;
    }

    public PGDetails getPgDetails() {
        return pgDetails;
    }

    public void setPgDetails(PGDetails pgDetails) {
        this.pgDetails = pgDetails;
    }

    public HomeDetails getHomeDetails() {
        return homeDetails;
    }

    public void setHomeDetails(HomeDetails homeDetails) {
        this.homeDetails = homeDetails;
    }

    public List<String> getPhotos() {
        return photos;
    }

    public void setPhotos(List<String> photos) {
        this.photos = photos;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public List<String> getFinishing() {
        return finishing;
    }

    public void setFinishing(List<String> finishing) {
        this.finishing = finishing;
    }

    public List<String> getExtraFacilities() {
        return extraFacilities;
    }

    public void setExtraFacilities(List<String> extraFacilities) {
        this.extraFacilities = extraFacilities;
    }
}