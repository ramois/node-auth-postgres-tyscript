npm init -y
npm install express jsonwebtoken bcrypt @prisma/client dotenv typescript
npm install --save-dev ts-node-dev @types/express @types/jsonwebtoken @types/bcrypt @types/node rimraf prisma
npx tsc --init --outDir dist/ --rootDir src
Agregar carpetas excluídas e incluídas al archivo de configuración de TypeScript "exclude": ["node_modules","dist" ], "include": ["src"] 
npx prisma init
npx prisma generate
Agregar los modelos en schema.prisma
npmx prisma migrate dev
docker-compose up -d
Agregar los siguientes scripts: "dev": "tsnd --respawn --clear src/app.ts",   "build": "rimraf ./dist && tsc",   "start": "npm run build && node dist/app.js"
