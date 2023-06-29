import * as express from "express";
import { collections } from "./database";

export const enquiryRouter = express.Router();
enquiryRouter.use(express.json());

enquiryRouter.post("/", async (req, res) => {
  try {
    const enquiry = req.body;
    const result = await collections.enquiries.insertOne(enquiry);

    if (result.acknowledged) {
  res.status(201).set('Content-Type', 'application/json').send(JSON.stringify({message: `Created a new product`}));
} else {
  res.status(500).set('Content-Type', 'application/json').send(JSON.stringify({error: "Failed to create a new product."}));
}} catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});