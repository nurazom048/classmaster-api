# 📱 TERMUX MOBILE / BUBBLE ONE-CLICK COMMANDS

Copy the text inside any block below to use in Termux.

---

### 1️⃣ MOBILE TERMUX BUBBLE: Auto-Login & Watch Live API Logs
```bash
ssh classmasterserver@api.classmaster.top -t "cd /DATA/AppData/classmaster-api && docker logs -f api-prod; exec bash"
```

---

### 2️⃣ MOBILE TERMUX BUBBLE: Auto-Login & Search User / Error Logs
```bash
ssh classmasterserver@api.classmaster.top -t "cd /DATA/AppData/classmaster-api && docker logs --tail 100 api-prod | grep -i 'nurazom049'; exec bash"
```
