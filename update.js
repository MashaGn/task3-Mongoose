const {	fw: Framework	}	= require('./fw');
const title	= 'Ember';
async  function getPass(){
 await Framework.updateOne({title}, {votes: 2});
 process.exit(0);
 }
 getPass().catch(e	=> console.error('!!!' + e)	|| process.exit(1));
