module.exports = class Data1688485247576 {
    name = 'Data1688485247576'

    async up(db) {
        await db.query(`CREATE TABLE "difficulty" ("id" character varying NOT NULL, "block_num" integer NOT NULL, "timestamp" numeric NOT NULL, "amount" numeric NOT NULL, "netuid" integer NOT NULL, CONSTRAINT "PK_336e49544a076db0d9b713f7255" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e2fb9b471f752f380ddfd68c0c" ON "difficulty" ("block_num") `)
        await db.query(`CREATE INDEX "IDX_83810d095aa4a26d5b336e4e3d" ON "difficulty" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_348f4f9c7980b5c70177dfcd01" ON "difficulty" ("netuid") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "difficulty"`)
        await db.query(`DROP INDEX "public"."IDX_e2fb9b471f752f380ddfd68c0c"`)
        await db.query(`DROP INDEX "public"."IDX_83810d095aa4a26d5b336e4e3d"`)
        await db.query(`DROP INDEX "public"."IDX_348f4f9c7980b5c70177dfcd01"`)
    }
}
