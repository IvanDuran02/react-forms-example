/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

import Item from "../../../models/itemModels";
import connectMongo from "../../../utils/connectMongo";

export default async function addItem(req, res) {
  await connectMongo();

  console.log("CONNECTED TO DATABASE");

  console.log("CREATING DOCUMENT");

  const item = await Item.create(req.body);

  console.log("CREATED DOCUMENT");

  res.json({ item });
}

// validate if email exists...
