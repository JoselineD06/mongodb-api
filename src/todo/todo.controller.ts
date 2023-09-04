import { 
  Controller, 
  Post, 
  Body, 
  ValidationPipe , 
  Put, 
  Get, 
  Delete,
  Param
 } from '@nestjs/common';

import { TodoService } from './todo.service';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { UpdateTodoDto } from './dtos/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor( private todoService: TodoService ) {}

  @Post()
  async create(@Body(new ValidationPipe()) createTodo: CreateTodoDto) {
    return this.todoService.crete(createTodo); 
  }

  @Put(':id')
  async update(
   @Param('id') id: string,
   @Body(new ValidationPipe()) updateTodo: CreateTodoDto
   ) {
    return this.todoService.update(id, updateTodo);
    }
 
@Get()
  async findAll() {
    return this.todoService.findAll();
  }

@Get(':id')
  async findAllOne(@Param('id') id: string) {
    return this.todoService.findAllOne(id);
  }

@Delete(':id')
  async delete(@Param('id') id: string){
    return this.todoService.delete(id);
  }
}

