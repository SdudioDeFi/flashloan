import { getPricesFromOKX, getPricesFromJupiter, executeTrade } from './apiProviders';
import { calculateProfit, deductLiquidityFee } from './feeUtils';

export async function runArbitrage(userId: string, amount: number) {
  const okxPrices = await getPricesFromOKX();
  const jupiterPrices = await getPricesFromJupiter();
  const route = findBestRoute(okxPrices, jupiterPrices);

  let profit = calculateProfit(route, amount);
  const fee = deductLiquidityFee(profit, 0.003);

  if (profit > fee && profit > 0) {
    await executeTrade(route, amount);
    // TODO: Save user trade and analytics
    return { success: true, profit: profit - fee };
  } else {
    return { success: false, reason: "No profitable route found" };
  }
}