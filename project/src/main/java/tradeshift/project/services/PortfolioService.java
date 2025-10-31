package tradeshift.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tradeshift.project.entity.*;
import tradeshift.project.repository.*;
import java.util.List;

@Service
public class PortfolioService {

    @Autowired
    private PortfolioRepository portfolioRepo;

    @Autowired
    private UserRepository userRepo;

    public Portfolio createPortfolio(String username, Portfolio portfolio) {
        User user = userRepo.findByUsername(username).orElseThrow();
        portfolio.setUser(user);
        return portfolioRepo.save(portfolio);
    }

    public List<Portfolio> getUserPortfolios(String username) {
        User user = userRepo.findByUsername(username).orElseThrow();
        return portfolioRepo.findByUserId(user.getId());
    }

    // New method to calculate total portfolio value and update it
    public Portfolio calculateAndUpdatePortfolioValue(Long portfolioId) {
        Portfolio portfolio = portfolioRepo.findById(portfolioId).orElseThrow();
        double totalValue = 0.0;
        if (portfolio.getAssets() != null) {
            for (Asset asset : portfolio.getAssets()) {
                double assetValue = (asset.getQuantity() != null ? asset.getQuantity() : 0) *
                        (asset.getPrice() != null ? asset.getPrice() : 0);
                totalValue += assetValue;
            }
        }
        portfolio.setTotalValue(totalValue);
        return portfolioRepo.save(portfolio);
    }
}
