export function calculateProfit(route: any, amount: number): number {
  // Dummy logic, replace with actual arbitrage calculation
  return 0.01 * amount;
}
export function deductLiquidityFee(profit: number, feeRate: number): number {
  return profit * feeRate;
}