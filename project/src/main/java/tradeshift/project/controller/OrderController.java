package tradeshift.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tradeshift.project.entity.Order;
import tradeshift.project.entity.OrderType;
import tradeshift.project.services.OrderService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/portfolio/{portfolioId}/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping
    public Order placeOrder(
            @PathVariable Long portfolioId,
            @RequestBody Map<String, Object> orderRequest
    ) {
        String symbol = (String) orderRequest.get("symbol");
        String type = (String) orderRequest.get("type"); // "BUY" or "SELL"
        Double quantity = Double.valueOf(orderRequest.get("quantity").toString());
        Double price = Double.valueOf(orderRequest.get("price").toString());

        return orderService.placeOrder(portfolioId, symbol, OrderType.valueOf(type), quantity, price);
    }

    @GetMapping
    public List<Order> getOrders(@PathVariable Long portfolioId) {
        return orderService.getOrdersByPortfolio(portfolioId);
    }
}
