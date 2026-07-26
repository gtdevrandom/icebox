# ❄️ Icebox - Gestionnaire de Glaces

Une Progressive Web App (PWA) pour gérer votre liste de glaces avec synchronisation temps réel via Firebase.

## ✨ Fonctionnalités

- ✅ **Ajouter/Supprimer des glaces** - Gestion complète de votre inventaire
- 📊 **Gérer les quantités** - Ajustez les quantités avec +/- ou modifiez directement
- 🌐 **Synchronisation Firebase** - Vos données sont sauvegardées en temps réel
- 📱 **PWA Installable** - Installez l'app comme une application native
- 🔄 **Offline Mode** - Fonctionne même sans connexion Internet
- 🎨 **Design Bleu et Blanc** - Interface moderne et épurée
- 📍 **Responsive** - Fonctionne sur tous les appareils

## 📋 Spécifications Techniques

- **Frontend**: HTML5, CSS3, JavaScript vanilla
- **Backend**: Firebase Realtime Database
- **Hébergement**: GitHub Pages
- **Features PWA**: Service Worker, Web App Manifest

## 🚀 Installation Locale

### Prérequis
- Un navigateur moderne (Chrome, Firefox, Safari, Edge)
- Git installé

### Étapes

1. **Clonez le repository**
   ```bash
   git clone https://github.com/votre-username/icebox.git
   cd icebox
   ```

2. **Ouvrez le fichier HTML**
   ```bash
   # Vous pouvez ouvrir index.html directement ou utiliser un serveur local
   # Avec Python 3:
   python -m http.server 8000
   
   # Avec Node.js (http-server):
   npx http-server
   ```

3. **Accédez à l'application**
   - Ouvrez `http://localhost:8000` dans votre navigateur

## 🌍 Déploiement sur GitHub Pages

### Configuration

1. **Créez un repository GitHub**
   - Allez sur [GitHub](https://github.com/new)
   - Créez un repository nommé `icebox`

2. **Configurez GitHub Pages**
   - Allez dans les paramètres de votre repository
   - Sélectionnez `Settings` → `Pages`
   - Choisissez `Deploy from a branch`
   - Sélectionnez la branche `main` et le dossier `/ (root)`

3. **Deployez le code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/votre-username/icebox.git
   git push -u origin main
   ```

4. **Accédez à votre site**
   - Votre PWA sera disponible à `https://votre-username.github.io/icebox/`

## 🔐 Configuration Firebase

La configuration Firebase est déjà incluse dans `index.html`. Les données sont stockées dans:
- **Database URL**: `https://icebox-2026-default-rtdb.europe-west1.firebasedatabase.app/`

Les règles de sécurité Firebase Realtime Database sont actuellement en mode lecture/écriture publique. Pour produire, modifiez-les via la console Firebase.

## 📱 Installation comme PWA

### Sur mobile/desktop
1. Ouvrez l'application dans votre navigateur
2. Cliquez sur le menu (3 points) et sélectionnez "Installer l'app"
3. Confirmez pour ajouter à votre écran d'accueil

### Avantages
- ⚡ Accès rapide depuis l'écran d'accueil
- 🔄 Mise à jour automatique
- 📴 Fonctionnement hors ligne limité
- 🔔 Notifications possibles

## 🛠️ Architecture

```
icebox/
├── index.html          # Interface principale
├── manifest.json       # Configuration PWA
├── sw.js              # Service Worker
├── .gitignore         # Fichiers à ignorer
└── README.md          # Cette documentation
```

## 📝 Utilisation

### Ajouter une glace
1. Entrez le nom (ex: "Vanille")
2. Ajoutez une saveur (optionnel, ex: "Madagascar")
3. Définissez la quantité (par défaut: 1)
4. Cliquez sur "Ajouter" ou appuyez sur Entrée

### Modifier la quantité
- Utilisez les boutons **+** et **−** pour ajuster la quantité
- Les modifications sont sauvegardées automatiquement

### Supprimer une glace
- Cliquez sur le bouton 🗑️ en bout de ligne
- Confirmez la suppression

## 🎨 Design

- **Couleur primaire**: Bleu (#1e3a8a, #3b82f6)
- **Couleur secondaire**: Blanc (#ffffff)
- **Accents**: Orange (quantité faible), Rouge (vide)
- **Font**: Segoe UI, Tahoma, Geneva, Verdana

## 🔄 Synchronisation

- 🟢 **Synchronisé**: Les données sont à jour
- 🟠 **Synchronisation en cours**: Opération en cours
- 📡 **Offline**: L'application continue de fonctionner

## 🐛 Dépannage

### L'app ne se synchronise pas
- Vérifiez votre connexion Internet
- Vérifiez que Firebase est accessible
- Videz le cache du navigateur

### Le Service Worker ne s'installe pas
- Ne lancez pas `index.html` directement en `file://` dans le navigateur
- Utilisez un serveur local (`python -m http.server` ou `npx http-server`) ou GitHub Pages
- Utilisez HTTPS en production (GitHub Pages l'utilise par défaut)
- Acceptez l'installation dans les paramètres du navigateur

### Les données ne persistent pas
- Vérifiez les règles de sécurité Firebase
- Assurez-vous que le navigateur accepte le stockage
- Si vous recevez `PERMISSION_DENIED`, ouvrez la console Firebase et autorisez la lecture/écriture pour la base


## 📧 Support

Pour toute question ou problème, ouvrez une issue sur GitHub.

## 📄 Licence

MIT - Libre d'utilisation

## 🙏 Remerciements

- Firebase pour la base de données temps réel
- GitHub Pages pour l'hébergement gratuit
- Google Cloud pour les APIs

---

**Dernière mise à jour**: Juillet 2026
**Version**: 1.0.0
**Statut**: Production Ready ✅
