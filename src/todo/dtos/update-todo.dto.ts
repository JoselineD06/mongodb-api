import { TodoStatus } from "../schemas/todo.schemas";

import { IsNotEmpty, IsString, IsEnum, IsOptional } from "class-validator";

export class UpdateTodoDto {
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsEnum(TodoStatus)
    @IsOptional()
    status?: TodoStatus;
}