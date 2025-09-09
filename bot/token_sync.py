from providers_meteora import PROVIDERS

def sync_all_tokens():
    all_tokens = {}
    for provider in PROVIDERS:
        try:
            tokens = provider.get_tokens()
            all_tokens[provider.__class__.__name__] = tokens
        except Exception as e:
            all_tokens[provider.__class__.__name__] = f'Error: {e}'
    return all_tokens

if __name__ == '__main__':
    print(sync_all_tokens())
