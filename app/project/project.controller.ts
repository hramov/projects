import { Controller, Get, Res } from "@nestjs/common";
import { Response } from "express";

@Controller('/project')
export class ProjectController {

  @Get('/')
  find(@Res() res: Response) {
    const page_data = {
      page_title: 'Проекты',
      app_title: 'Проекты ГВЦ'
    }
    return res.render('project/index', { layout: 'layout/base', data: page_data });
  }
}