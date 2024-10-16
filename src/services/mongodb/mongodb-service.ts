import { Collection, Db } from "mongodb";
import client from "./mongodb-client";

export class MongoDb {
  private static dbName: string = "aula_diversa";
  private static isConnected = false;

  // Connect to the database if needed
  private static async connect() {
    if (!this.isConnected) {
      await client.connect();
      this.isConnected = true;
    }
  }

  // Get the database
  private static async getDb(): Promise<Db> {
    await this.connect();
    return client.db(this.dbName);
  }

  // Disconnect from the database
  public static async disconnect() {
    if (this.isConnected) {
      await client.close();
      this.isConnected = false;
    }
  }

  // Perform a database operation
  private static async performDbOperation<T>(
    collection: string,
    operation: (dbCollection: Collection) => Promise<T>
  ): Promise<T> {
    try {
      const db = await this.getDb();
      const dbCollection = db.collection(collection);
      return await operation(dbCollection);
    } catch (error) {
      console.error("Error en la operación de la base de datos:", error);
      throw error;
    }
  }

  // Get all documents from a collection
  public static async getAllDocuments(collection: string) {
    return this.performDbOperation(collection, async (dbCollection) =>
      dbCollection.find({}).toArray()
    );
  }

  // Get a single document from a collection
  public static async getSingleDocument(
    collection: string,
    query: Record<string, unknown>
  ) {
    return this.performDbOperation(collection, (dbCollection) =>
      dbCollection.findOne(query)
    );
  }

  // Insert a single document into a collection
  public static async insertSingleDocument(
    collection: string,
    data: Record<string, unknown>
  ) {
    return this.performDbOperation(collection, (dbCollection) =>
      dbCollection.insertOne(data)
    );
  }
}
