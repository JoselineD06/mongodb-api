import { TodoStatus } from "../schemas/todo.schemas";

import { IsNotEmpty, IsString, IsEnum, IsOptional } from "class-validator";

export class CreateTodoDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsEnum(TodoStatus)
    @IsOptional()
    status?: TodoStatus;
}