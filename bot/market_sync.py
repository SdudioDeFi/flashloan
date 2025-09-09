import requests
import time

def fetch_prices():
    url = 'https://api.coingecko.com/api/v3/simple/price?ids=solana,usd-coin&vs_currencies=usd'
    resp = requests.get(url)
    return resp.json()

def main():
    while True:
        prices = fetch_prices()
        print('Live prices:', prices)
        # TODO: Sync with backend, optimize flashloan logic
        time.sleep(30)

if __name__ == '__main__':
    main()
