import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateJatekokDto {
    @IsString()
    @IsNotEmpty()
    megnevezes: string

    @IsString()
    @IsNotEmpty()
    anyag: string

    @IsInt()
    @IsNotEmpty()
    suly: number
}
