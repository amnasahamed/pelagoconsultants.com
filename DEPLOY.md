# Deployment Guide for Pelago Consultants

This guide documents the process to deploy the Next.js application to the production server (**pelagoconsultants.com**).

## Prerequisites
- **Node.js** installed locally.
- **SSH Key** configured and added to the hosting panel (already done on this machine).
- **Access** to the project directory.

## Source Control & Deployment Workflow

### 1. Push Source Code (GitHub)
The source code is hosted on GitHub. This is for collaboration and version history.
```bash
git push origin main
```

### 2. Push to DirectAdmin (Backup/Mirror)
We also keep a copy of the git repository on the hosting server.
```bash
git push hosting main
```

### 3. Deploy to Live Site
This moves the actual files to the public web folder so visitors can see the site.
**Command:**
```bash
npm run build && scp -P 22999 -r out/* eydgwoxm@titan.herosite.pro:domains/pelagoconsultants.com/public_html/
```

---

## Detailed Steps

### 1. Build the Project
Generates the static `out` folder with the latest code.
```bash
npm run build
```

### 2. Upload to Server
Uses `scp` (Secure Copy) to transfer files to the live server.
- **Port:** `22999`
- **User:** `eydgwoxm`
- **Host:** `titan.herosite.pro`
- **Destination:** `domains/pelagoconsultants.com/public_html/`

```bash
scp -P 22999 -r out/* eydgwoxm@titan.herosite.pro:domains/pelagoconsultants.com/public_html/
```

### 3. Verify
Visit [https://pelagoconsultants.com](https://pelagoconsultants.com) to see the changes.

## Troubleshooting
- **Permission Denied?** Ensure your SSH key is added to the hosting control panel under "SSH Keys".
- **Connection Refused?** Verify the port is still `22999`.
- **Changes not showing?** Clear your browser cache or check if the build command completed successfully.
