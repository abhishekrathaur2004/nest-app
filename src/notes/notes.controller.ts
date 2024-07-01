import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, ValidationPipe } from "@nestjs/common";
import { NoteService } from "./notes.service";
import { Note } from "./data/notes.dto";

// imported custom pipe one:way
// import { NotePipe } from "./data/pipes/NotePipe.pipe";

// imported 2nd way
// import { NotePipe } from "./data/pipes/NotePipe2.pipe";
// import { CreateNoteDto } from "./data/Notes2.dto";

// lets do by 3rd way using ValidationPipe
// this is the simplest form of validation using done through pipe
// imported above 

@Controller('note')
export class NoteController{
    constructor(private readonly noteService : NoteService){};

    @Get('/')
    getAllNotes(){
        return this.noteService.getNotesService();
    }

    // writing custom pipe
    // new ValidationPipe will work accordingly with noteDTO
    @Post('/')
    addNotes(@Body() note:Note){
        return this.noteService.addNoteService(note);
    }

    // lets see the concecpt of pipes in nest js
    // dummy one
    // @Delete('/:id')
    // deleteNote(@Param("id", ParseIntPipe) noteteId : string){
    //     return `Deleted request received.`
    // }
    // throwing error when sending id as characters in place of integers

    // realone
    @Delete('/:id')
    deleteNote(@Param("id", ParseIntPipe) noteteId : string){
        return this.noteService.deleteNoteService(noteteId);
    }
    @Put('/')
    updateNote(@Body() note : Note){
        return this.noteService.updateNoteService(note);
    }

}