# Termux Quick Copy-Paste Command Guide 📱⚡

Easily copy and paste whole multi-line blocks into Termux.

---

## ⚡ PART 1: Full One-Click Login & Live API Log Monitor

Copy the entire code block below and paste it into Termux:

```bash
cd /DATA/AppData/classmaster-api && docker logs -f api-prod
```

---

## ⚡ PART 2: Full One-Click Login & Check Last 100 Logs + Search User

Copy the entire code block below and paste it into Termux:

```bash
cd /DATA/AppData/classmaster-api && docker logs --tail 100 api-prod | grep -i "nurazom049"
```

---

## 📋 OPTIONAL CHEATSHEET BLOCKS

### Option A: Check All Container Statuses
```bash
cd /DATA/AppData/classmaster-api && docker ps
```

### Option B: Watch Database Live Logs
```bash
cd /DATA/AppData/classmaster-api && docker logs -f postgres-db-prod
```

### Option C: Restart API Container
```bash
cd /DATA/AppData/classmaster-api && docker restart api-prod
```
