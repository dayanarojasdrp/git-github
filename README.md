# Advanced Git & GitHub Practice Lab

This repository is a complete hands-on lab designed to practice real-world Git, GitHub, DevOps, and CI/CD workflows.  
It includes advanced Git commands, GitHub Actions automation, Docker image publishing, feature flags, and environment-based configuration.

---

## Project Overview

This lab simulates the workflow used in modern development teams.  
It covers:

- Advanced Git operations  
- Secure authentication using HTTPS + Personal Access Token (PAT)  
- GitHub Actions CI/CD pipelines  
- Docker image creation and publishing  
- GitHub Container Registry (GHCR) usage  
- Environments and secrets  
- Feature flags  
- Static assets structure  
- Backup artifacts in CI  

---

## Git Features Practiced

### **1. Clone with HTTPS + PAT**
Authenticated cloning using a Personal Access Token:

```bash
git clone https://github.com/<user>/<repo>.git
```

---

### **2. Git Stash**
Store and restore uncommitted changes:

```bash
git stash
git stash pop
```

---

### **3. Git Reset**
Soft and hard resets for history manipulation:

```bash
git reset --soft HEAD~1
git reset --hard HEAD~1
```

---

### **4. Git Revert**
Undo a commit without rewriting history:

```bash
git revert <commit>
```

---

### **5. Git Rebase (interactive)**
Rewrite commit history cleanly:

```bash
git rebase -i HEAD~3
```

---

### **6. Git Cherry-pick**
Apply a commit from another branch:

```bash
git cherry-pick <commit>
```

---

##  GitHub Environments & Secrets

Three environments were created:

- **dev**
- **staging**
- **prod**

Each environment contains its own secrets, such as:

- `API_KEY`
- `DB_PASSWORD`

Workflows are restricted by environment rules and approvals.

---

##  CI/CD Pipeline (GitHub Actions)

The repository includes a professional CI pipeline that performs:

###  Linting  
Runs ESLint to validate code quality:

```yaml
- name: Run linters
  run: npm run lint
```

###  Backup Artifact  
Creates a simulated backup and uploads it:

```yaml
- name: Create backup
  run: |
    mkdir -p uploads
    echo "Test file" > uploads/example.txt
    tar -czf backup.tar.gz uploads/

- name: Upload backup artifact
  uses: actions/upload-artifact@v3
  with:
    name: backup-uploads
    path: backup.tar.gz
```

### Feature Flags  
Feature toggles controlled via environment variables:

```yaml
env:
  FEATURE_NEW_UI: "true"
```

In the app:

```js
if (process.env.FEATURE_NEW_UI === "true") {
  console.log("New UI enabled");
} else {
  console.log("Classic UI");
}
```

---

##  Docker & GitHub Packages

### **Dockerfile**
A Node-based Dockerfile is included:

```dockerfile
FROM node:20
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
```

### **Build the image**

```bash
docker build -t my-app .
```

### **Publish to GHCR**

```bash
docker tag my-app ghcr.io/<user>/my-app:latest
docker push ghcr.io/<user>/my-app:latest
```

---

## Static Assets Structure

The project includes a professional `/assets` folder:

```
assets/
 ├── img/
 ├── css/
 └── js/
```

Used to demonstrate handling of static files.

---

## Purpose of This Repository

This repository was created to:

- Practice real-world Git workflows  
- Understand GitHub Actions CI/CD  
- Learn Docker image creation and publishing  
- Work with GitHub Environments and Secrets  
- Implement feature flags  
- Build a portfolio-ready DevOps project  

It serves as a complete learning and demonstration project for Junior+ DevOps and Cloud Engineering roles.

---

##  Technologies Used

- Git & GitHub  
- GitHub Actions  
- Docker  
- GitHub Container Registry (GHCR)  
- Node.js  
- ESLint  
- CI/CD best practices  

---

##  Status

This project is complete and serves as a reference for advanced Git and DevOps workflows.
