import requests
import json

def CallAPI(name):
    response = requests.get('https://cs684api.7g2rji63c728k.us-east-1.cs.amazonlightsail.com/hw3/?team=Transformer')
    return response.json()

print(CallAPI())

