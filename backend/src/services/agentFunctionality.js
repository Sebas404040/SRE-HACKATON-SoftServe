export async function analyzeIncident(description, file, traceId) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockResponse = {
        title: "Review configuration on Stripe Webhooks",
        severity: "High",
        component: "medusa-payment-stripe",
        summary: "The user reports failures in the payment.",
        suggestedAction: "Verify STRIPE_API_KEY in environtment keys and stripe dashboard",
        confidenceScore: 0.92
    }

    console.log(`[INFO] [${traceId}] Analisis generated successfully. Level Severity: ${mockResponse.severity}`);
    return mockResponse
}
