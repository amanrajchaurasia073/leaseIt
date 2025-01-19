package com.leaseIt.model;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Data
class PGDetails {

    @NotNull(message = "PG type is required")
    private String pgType; // ["womensPG", "mensPG", "coLivPG"]

    @NotNull(message = "Occupation type is required")
    private String occupationType; // ["Single sharing", "two sharing", "three sharing"]

    public String getOccupationType() {
        return occupationType;
    }

    public void setOccupationType(String occupationType) {
        this.occupationType = occupationType;
    }

    public String getPgType() {
        return pgType;
    }

    public void setPgType(String pgType) {
        this.pgType = pgType;
    }

}
