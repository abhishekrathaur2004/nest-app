import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { NoteService } from "./notes.service";
import { Note } from "./data/notes.dto";

@Controller('note')
export class NoteController{
    constructor(private readonly noteService : NoteService){};

    @Get('/')
    getAllNotes(){
        return this.noteService.getNotesService();
    }

    @Post('/')
    addNotes(@Body() note: Note){
        return this.noteService.addNoteService(note);
    }

    @Delete('/:id')
    deleteNote(@Param("id") noteteId : string){
        return this.noteService.deleteNoteService(noteteId);
    }
    @Put('/')
    updateNote(@Body() note : Note){
        return this.noteService.updateNoteService(note);
    }

}