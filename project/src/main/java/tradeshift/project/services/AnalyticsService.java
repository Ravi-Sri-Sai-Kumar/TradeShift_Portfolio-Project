package tradeshift.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tradeshift.project.repository.OrderRepository;
import tradeshift.project.repository.AssetRepository;
import tradeshift.project.repository.PortfolioRepository;
import tradeshift.project.entity.Order;
import tradeshift.project.entity.Asset;
import tradeshift.project.entity.OrderType;

import java.util.*;

@Service
public class AnalyticsService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private AssetRepository assetRepository;

    @Autowired
    private PortfolioRepository portfolioRepository;

    // 1. Profit/Loss
    public double calculateProfitLoss(Long portfolioId) {
        List<Order> orders = orderRepository.findByPortfolioId(portfolioId);
        double total = 0;
        for (Order order : orders) {
            if (order.getType() == OrderType.SELL) {
                total += order.getQuantity() * order.getPrice();
            } else if (order.getType() == OrderType.BUY) {
                total -= order.getQuantity() * order.getPrice();
            }
        }
        return total;
    }

    // 2. Asset Allocation (symbol-wise % for now)
    public Map<String, Double> calculateAssetAllocation(Long portfolioId) {
        List<Asset> assets = assetRepository.findByPortfolioId(portfolioId);
        Map<String, Double> allocation = new HashMap<>();
        double totalValue = 0.0;
        for (Asset asset : assets) {
            totalValue += asset.getPrice() * asset.getQuantity();
        }
        for (Asset asset : assets) {
            String symbol = asset.getSymbol();
            double value = asset.getPrice() * asset.getQuantity();
            allocation.put(symbol, allocation.getOrDefault(symbol, 0.0) + value);
        }
        if (totalValue > 0) {
            for (String symbol : allocation.keySet()) {
                allocation.put(symbol, (allocation.get(symbol) / totalValue) * 100.0);
            }
        }
        return allocation;
    }

    // 3. Performance dummy (implement period logic as needed)
    public double calculatePerformance(Long portfolioId, String period) {
        List<Asset> assets = assetRepository.findByPortfolioId(portfolioId);
        double currentValue = 0;
        for (Asset asset : assets) {
            currentValue += asset.getPrice() * asset.getQuantity();
        }
        double startingValue = 1000; // Dummy, or fetch from DB as per 'period'
        return ((currentValue - startingValue) / startingValue) * 100.0;
    }
}
