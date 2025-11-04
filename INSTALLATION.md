# Guide d'Installation - AutoClass.it

## Prérequis
- **Node.js** version 18+ : https://nodejs.org/
- **npm** ou **pnpm** (inclus avec Node.js)
- Un éditeur de code comme **VS Code** : https://code.visualstudio.com/

## Étape 1: Télécharger et extraire le projet

1. Cliquez sur le bouton **3 points** (⋮) en haut à droite du projet v0
2. Sélectionnez **"Download ZIP"**
3. Extrayez le fichier ZIP dans un dossier (ex: `C:\Users\YourName\AutoClass.it`)
4. **⚠️ IMPORTANT**: Supprimez le fichier `pnpm-lock.yaml` si présent (garder seulement `package-lock.json`)

## Étape 2: Ouvrir le projet

1. Ouvrez **VS Code**
2. Cliquez sur **File > Open Folder**
3. Sélectionnez le dossier du projet
4. Ouvrez le **Terminal intégré** : `Ctrl + `` (backtick)

## Étape 3: Nettoyer les dépendances

\`\`\`bash
# Supprimez le dossier node_modules (s'il existe)
rmdir /s node_modules

# Sur Mac/Linux:
# rm -rf node_modules
\`\`\`

## Étape 4: Installer les dépendances

\`\`\`bash
npm install
\`\`\`

**Attendez que l'installation se termine (2-3 minutes)**

Si vous recevez une erreur de dépendances en conflit, utilisez:
\`\`\`bash
npm install --legacy-peer-deps
\`\`\`

## Étape 5: Lancer le serveur de développement

\`\`\`bash
npm run dev
\`\`\`

Vous devriez voir:
\`\`\`
✓ Ready in 2.5s
\`\`\`

## Étape 6: Accéder au site

Ouvrez votre navigateur et allez à: **http://localhost:3000**

---

## Dépannage

### Erreur: "Module not found: 'lucide-react'"
- Supprimez `node_modules` et `package-lock.json`
- Relancez `npm install`

### Erreur: "Port 3000 already in use"
- Le port 3000 est déjà utilisé. Utilisez:
\`\`\`bash
npm run dev -- -p 3001
\`\`\`
Puis allez à: http://localhost:3001

### Erreur: "ESLint configuration"
- Cela a été corrigé. Relancez `npm install`

### Multiple lockfiles warning
- ✓ Supprimez le fichier `pnpm-lock.yaml` du dossier racine

---

## Commandes principales

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une build pour la production
- `npm start` - Lance la version build en production

## Support

Si vous rencontrez d'autres problèmes:
1. Assurez-vous que Node.js est correctement installé: `node --version`
2. Supprimez `node_modules` et `package-lock.json`, puis relancez `npm install`
3. Redémarrez VS Code

Bon développement! 🚀
