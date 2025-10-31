package tradeshift.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tradeshift.project.entity.Order;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByPortfolioId(Long portfolioId);
}
