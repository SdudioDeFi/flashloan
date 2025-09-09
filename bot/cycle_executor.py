from providers import PROVIDERS
import random
import sys
import json

def run_profit_cycle(strategy, amount, token):
    results = []
    for provider in PROVIDERS:
        trade = provider.execute_trade(float(amount), token)
        results.append(trade)
    total_profit = sum(r['profit'] for r in results)
    return {
        'strategy': strategy,
        'trades': results,
        'total_profit': round(total_profit, 4),
        'cycle_map': [r['provider'] for r in results]
    }

if __name__ == '__main__':
    strategy = sys.argv[1] if len(sys.argv) > 1 else 'triangle'
    amount = sys.argv[2] if len(sys.argv) > 2 else 100
    token = sys.argv[3] if len(sys.argv) > 3 else 'SOL'
    result = run_profit_cycle(strategy, amount, token)
    print(json.dumps(result))
