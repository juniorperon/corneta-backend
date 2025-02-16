import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateNewChanges1739742887246 implements MigrationInterface {
    name = 'CreateNewChanges1739742887246'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`plays\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`points\` int NOT NULL DEFAULT '0', \`groupId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pairs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`edition\` varchar(100) NOT NULL, \`playerId\` int NOT NULL, \`partnerId\` int NOT NULL, \`groupId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`players\` CHANGE \`points\` \`points\` int NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`players\` CHANGE \`points\` \`points\` int NOT NULL`);
        await queryRunner.query(`DROP TABLE \`pairs\``);
        await queryRunner.query(`DROP TABLE \`plays\``);
    }

}
