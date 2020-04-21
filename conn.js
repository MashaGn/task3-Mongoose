const m	= require('mongoose');
m.set('debug',	true);
async	function getConn(){
await	m.connect('mongodb://*****:*****@5.101.51.30/frameworks',	{	useNewUrlParser: true, useUnifiedTopology: true });
}
getConn().catch(e => console.error('Соединиться	с	БД	не	удалось.	На	этом	всё.'));
module.exports = m;
