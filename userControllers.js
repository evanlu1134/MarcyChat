exports.login = (req, res) => {
    res.render('users/login', {title: "Login"});
  }
  
  exports.authenticate = (req, res) => {
    User.findOne({email: req.body.email})
    .then(user => {
      if (user.password === req.body.password){
        res.redirect(`/users/${user._id}`);
      } else {
        res.redirect('/users/login');
      }
    })
    .catch(e=> {
      console.log(`Error logging in user: ${e.message}`);
      res.redirect('/users/login');
    });
  }

  exports.authenticate = (req, res) => {
    var user;
    User.findOne({email: req.body.email})
    .then(u => {
      user = u;
      return user.passwordComparison(req.body.password);
    })
    .then(passwordsMatch =>{
      if (passwordsMatch) {
        res.redirect(`/users/${user._id}`);
      } else {
        throw new Error("Passwords do not match");
      }
    })
    .catch(e=> {
      console.log(`Error logging in user: ${e.message}`);
      res.redirect('/users/login');
    });
  }

  exports.validate = (req, res, next) => {
    req.sanitizeBody('email').normalizeEmail({all_lowercase: true, }).trim();
    req.check('email', 'Email is invalid').isEmail();
    // req.check('zipCode', 'Zip code is invalid').notEmpty().isInt().isLength({min: 5,
    //       max: 5}).equals(req.body.zipCode);
    req.check('password', 'Password cannot be empty').notEmpty();
  
    req.getValidationResult().then((errors) => {
  
      if (!errors.isEmpty()) {
        var messages = errors.array().map(e => e.msg);
        req.flash('error', messages.join(' and '));
        res.render('users/new', Object.assign(req.body, {flashMessages: req.flash()}));
        return;
      } else {
        next();
      }
    });
  }