import * as mongodb from "mongodb";
import { Product } from "./product";
import { Enquiry } from "./enquiry";
 
export const collections: {
   products?: mongodb.Collection<Product>;
   enquiries?: mongodb.Collection<Enquiry>;
} = {};
 
export async function connectToDatabase(uri: string) {
   const client = new mongodb.MongoClient(uri);
   await client.connect();
 
   const db = client.db("HomeAutomationSystem");
   await applySchemaValidation(db);
 
   const productsCollection = db.collection<Product>("products");
   collections.products = productsCollection;

   // Add a new collection for enquiries
    const enquiriesCollection = db.collection<Enquiry>('enquiries');
    collections.enquiries = enquiriesCollection;
}
 
// Update our existing collection with JSON schema validation so we know our documents will always match the shape of our Product model, even if added elsewhere.
// For more information about schema validation, see this blog series: https://www.mongodb.com/blog/post/json-schema-validation--locking-down-your-model-the-smart-way
async function applySchemaValidation(db: mongodb.Db) {
   const jsonSchema = {
       $jsonSchema: {
           bsonType: "object",
           required: ["id", "name", "city", "state", "labour", "description"],
           additionalProperties: false,
           properties: {
               id: {
                   bsonType: "int",
                   description: "'id' is required and is an integer",
               },
               name: {
                   bsonType: "string",
                   description: "'name' is required and is a string",
               },
               city: {
                   bsonType: "string",
                   description: "'city' is required and is a string",
               },
               state: {
                   bsonType: "string",
                   description: "'state' is required and is a string",
               },
               labour: {
                   bsonType: "int",
                   description: "'labour' is required and is an integer",
               },
               description: {
                   bsonType: "string",
                   description: "'description' is required and is a string",
               },
           },
       },
   };
 
   // Try applying the modification to the collection, if the collection doesn't exist, create it
  await db.command({
       collMod: "products",
       validator: jsonSchema
   }).catch(async (error: mongodb.MongoServerError) => {
       if (error.codeName === 'NamespaceNotFound') {
           await db.createCollection("products", {validator: jsonSchema});
       }
   });

   const enquirySchema = {
    $jsonSchema: {
      bsonType: 'object',
      required: ['firstName', 'lastName', 'email', 'postcode'],
      additionalProperties: false,
      properties: {
        firstName: { bsonType: 'string', description: "'firstName' is required and is a string" },
        lastName: { bsonType: 'string', description: "'lastName' is required and is a string" },
        email: { bsonType: 'string', description: "'email' is required and is a string" },
        postcode: { bsonType: 'string', description: "'postcode' is required and is a string" }
      }
    }
  };

  await db.command({
    collMod: 'enquiries',
    validator: enquirySchema
  }).catch(async (error) => {
    if (error.codeName === 'NamespaceNotFound') {
      await db.createCollection('enquiries', { validator: enquirySchema });
    }
  });
}
