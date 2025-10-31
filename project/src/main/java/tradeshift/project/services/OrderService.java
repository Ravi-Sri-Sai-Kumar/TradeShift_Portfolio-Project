package tradeshift.project.services;

import tradeshift.project.entity.Order;
import tradeshift.project.entity.Portfolio;
import tradeshift.project.entity.OrderType;
import tradeshift.project.repository.OrderRepository;
import tradeshift.project.repository.PortfolioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private PortfolioRepository portfolioRepository;

    public Order placeOrder(Long portfolioId, String symbol, OrderType type, Double quantity, Double price) {
        Portfolio portfolio = portfolioRepository.findById(portfolioId)
                .orElseThrow(() -> new RuntimeException("Portfolio not found"));

        Order order = new Order();
        order.setPortfolio(portfolio);
        order.setSymbol(symbol);
        order.setType(type);
        order.setQuantity(quantity);
        order.setPrice(price);

        // Logic for updating assets can be added here, now just order save.
        return orderRepository.save(order);
    }

    public List<Order> getOrdersByPortfolio(Long portfolioId) {
        return orderRepository.findByPortfolioId(portfolioId);
    }
}
