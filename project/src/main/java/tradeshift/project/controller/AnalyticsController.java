package tradeshift.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tradeshift.project.services.AnalyticsService;
import java.util.*;

@RestController
@RequestMapping("/api/analytics")
public class AnalyticsController {

    @Autowired
    private AnalyticsService analyticsService;

    @GetMapping("/profit-loss")
    public double getProfitLoss(@RequestParam Long portfolioId) {
        return analyticsService.calculateProfitLoss(portfolioId);
    }

    @GetMapping("/asset-allocation")
    public Map<String, Double> getAssetAllocation(@RequestParam Long portfolioId) {
        return analyticsService.calculateAssetAllocation(portfolioId);
    }

    @GetMapping("/performance")
    public double getPerformance(@RequestParam Long portfolioId, @RequestParam String period) {
        return analyticsService.calculatePerformance(portfolioId, period);
    }
}
