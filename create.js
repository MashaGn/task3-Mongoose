const {	fw: Framework	}	= require('./fw');
  async  function getPass() {
    await Framework.create([
      {title: 'Angular',votes: 0, id: 0},
      {title: 'React', votes: 3, id: 1},
      {title: 'Vue', votes: 2, id: 2},
      {title: 'Ember', votes: 4, id: 3}
    ]);
process.exit(0);
}
getPass().catch(e	=> console.error('!!!' + e)	|| process.exit(1));
