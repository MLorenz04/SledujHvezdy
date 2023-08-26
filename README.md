# Sleduj hvězdy

Sleduj hvězdy je projekt zaměřující se na fanoušky vesmíru. Probírá a zpracovává obsáhlá témata, která nemusí být jednoduchá na pochopení do jednoduchých článků. Vykreslování 3D obrazců a modelů na stránce zároveň uklidňuje uživatelovo oko a jeho mysl spočine na kráse vesmíru a jeho tajemství.

## Jak spustit

Je potřeba mít otevřené tři terminály a povolené tři porty - 3000, 8000 a 3001.
Tři příkazy, jinak projekt nebude fungovat. Je důležité být v hlavní složce projektu a ne třeba v src nebo public
### `npm start`

Spustí celý projekt na adrese http://localhost:3000

### `npx json-server --watch data/db.json --port 8000`

Spustí JSON databázi na adrese http://localhost:8000
Ta slouží k ukládání různých hvězd, které jsou potom vykreslovány a nahrazuje MySQL databázi

### `node server/server.js`

Spustí backend server na adrese http://localhost:3001, který slouží jako API k nahrávání fotek pro jednotlivé hvězdy.

