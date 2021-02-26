import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSurveys1614358243824 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable{
            new Table ({
                name: "surveys",
                columns: [
                    {
                        name: "id",
                    }
                ],
            });
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
