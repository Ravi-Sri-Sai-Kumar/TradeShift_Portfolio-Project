package tradeshift.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tradeshift.project.security.JwtUtil;
import tradeshift.project.entity.*;
import tradeshift.project.services.*;

import jakarta.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {

    @Autowired
    private PortfolioService portfolioService;

    @Autowired
    private AssetService assetService;

    @Autowired
    private JwtUtil jwtUtil;

    private String getUsernameFromRequest(HttpServletRequest request) {
        String header = request.getHeader("Authorization");
        String token = header.substring(7);
        return jwtUtil.extractUsername(token);
    }

    @PostMapping
    public ResponseEntity<Portfolio> createPortfolio(@RequestBody Portfolio portfolio, HttpServletRequest request) {
        String username = getUsernameFromRequest(request);
        return ResponseEntity.ok(portfolioService.createPortfolio(username, portfolio));
    }

    @GetMapping
    public ResponseEntity<List<Portfolio>> getUserPortfolios(HttpServletRequest request) {
        String username = getUsernameFromRequest(request);
        return ResponseEntity.ok(portfolioService.getUserPortfolios(username));
    }

    @PostMapping("/{portfolioId}/assets")
    public ResponseEntity<Asset> addAsset(@PathVariable Long portfolioId, @RequestBody Asset asset) {
        return ResponseEntity.ok(assetService.addAsset(portfolioId, asset));
    }

    @GetMapping("/{portfolioId}/assets")
    public ResponseEntity<List<Asset>> getAssets(@PathVariable Long portfolioId) {
        return ResponseEntity.ok(assetService.getAssets(portfolioId));
    }
}
