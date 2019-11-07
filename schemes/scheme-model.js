const db = require('../data/dbConfig');

const find = () => {
  return db('schemes');
};

const findById = id => {
  return db('schemes')
    .where('id', '=', id)
    .first();
};

const findSteps = id => {
  return db('schemes as s')
    .join('steps as t', 't.scheme_id', 's.id')
    .select('t.step_number', 't.instructions', 's.scheme_name ')
    .orderBy('t.step_number', 'asc')
    .where('s.id', '=', id);
};

const addScheme = async body => {
  let [id] = await db('schemes').insert(body);
  return findById(id);
};

const addStep = async (step, scheme_id) => {
  await db('steps').insert({ ...step, scheme_id });
  return findSteps(scheme_id);
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
  findSteps,
  addScheme,
  addStep,
  update,
  remove
};
