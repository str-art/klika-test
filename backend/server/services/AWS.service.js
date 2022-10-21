const Service = require("../../lib/Service");
const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");

class AwsSerivce extends Service {
  constructor(database) {
    const name = "AwsService";
    super(database, name);

    this.bucket = new S3Client({
      credentials: {
        accessKeyId: process.env.S3_KEY,
        secretAccessKey: process.env.S3_SECRET,
      },
      endpoint: "https://storage.yandexcloud.net",
      region: "ru-central1",
    });

    App.on("deleteFile", this.delete.bind(this));
  }

  async upload(file, name) {
    const id = await this.database.getNextUUID();
    await this.bucket.send(
      new PutObjectCommand({
        Bucket: process.env.S3_BUCKET,
        Key: id,
        Body: file,
      })
    );
    await this.database.entities.File.insert({ id, name });
    return { id, name };
  }

  async download(id) {
    const file = await this.bucket.send(
      new GetObjectCommand({ Bucket: process.env.S3_BUCKET, Key: id })
    );
    return file;
  }

  async delete(id) {
    await this.database.entities.File.delete(id);
    await this.bucket.send(
      new DeleteObjectCommand({ Bucket: process.env.S3_BUCKET, Key: id })
    );
  }
}

module.exports = AwsSerivce;
