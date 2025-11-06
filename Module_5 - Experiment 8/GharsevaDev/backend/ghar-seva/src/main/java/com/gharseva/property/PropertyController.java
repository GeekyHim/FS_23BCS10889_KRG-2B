package com.gharseva.property;

import org.springframework.transaction.annotation.Transactional;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
// @CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class PropertyController {
    private final PropertyRepository propertyRepository;

    public PropertyController(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    // Public listing for Home page
    @GetMapping("/properties")
    @Transactional(readOnly = true)
    public List<Property> listProperties() {
        return propertyRepository.findAll();
    }

    // Admin add
    @PostMapping("/admin/properties")
    public ResponseEntity<Property> createProperty(@Valid @RequestBody Property property) {
        Property saved = propertyRepository.save(property);
        return ResponseEntity.ok(saved);
    }
}


