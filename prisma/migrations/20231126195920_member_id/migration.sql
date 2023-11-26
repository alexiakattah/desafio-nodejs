-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "membersId" TEXT[];

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "projectId" TEXT;
