import {
  Controller,
  Get,
  Post,
  Patch,
  Query,
  Delete,
  Body,
  Param,
  Headers,
} from '@nestjs/common';
import {
  ApiResponse,
  ApiTags,
  ApiQuery,
  ApiBearerAuth,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { HelloService } from './hello.service';
import { Hello, UserRole } from './classes/hello';

@ApiBearerAuth()
@ApiTags('hello')
@Controller('/hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  // 查询
  @Get()
  @ApiQuery({ name: 'id', required: false })
  // @ApiQuery({ name: 'role', enum: UserRole })
  @ApiResponse({
    status: 200,
    description: 'ok',
    type: Hello,
  })
  fetch(@Query() { id }, @Headers('token') token): string {
    return this.helloService.fetch(id);
  }

  // 创建
  @Post()
  save(@Body() { message }): string {
    return this.helloService.save(message);
  }

  // 更新
  @Patch(':id')
  update(@Param() { id }, @Body() { message }): string {
    return this.helloService.update(id, message);
  }

  // 删除
  @Delete()
  remove(@Query() { id }): string {
    return this.helloService.remove(id);
  }
}
