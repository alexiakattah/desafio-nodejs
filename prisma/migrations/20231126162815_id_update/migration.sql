/*
  Warnings:

  - The primary key for the `Task` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_taskId_fkey";

-- AlterTable
ALTER TABLE "Tag" ALTER COLUMN "taskId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Task" DROP CONSTRAINT "Task_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Task_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Task_id_seq";

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
