import { MigrationInterface, QueryRunner } from "typeorm";

export class DataSource.ts1737679533063 implements MigrationInterface {
    name = 'DataSource.ts1737679533063'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" numeric(5,2) NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
