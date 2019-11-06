const db = require('../data/dbConfig');

const find = () => {
  return db('schemes');
};

const findById = id => {
  return db('schemes').where('id', '=', id);
};

const findBySteps = id => {
  return db('schemes')
    .join('steps', 'schemes.id', 'steps.scheme_id')
    .where(id, '=', id);
};

const addScheme = async body => {
  let [id] = await db('schemes').insert(body);
  return findById(id);
};

const update = async (changes, id) => {
  const result = await db('schemes')
    .where('id', '=', id)
    .update(changes);
  return result > 0 ? { id, ...body } : null;
};

const remove = id => {
  return db('schemes')
    .where('id', '=', id)
    .delete();
};

module.exports = {
  find,
  findById,
  findBySteps,
  addScheme,
  update,
  remove
};
