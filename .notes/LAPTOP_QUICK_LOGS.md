# 💻 LAPTOP / PC TERMINAL QUICK LOG COMMANDS

---

## 🔑 STEP 1: SSH Login into Server from Laptop / PC Terminal

Open CMD, PowerShell, or Git Bash on your Laptop and copy-paste:

```bash
ssh classmasterserver@api.classmaster.top
```

---

## ⚡ STEP 2: One-Click Login & Direct Log View Commands

### 1️⃣ PC/Laptop: Direct SSH Login + Open Live API Logs (1-Click)
```bash
ssh classmasterserver@api.classmaster.top -t "cd /DATA/AppData/classmaster-api && docker logs -f api-prod; exec bash"
```

---

### 2️⃣ PC/Laptop: Direct SSH Login + Search Specific User Log (1-Click)
```bash
ssh classmasterserver@api.classmaster.top -t "cd /DATA/AppData/classmaster-api && docker logs --tail 100 api-prod | grep -i 'nurazom049'; exec bash"
```

---

### 3️⃣ If Already Logged In: Watch API Live Logs
```bash
cd /DATA/AppData/classmaster-api && docker logs -f api-prod
```
