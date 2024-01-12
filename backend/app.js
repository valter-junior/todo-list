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
