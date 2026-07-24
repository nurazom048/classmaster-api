# 💾 Database Backup & Restore Guide

This folder contains helper scripts and documentation for managing database backups and restoring PostgreSQL data in ClassMaster API.

---

## 📂 Backup Location
All database backups are automatically saved into:
`classmaster_data/backups/`

---

## 🚀 How to Run Database Restore

### 1. Restore Latest Backup Automatically
Runs the restore script and automatically selects the most recent `.json` backup file from `classmaster_data/backups/`:

```bash
npm run restore
```

### 2. Restore Specific Backup File
Specify the path to a custom JSON backup file:

```bash
npm run restore classmaster_data/backups/pg_dup_24_july_26_2:30_pm.json
```

---

## ⚙️ How Backup Works (`services/backup/backup.service.ts`)
- Scheduled via `node-cron` to automatically capture PostgreSQL schema and data.
- Exports tables into JSON format (with `BigInt` fix).
- Sends backup notifications & attachments directly to Telegram.
- Automatically cleans up local files older than 5 days.
