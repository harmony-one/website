### Install
```
npm install -g gatsby-cli
```

### Development
```
$ make install 
$ make dev
$ make build
```

### Config
Development : static/admin/config.yml
```
backend:
  name: gitlab
  repo: username/repo_name
  branch: branch_name
```

Product : static/admin/config.yml
```
backend:
  name: git-gateway
  branch: master
```

### Deploy
<a href="https://app.netlify.com/start/repos"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

### Setting Admin
- Select "Site settings"
- Select "Identity" -> "Enable"
- Select "Registration" => "Invite only"
- Select "Service" => "Enable Git Gateway"

### Invite User
- Select "Menu"
- Select "Indentity" => "Invite User"
