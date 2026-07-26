# 🚀 Guide de Déploiement sur GitHub Pages

## Étapes pour déployer Icebox

### 1️⃣ Créer un compte GitHub (si vous n'en avez pas)
- Allez sur [github.com](https://github.com)
- Inscrivez-vous avec un email valide

### 2️⃣ Créer un nouveau repository

#### Option A: Via le site GitHub
1. Cliquez sur le `+` en haut à droite
2. Sélectionnez "New repository"
3. Nommez-le `icebox`
4. Sélectionnez "Public" pour que le site soit accessible
5. Cliquez "Create repository"

#### Option B: Utiliser le CLI GitHub
```bash
gh repo create icebox --public --source=. --remote=origin --push
```

### 3️⃣ Initialiser Git localement

```bash
# Dans le dossier icebox
git init
git add .
git commit -m "🎉 Initial commit - Icebox PWA"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/icebox.git
git push -u origin main
```

### 4️⃣ Activer GitHub Pages

1. Allez sur votre repository GitHub
2. Cliquez sur **Settings**
3. Dans le menu de gauche, sélectionnez **Pages**
4. Sous "Build and deployment":
   - **Source**: Sélectionnez "Deploy from a branch"
   - **Branch**: Sélectionnez "main" et le dossier "/ (root)"
5. Cliquez **Save**

### 5️⃣ Attendez le déploiement

- GitHub Pages va construire et déployer votre site automatiquement
- Vous recevrez un email quand c'est terminé
- Le site sera accessible à: `https://VOTRE_USERNAME.github.io/icebox/`

## ✅ Vérifier que tout fonctionne

1. Accédez à votre URL: `https://VOTRE_USERNAME.github.io/icebox/`
2. Testez les fonctionnalités:
   - ✅ Ajouter une glace
   - ✅ Modifier la quantité
   - ✅ Supprimer une glace
   - ✅ Synchronisation Firebase
   - ✅ Installation comme PWA

## 🔧 Mises à jour futures

Pour mettre à jour votre site:

```bash
# Apportez vos modifications locales
git add .
git commit -m "✨ Description de votre changement"
git push origin main
```

GitHub Pages sera automatiquement mis à jour!

## 🆘 Troubleshooting

### Le site n'apparaît pas après quelques minutes
- Videz le cache navigateur (Ctrl+Shift+Del)
- Attendez 5-10 minutes supplémentaires
- Vérifiez que la branche "main" est sélectionnée dans Pages settings

### Firebase n'enregistre pas les données
- Ouvrez la console (F12) et vérifiez les erreurs
- Assurez-vous que vous êtes en HTTPS (GitHub Pages le fait par défaut)
- Vérifiez les règles de sécurité Firebase

### L'URL est incorrecte
- Pour un repo personnel: `https://username.github.io/icebox/`
- Pour une org: `https://nom-org.github.io/icebox/`
- Assurez-vous que le nom du repo est bien `icebox`

### Le service worker ne s'installe pas
- Utilisez HTTPS (automatique sur GitHub Pages) ✓
- Vérifiez que le fichier `manifest.json` est present ✓
- Essayez un autre navigateur (Chrome, Edge recommandés)

## 📊 Vérifier les déploiements

1. Allez dans votre repository
2. Cliquez sur l'onglet "Actions"
3. Vous verrez l'historique de tous les déploiements

## 🔐 Sécurité Firebase

Avant de passer en production, configurez les règles Firebase:

1. Allez sur [Firebase Console](https://console.firebase.google.com)
2. Sélectionnez le projet "icebox-2026"
3. Allez dans "Realtime Database"
4. Cliquez sur l'onglet "Rules"
5. Remplacez par:

```json
{
  "rules": {
    "icecreams": {
      ".read": true,
      ".write": true,
      "$uid": {
        ".validate": "newData.hasChildren(['name', 'quantity'])"
      }
    }
  }
}
```

Cette règle permet à tous de lire/écrire mais nécessite les champs requis.

## 🎉 C'est tout!

Votre PWA Icebox est maintenant en ligne et prête à l'emploi! 

- 🌐 Partagez l'URL avec vos amis
- 📱 Installez-la comme une app sur votre téléphone
- 🔄 Tout est synchronisé en temps réel

**Lien**: `https://VOTRE_USERNAME.github.io/icebox/`

---

**Besoin d'aide?** Consultez le [README.md](README.md) ou ouvrez une issue sur GitHub!
