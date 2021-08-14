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

### ToolChain

- [ ] Use NVM
- [x] Use React Developer Tools (chrome extension)
- [x] [Use SSH Key (Github)](https://docs.github.com/en/enterprise/2.15/user/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [x] Update package version (npm/yarn)
- [x] [Dingbats]([Dingbats](https://www.w3schools.com/charsets/ref_utf_dingbats.asp))
  - For dependency security issues
  ```
  npm audit fix [good]
  yarn audit (can show but cannot fix, need manually fix now: 7/4/2021)
  https://javascriptbit.com/yarn-audit-fix-security-issues/
  ```
- [x] Use Rendering (chrome devtool) - Paint flashing
- [ ] Eslint

### Javascript

- [x] [Use bind](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)
- [ ] [Understand Promise](http://anata.me/2020/05/07/Promise%E7%AE%80%E6%98%93%E5%AE%9E%E7%8E%B0/)
- [ ] [Understand generator](https://www.ruanyifeng.com/blog/2015/05/co.html)

### Typescript

- [x] [React Typescript CheatSheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/)
- [x] [custom Props](https://stackoverflow.com/questions/51523211/react-routing-using-routecomponentprops-and-custom-props)

### React

- [ ] [reconciliation](https://reactjs.org/docs/reconciliation.html#recursing-on-children)
- [ ] Familiarize the usage of prop.children
- [ ] [SyntheticEvent](https://reactjs.org/docs/events.html)
- [ ] [Virtual DOM]()
- [ ] [SVG loader](https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files)

### CSS

- [ ] [card](https://codepen.io/AllThingsSmitty/pen/pNLVWm)  
- [ ] [styled-components](https://github.com/styled-components/styled-components)  

```
use header and custom-button component to experience.
Key Mindset:  Don't judge things uniformly, need to thinking about the tradeoff,  in which case its good to use styled-components? which case it is not worth the effort?
```

#### grid

- [grid concept](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [grid example](https://gridbyexample.com/what/)


### Stripe API 

#### test credit cards  
https://stripe.com/docs/testing#cards  

#### API KEYs for test  

```
Publishable	
pk_test_GvF3BSyx8RSXMK5yAFhqEd3H

Secret	
sk_test_Ou1w6LVt3zmVipDVJsvMeQsc
```

### Security   

#### Gitguardian  
https://www.gitguardian.com/   

### CI/CD (Jenkins)
 
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

#### email notification

https://www.arclab.com/en/kb/email/list-of-smtp-and-imap-servers-mailserver-list.html

outgoing: smtp.gmail.com SSL 465
incoming: imap.gmail.com SSL 993

prepare two gmails A (sending) and B (receving)
Access for less secure apps - Turn on for A which used for sending

remembr in "Extended E-mail Notification"

```
tick use SSL
click Advanced... and configure your sending gmail username and password.
```







#### Heroku  

https://github.com/ljx213101212/ztm-react-heroku-2021  

Note: Don't forget to authorize heroku domain in firebase authentication console. -> `https://ztm-react.herokuapp.com/`

### Question

1. Why NPM ? or why Yarn?
