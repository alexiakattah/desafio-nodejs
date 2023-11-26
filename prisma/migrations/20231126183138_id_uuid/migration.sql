/*
  Warnings:

  - The primary key for the `tags` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "tags" DROP CONSTRAINT "tags_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "tags_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "tags_id_seq";
