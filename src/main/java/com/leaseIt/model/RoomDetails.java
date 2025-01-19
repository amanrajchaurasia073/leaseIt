package com.leaseIt.model;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Data
class RoomDetails {
    @NotNull(message = "Room size is required")
    @Positive(message = "Room size must be a positive value")
    private Double roomSize; // in sq feet

    @NotEmpty(message = "Facilities provided must not be empty")
    private List<String> facilitiesProvided;

    @NotEmpty(message = "Rules and regulations must not be empty")
    private List<String> rulesAndRegulations;

    public Double getRoomSize() {
        return roomSize;
    }

    public void setRoomSize(Double roomSize) {
        this.roomSize = roomSize;
    }

    public List<String> getFacilitiesProvided() {
        return facilitiesProvided;
    }

    public void setFacilitiesProvided(List<String> facilitiesProvided) {
        this.facilitiesProvided = facilitiesProvided;
    }

    public List<String> getRulesAndRegulations() {
        return rulesAndRegulations;
    }

    public void setRulesAndRegulations(List<String> rulesAndRegulations) {
        this.rulesAndRegulations = rulesAndRegulations;
    }
}