install: #определение зависимостей
	npm ci

brain-games: #запуск игры
	node src/games/brain-games.js

publish: 
	npm publish --dry-run

lint: #запуск eslint
	npx eslint .

brain-even: #запуск игры even
	node src/games/brain-even.js

brain-calc: #запуск игры calc
	node src/games/brain-calc.js

brain-gcd: #запуск игры gcd
	node src/games/brain-gcd.js
brain-prime: #запуск игры prime
	node src/games/brain-prime.js
brain-progression: #запуск игры progression
	node src/games/brain-progression.js
