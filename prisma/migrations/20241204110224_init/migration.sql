-- CreateTable
CREATE TABLE `Jatekok` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `megnevezes` VARCHAR(191) NOT NULL,
    `anyag` VARCHAR(191) NOT NULL,
    `suly` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gyerekek` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nev` VARCHAR(191) NOT NULL,
    `cim` VARCHAR(191) NOT NULL,
    `jovolte` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_GyerekekToJatekok` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_GyerekekToJatekok_AB_unique`(`A`, `B`),
    INDEX `_GyerekekToJatekok_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_GyerekekToJatekok` ADD CONSTRAINT `_GyerekekToJatekok_A_fkey` FOREIGN KEY (`A`) REFERENCES `Gyerekek`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GyerekekToJatekok` ADD CONSTRAINT `_GyerekekToJatekok_B_fkey` FOREIGN KEY (`B`) REFERENCES `Jatekok`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
