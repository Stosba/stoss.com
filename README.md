# STOSS - Solutions Informatiques

Site web professionnel pour STOSS, spécialisé en solutions informatiques innovantes pour entreprises.

## 🚀 Services Proposés

- **Audit IT avec IA** : Révolutionnez vos processus d'entreprise grâce à l'intelligence artificielle
- **Développement Web** : Sites et applications web modernes et performants
- **Services Webmaster** : Maintenance et optimisation de votre présence web

## 🎨 Caractéristiques

- **Design moderne** avec thème vert d'eau
- **Responsive** : Compatible tous appareils
- **Animations fluides** et interactions engageantes
- **Performance optimisée** 
- **SEO optimisé**

## 📁 Structure du Projet

```
stoss.com/
├── index.html          # Page principale
├── style.css           # Styles CSS avec thème vert d'eau
├── script.js           # Fonctionnalités JavaScript
├── logo_STOSS.jpeg     # Logo de l'entreprise
└── README.md           # Documentation
```

## 🔧 Installation et Déploiement

### Déploiement sur GitHub Pages

1. **Créer un nouveau repository sur GitHub**
   - Allez sur [GitHub](https://github.com/Stosba)
   - Créez un nouveau repository nommé `stoss.com` ou `stosba.github.io`
   - Initialisez avec un README

2. **Uploader les fichiers**
   ```bash
   git clone https://github.com/Stosba/stoss.com.git
   cd stoss.com
   
   # Copier tous les fichiers de ce projet dans le dossier
   # Puis :
   
   git add .
   git commit -m "Initial commit - Site web STOSS"
   git push origin main
   ```

3. **Activer GitHub Pages**
   - Dans le repository, allez dans `Settings`
   - Scrollez jusqu'à `Pages`
   - Dans `Source`, sélectionnez `Deploy from a branch`
   - Choisissez `main` branch et `/ (root)`
   - Cliquez sur `Save`

4. **Accéder au site**
   - Votre site sera disponible sur `https://stosba.github.io/stoss.com/`
   - Ou `https://stosba.github.io/` si le repository s'appelle `stosba.github.io`

### Domaine Personnalisé (Optionnel)

Pour utiliser un domaine personnalisé comme `stoss.com` :

1. **Acheter un domaine** chez un registraire (OVH, Gandi, etc.)

2. **Configurer les DNS**
   - Ajoutez les enregistrements DNS suivants :
   ```
   Type: A
   Nom: @
   Valeur: 185.199.108.153
   
   Type: A
   Nom: @
   Valeur: 185.199.109.153
   
   Type: A
   Nom: @
   Valeur: 185.199.110.153
   
   Type: A
   Nom: @
   Valeur: 185.199.111.153
   
   Type: CNAME
   Nom: www
   Valeur: stosba.github.io
   ```

3. **Configurer GitHub Pages**
   - Dans `Settings > Pages`
   - Ajoutez votre domaine dans `Custom domain`
   - Activez `Enforce HTTPS`

## 🎯 Personnalisation

### Modifier les couleurs
Les couleurs sont définies dans `style.css` avec les variables CSS :
```css
:root {
    --primary-color: #20b2aa;      /* Vert d'eau principal */
    --primary-light: #40d3ca;     /* Vert d'eau clair */
    --primary-dark: #008b8b;      /* Vert d'eau foncé */
    --secondary-color: #48d1cc;   /* Turquoise */
    --accent-color: #00ffff;      /* Cyan */
}
```

### Modifier le contenu
- **Titre et description** : Modifiez les balises `<title>` et `<meta description>` dans `index.html`
- **Coordonnées** : Mettez à jour la section contact avec vos vraies coordonnées
- **Services** : Personnalisez les descriptions des services selon vos besoins

### Ajouter des fonctionnalités
- **Analytics** : Ajoutez Google Analytics dans `<head>`
- **Chat** : Intégrez un widget de chat client
- **Blog** : Ajoutez une section blog avec des articles

## 📱 Compatibilité

- ✅ Chrome/Edge (versions récentes)
- ✅ Firefox (versions récentes)  
- ✅ Safari (versions récentes)
- ✅ Mobile iOS/Android
- ✅ Tablettes

## 🔐 Sécurité

- HTTPS obligatoire (activé par défaut sur GitHub Pages)
- Validation des formulaires côté client
- Protection contre l'injection XSS
- Headers de sécurité recommandés

## 📊 Performance

- Images optimisées
- CSS et JS minifiés en production
- Lazy loading des images
- Cache navigateur optimisé

## 🆘 Support

Pour toute question ou problème :
- Créez une issue sur GitHub
- Contactez le support technique
- Consultez la documentation GitHub Pages

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier selon vos besoins.

## 🔄 Maintenance

### Mises à jour régulières
- Vérifiez les mises à jour de sécurité
- Testez la compatibilité avec les nouveaux navigateurs
- Optimisez les performances régulièrement

### Sauvegarde
- Le code est sauvegardé sur GitHub
- Pensez à sauvegarder vos personnalisations locales

---

**Développé avec ❤️ pour STOSS Solutions Informatiques** 