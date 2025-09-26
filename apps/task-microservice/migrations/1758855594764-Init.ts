import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1758855594764 implements MigrationInterface {
    name = 'Init1758855594764'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying, "deadline" TIMESTAMP NOT NULL, "status" "public"."task_status_enum" NOT NULL DEFAULT 'POR HACER', "user" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "updated_at" TIMESTAMP, "create_at" TIMESTAMP NOT NULL DEFAULT '"2025-09-26T03:00:02.621Z"', CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "task"`);
    }

}
