module.exports = class Data1686752291608 {
  name = "Data1686752291608";

  async up(db) {
    await db.query(
      `CREATE TABLE "coldkey" ("id" character varying NOT NULL, "balance" numeric NOT NULL, "block_num" integer NOT NULL, CONSTRAINT "PK_35e7af84088161dacd3d18a8c6f" PRIMARY KEY ("id"))`
    );
    await db.query(
      `CREATE TABLE "transfer" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "amount" numeric NOT NULL, "block_num" integer NOT NULL, "timestamp" numeric NOT NULL, "from_id" character varying, "to_id" character varying, CONSTRAINT "PK_fd9ddbdd49a17afcbe014401295" PRIMARY KEY ("id"))`
    );
    await db.query(
      `CREATE INDEX "IDX_76bdfed1a7eb27c6d8ecbb7349" ON "transfer" ("from_id") `
    );
    await db.query(
      `CREATE INDEX "IDX_0751309c66e97eac9ef1149362" ON "transfer" ("to_id") `
    );
    await db.query(
      `CREATE INDEX "IDX_f4007436c1b546ede08a4fd7ab" ON "transfer" ("amount") `
    );
    await db.query(
      `CREATE INDEX "IDX_fa5ceda44f4283b48569248386" ON "transfer" ("block_num") `
    );
    await db.query(
      `CREATE INDEX "IDX_70ff8b624c3118ac3a4862d22c" ON "transfer" ("timestamp") `
    );
    await db.query(
      `CREATE TABLE "hotkey" ("id" character varying NOT NULL, CONSTRAINT "PK_fa9f2115a00e870e446eef21ba8" PRIMARY KEY ("id"))`
    );
    await db.query(
      `CREATE TABLE "burn" ("id" character varying NOT NULL, "block_num" integer NOT NULL, "timestamp" numeric NOT NULL, "amount" numeric NOT NULL, "netuid" integer NOT NULL, CONSTRAINT "PK_dcb4f14ee4534154b31116553f0" PRIMARY KEY ("id"))`
    );
    await db.query(
      `CREATE INDEX "IDX_2f832de2afd3258a78cc99a6b2" ON "burn" ("block_num") `
    );
    await db.query(
      `CREATE INDEX "IDX_51879159280bddc67fbdbd9df9" ON "burn" ("timestamp") `
    );
    await db.query(
      `CREATE INDEX "IDX_0786ab7733f90c81ae112c19ce" ON "burn" ("netuid") `
    );
    await db.query(
      `CREATE TABLE "neuron" ("id" character varying NOT NULL, "coldkey_address" text NOT NULL, "hotkey_address" text NOT NULL, "uid" integer NOT NULL, "stake" numeric NOT NULL, "rank" numeric NOT NULL, "incentive" numeric NOT NULL, "trust" numeric NOT NULL, "consensus" numeric NOT NULL, "dividends" numeric NOT NULL, "emission" numeric NOT NULL, "ip" numeric NOT NULL, "port" integer NOT NULL, "version" integer NOT NULL, "last_updated" numeric NOT NULL, "block_num" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_6ff12824199ac4879e16e1987df" PRIMARY KEY ("id"))`
    );
    await db.query(
      `CREATE TABLE "neuron_registered" ("id" character varying NOT NULL, "block_num" integer NOT NULL, "timestamp" numeric NOT NULL, "netuid" integer NOT NULL, "uid" integer NOT NULL, "hotkey_id" character varying, CONSTRAINT "PK_f7290859fd135f4509675916be8" PRIMARY KEY ("id"))`
    );
    await db.query(
      `CREATE INDEX "IDX_8afb1a0bf141f774d65dd77601" ON "neuron_registered" ("block_num") `
    );
    await db.query(
      `CREATE INDEX "IDX_092ee3a7384878ad72b572a653" ON "neuron_registered" ("timestamp") `
    );
    await db.query(
      `CREATE INDEX "IDX_e0adb9a47870b0d89859fc8d6e" ON "neuron_registered" ("netuid") `
    );
    await db.query(
      `CREATE INDEX "IDX_f44441313dc121a995f851f659" ON "neuron_registered" ("hotkey_id") `
    );
    await db.query(
      `ALTER TABLE "transfer" ADD CONSTRAINT "FK_76bdfed1a7eb27c6d8ecbb73496" FOREIGN KEY ("from_id") REFERENCES "coldkey"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await db.query(
      `ALTER TABLE "transfer" ADD CONSTRAINT "FK_0751309c66e97eac9ef11493623" FOREIGN KEY ("to_id") REFERENCES "coldkey"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await db.query(
      `ALTER TABLE "neuron_registered" ADD CONSTRAINT "FK_f44441313dc121a995f851f6595" FOREIGN KEY ("hotkey_id") REFERENCES "hotkey"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  async down(db) {
    await db.query(`DROP TABLE "coldkey"`);
    await db.query(`DROP TABLE "transfer"`);
    await db.query(`DROP INDEX "public"."IDX_76bdfed1a7eb27c6d8ecbb7349"`);
    await db.query(`DROP INDEX "public"."IDX_0751309c66e97eac9ef1149362"`);
    await db.query(`DROP INDEX "public"."IDX_f4007436c1b546ede08a4fd7ab"`);
    await db.query(`DROP INDEX "public"."IDX_fa5ceda44f4283b48569248386"`);
    await db.query(`DROP INDEX "public"."IDX_70ff8b624c3118ac3a4862d22c"`);
    await db.query(`DROP TABLE "hotkey"`);
    await db.query(`DROP TABLE "burn"`);
    await db.query(`DROP INDEX "public"."IDX_2f832de2afd3258a78cc99a6b2"`);
    await db.query(`DROP INDEX "public"."IDX_51879159280bddc67fbdbd9df9"`);
    await db.query(`DROP INDEX "public"."IDX_0786ab7733f90c81ae112c19ce"`);
    await db.query(`DROP TABLE "neuron"`);
    await db.query(`DROP TABLE "neuron_registered"`);
    await db.query(`DROP INDEX "public"."IDX_8afb1a0bf141f774d65dd77601"`);
    await db.query(`DROP INDEX "public"."IDX_092ee3a7384878ad72b572a653"`);
    await db.query(`DROP INDEX "public"."IDX_e0adb9a47870b0d89859fc8d6e"`);
    await db.query(`DROP INDEX "public"."IDX_f44441313dc121a995f851f659"`);
    await db.query(
      `ALTER TABLE "transfer" DROP CONSTRAINT "FK_76bdfed1a7eb27c6d8ecbb73496"`
    );
    await db.query(
      `ALTER TABLE "transfer" DROP CONSTRAINT "FK_0751309c66e97eac9ef11493623"`
    );
    await db.query(
      `ALTER TABLE "neuron_registered" DROP CONSTRAINT "FK_f44441313dc121a995f851f6595"`
    );
  }
};
