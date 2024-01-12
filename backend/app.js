const express = require("express");
const app = express();

const Cors = require("cors");
const bodyParser = require('body-parser');
const listRouter = require('./routes/lists');
const taskRouter = require('./routes/tasks')
const userRouter = require('./routes/users')
const loginRouter = require('./routes/login')
const createUserRoute = require('./routes/createUser')
const loginMasterRoute = require('./routes/master')


const PORT = process.env.PORT || 3001;

app.use(Cors());
app.use(express.json());
app.use(bodyParser.json());

const user = require('./authentication').user;
const pass = require('./authentication').pass;
const SECRET = require('./authentication').SECRET; 

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if(authHeader) {
    const token = authHeader.split(' ')[1];
    console.log(token)

    // TODO: treat exception for missing token and malformed tokens
    jwt.verify(token, SECRET, (err, user) => {
      console.log(err)
      if(err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401); 
  }
}



app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if(username === user && password === pass) {
    const token = jwt.sign({ username: username }, SECRET);

    res.json({ token });

  } else {
    res.json({"msg": "unauthorized"});

  }
  },
);

app.post("/sign-in", controllersUser.createUser);



app.use(authenticateJWT);

app.get("/sign-in", controllersUser.getAllUsers);

app.delete("/sign-in/:id", controllersUser.deleteUser);


const authenticateUserMaster = require('./auth/authMaster').authenticateUserMaster
const authenticateUsers = require('./auth/authUser').authenticateUsers

app.use("/", loginMasterRoute)

app.use("/sign-up", createUserRoute);

app.use('/login', loginRouter);

app.use('/lists', authenticateUsers, listRouter);

app.use('/tasks', authenticateUsers, taskRouter)

app.use('/sign-in', authenticateUserMaster , userRouter);


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
