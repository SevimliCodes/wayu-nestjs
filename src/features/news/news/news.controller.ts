import {Body, Controller, Post, UploadedFile, UploadedFiles, UseInterceptors} from "@nestjs/common";
import {CreateNewsCommand} from "@/features/news/news/admin/create-news.command";
import {CommandBus, QueryBus} from "@nestjs/cqrs";
import {ApiConsumes} from "@nestjs/swagger";
import {FileInterceptor} from "@nestjs/platform-express";
import {CreateNewsRequest} from "@/features/news/news/admin/create-news.request";
import * as fs from "node:fs";
import {storageOptions} from "@/configs/multer.config";

@Controller('admin/news')
export class CreateNewsController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {
    }

    @Post()
    @ApiConsumes("multipart/form-data")
    @UseInterceptors(FileInterceptor("image", {storage: storageOptions, limits: {fileSize: 1024 * 1024 * 5}}))
    async createNews(@Body() payload: CreateNewsRequest, @UploadedFile() image: Express.Multer.File) {
        let cmd = new CreateNewsCommand(payload.categoryId, payload.title, image);
        try {
            return await this.commandBus.execute(cmd);
        } catch (exc) {
            if (fs.existsSync(image.path))
                fs.rmSync(image.path);
            throw exc;
        }
    }
}