# DojoMate Website Commands

---

## 🔐 Droplet SSH Access

```bash
ssh jimmy1768_user@143.198.91.24
```
---

## 📂 Project Directory & Logs

```bash
cd Projects/SourceGrid-Vue
```

---

## 🔧 Git Commands

```bash
git add .
git commit -m "fixed footer, created favicon"
git push

git pull
```

---

## 🚀 Start Vue

```bash
# Local dev
npm run dev
http://localhost:5173

# Rebuild fresh dist
rm -rf dist
npm run build
sudo rsync -av --delete dist/ /var/www/SourceGridLabs/
```

---

## Nginx

```bash

sudo cp ~/Projects/DojoMate-Vue/ops/nginx/sourcegridlabs.conf /etc/nginx/sites-available/sourcegridlabs.conf

# Test & reload
sudo nginx -t
sudo systemctl reload nginx
```

---