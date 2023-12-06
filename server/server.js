const express = require('express');
const app = express();
const path = require('path');

// Middleware pour vérifier l'heure de la requête
const checkWorkingHours = (req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next(); // Si c'est pendant les heures de travail, poursuivre
  } else {
    res.send('Désolé, le site est disponible seulement pendant les heures de travail (lundi-vendredi, 9h-17h).');
  }
};

// Middleware pour servir les fichiers statiques du dossier client
app.use(express.static(path.join(__dirname, '../client/build')));

// Utilisation du middleware de vérification des heures de travail pour toutes les routes
app.use(checkWorkingHours);

// Routes pour servir l'application React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
