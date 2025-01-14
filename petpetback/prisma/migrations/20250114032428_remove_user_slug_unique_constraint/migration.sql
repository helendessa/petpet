-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_userSlug_fkey`;

-- DropIndex
DROP INDEX `Post_userSlug_key` ON `Post`;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_userSlug_fkey` FOREIGN KEY (`userSlug`) REFERENCES `User`(`slug`) ON DELETE RESTRICT ON UPDATE CASCADE;
