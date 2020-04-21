const {	fw: Framework	}	= require('./fw');
const title	= 'Vue';
async function getPass(){;
		 const result	=	await Framework.findOne({	title	},{_id:false,title:true, votes:true});
console.log(result );
process.exit(0);
}
getPass().catch(e	=> console.error('!!!' + e)	|| process.exit(1));
