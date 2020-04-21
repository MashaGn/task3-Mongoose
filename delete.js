const {	fw: Framework	}	= require('./fw');
const title	= 'Ember';
async  function getPass(){
  await Framework.deleteOne({title});
  process.exit(0);
  }
  getPass().catch(e	=> console.error('!!!' + e)	|| process.exit(1));
