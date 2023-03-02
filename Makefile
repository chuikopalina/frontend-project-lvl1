install: #определение зависимостей
	npm ci

brain-games: #запуск игры
	node bin/brain-games.js

publish: 
	npm publish --dry-run

lint: #запуск eslint
	npx eslint .

brain-even: #запуск игры even
	node bin/brain-even.js

brain-calc: #запуск игры calc
	node bin/brain-calc.js

brain-gcd: #запуск игры gcd
	node bin/brain-gcd.js
brain-prime: #запуск игры prime
	node bin/brain-prime.js
brain-progression: #запуск игры progression
	node bin/brain-progression.js
