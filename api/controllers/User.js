exports.login = (req,res,next) =>{
    const Email = req.body.Email;
    const Password = req.body.Password;
    let loadedUser;
    User.findOne({Email:Email})
    .then(user =>{
    if(!user){
    res.send("User does not exist")
    // const error = new Error('A user with this email could not be found.');
    // error.statusCode = 401;
    // throw error;
    }
    loadedUser = user;
    return bcrypt.compare(Password,user.Password);
    })
    .then(isEqual =>{
    if(!isEqual){
    res.send("wrong password")
    // const error = new Error('wrong password.');
    // error.statusCode = 401;
    // throw error;
    }
    const token = jwt.sign(
    {
    Email: loadedUser.Email,
    userId:loadedUser._id.toString()
    },
    'secret',
    
    )
    res.status(200).json({token: token, userId: loadedUser._id.toString()})
    })
    
    .catch(err => {
    if (!err.statusCode) {
    err.statusCode = 500;
    }
    next(err);
    
    });
    
    }