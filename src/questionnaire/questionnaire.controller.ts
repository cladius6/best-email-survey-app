import { Controller, Get, Param } from '@nestjs/common';

@Controller('api/questionnaire')
export class QuestionnaireController {
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} questionnaire`;
  }
}
