#!/bin/bash

# Spuštění frontendu
echo "Spuštění frontendu..."
cd /path/to/frontend
npm start &

# Spuštění backendu
echo "Spuštění backendu..."
cd /path/to/backend
node server.js &

# Spuštění databáze
echo "Spuštění databáze..."
cd /path/to/database
# Příkaz pro spuštění databáze (např. json-server)

echo "Všechny části byly spuštěny."
