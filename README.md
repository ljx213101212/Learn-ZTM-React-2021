## Notes for Learning ZTM-React Course

### Projects

`https://ljx213101212.github.io/Learn-ZTM-React-2021/monsters-rolodex/`

### Key words

```
jsx
key - reconciliation
webpack - jsx -> js
arrow function -> this ->  JS execution context
declarative
```

### Key Concepts

```
1. Decide components.  cut big components(root node) into small components(leaf modes)
2. Decide where does state and props locate. (lift up) -> prop drilling -> sol: Context API & Redux Store
3. What changes when component state changes.
```

### Todo (ToolChain)

- [ ] Use NVM
- [x] Use React Developer Tools (chrome extension)
- [x] [Use SSH Key (Github)](https://docs.github.com/en/enterprise/2.15/user/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [x] Update package version (npm/yarn)
  - For dependency security issues
  ```
  npm audit fix [good]
  yarn audit (can show but cannot fix, need manually fix now: 7/4/2021)
  https://javascriptbit.com/yarn-audit-fix-security-issues/
  ```
- [x] Use Rendering (chrome devtool) - Paint flashing

### Todo (Javascript)

- [x] [Use bind](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)

### Todo (React)

- [ ] [reconciliation](https://reactjs.org/docs/reconciliation.html#recursing-on-children)
- [ ] Familiarize the usage of prop.children
- [ ] [SyntheticEvent](https://reactjs.org/docs/events.html)
- [ ] [Virtual DOM]()

### Todo (CSS)

#### grid

- [grid concept](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [grid example](https://gridbyexample.com/what/)

### CI/CD

#### video

(bitbucket)

```
https://www.youtube.com/watch?v=AXlN-f6Uk64&list=PLzvRQMJ9HDiSaisKr7OnM4Fl7JXCDDcmt&index=2
```

(github)

```
https://www.youtube.com/watch?v=Z3S2gMBUkBo
https://plugins.jenkins.io/github/
https://ci.example.com/jenkins/github-webhook/
```

#### digital ocean

```

https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04
https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-20-04#installing-specific-versions-of-openjdk
https://www.digitalocean.com/community/tutorials/how-to-install-jenkins-on-ubuntu-20-04


https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands
```

### Question

1. Why NPM ? or why Yarn?
