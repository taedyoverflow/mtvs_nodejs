/* https://carrotweb.tistory.com/117 참고 */
const { application, request } = require('express');
const express = require('express');
const app = express();

app.use(express.json());

const memberRouter = require('./routes/member-router');

app.use('/member', memberRouter);
// app.use('/menu', require('./middleware/auth-middleware'));
app.use('/menu', require('./middleware/auth-middleware'), (req, res, next) => {
    res.send({ success: true, message: '인증 성공 후 메뉴 목록 조회'});
});

app.listen(8888, () => console.log('listening on 8888...'));