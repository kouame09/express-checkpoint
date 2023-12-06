const checkWorkingHours = (req, res, next) => {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
  
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
      next(); // Si c'est pendant les heures de travail, poursuivre
    } else {
      res.status(403).json({ error: 'Désolé, le site est disponible seulement pendant les heures de travail (lundi-vendredi, 9h-17h).' });
    }
  };
  
  module.exports = { checkWorkingHours };
  