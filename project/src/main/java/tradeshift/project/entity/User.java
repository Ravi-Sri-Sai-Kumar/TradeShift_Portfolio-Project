package tradeshift.project.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
    @Table(name = "users")
    public class User {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
        private List<Portfolio> portfolios;

        public List<Portfolio> getPortfolios() { return portfolios; }
        public void setPortfolios(List<Portfolio> portfolios) { this.portfolios = portfolios; }


        private String username;
        private String email;
        private String password;
        private String role; // e.g., ROLE_USER or ROLE_ADMIN

        // Getters & Setters
        public Long getId() {
            return id;
        }
        public void setId(Long id) {
            this.id = id;
        }

        public String getUsername() {
            return username;
        }
        public void setUsername(String username) {
            this.username = username;
        }

        public String getEmail() {
            return email;
        }
        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }
        public void setPassword(String password) {
            this.password = password;
        }

        public String getRole() {
            return role;
        }
        public void setRole(String role) {
            this.role = role;
        }
    }

