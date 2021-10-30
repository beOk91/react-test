import Sche from '../../models/sche';

export const list = async (ctx) => {
  try {
    const sches = await Sche.find().exec();
    ctx.body = sches;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const write = async (ctx) => {
  const { body, username } = ctx.request.body;
  const sche = new Sche({
    body,
    username,
  });
  try {
    await sche.save();
    ctx.body = sche;
  } catch (e) {
    ctx.throw(500, e);
  }
};
