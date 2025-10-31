package tradeshift.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import tradeshift.project.entity.*;
import tradeshift.project.repository.*;
import java.util.List;
import java.util.Map;

@Service
public class AssetService {

    @Autowired
    private AssetRepository assetRepo;

    @Autowired
    private PortfolioRepository portfolioRepo;

    @Autowired
    private PortfolioService portfolioService;  // Inject PortfolioService to update portfolio value

    @Autowired
    private RestTemplate restTemplate;  // For Finnhub API HTTP requests

    @Value("${finnhub.api.key}")
    private String finnhubApiKey;

    // Fetch live price for given symbol from Finnhub
    public Double fetchLivePrice(String symbol) {
        try {
            String url = "https://finnhub.io/api/v1/quote?symbol=" + symbol + "&token=" + finnhubApiKey;
            Map<String, Object> response = restTemplate.getForObject(url, Map.class);
            Object priceObject = response.get("c");
            if (priceObject != null) {
                return Double.valueOf(priceObject.toString());
            }
        } catch (Exception e) {
            // Log error and fallback to zero price
            System.out.println("Error fetching price from Finnhub for symbol: " + symbol + " " + e.getMessage());
        }
        return 0.0;
    }

    public Asset addAsset(Long portfolioId, Asset asset) {
        Portfolio portfolio = portfolioRepo.findById(portfolioId).orElseThrow();
        asset.setPortfolio(portfolio);
        // Set asset price from Finnhub
        Double livePrice = fetchLivePrice(asset.getSymbol());
        asset.setPrice(livePrice);

        Asset savedAsset = assetRepo.save(asset);

        // Update portfolio total value after adding asset
        portfolioService.calculateAndUpdatePortfolioValue(portfolioId);

        return savedAsset;
    }

    public List<Asset> getAssets(Long portfolioId) {
        return assetRepo.findByPortfolioId(portfolioId);
    }
}
