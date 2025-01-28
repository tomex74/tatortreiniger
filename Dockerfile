# Beispiel: Node 18
FROM node:18-alpine

# Arbeitsverzeichnis im Container
WORKDIR /app

# package.json + package-lock.json kopieren
COPY package*.json ./

# Abhängigkeiten installieren
RUN npm install

# Quellcode kopieren (alles)
COPY . .

# Standard-Port freigeben
EXPOSE 3000

# Startbefehl
CMD ["npm", "run", "dev"]
