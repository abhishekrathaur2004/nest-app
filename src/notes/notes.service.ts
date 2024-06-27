import { Body, Injectable, Param } from "@nestjs/common";
import { Note } from "./data/notes.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class NoteService{
    public notes : Note[] = [];

    //add note
    addNoteService(@Body() note : Note) : string{
        note.id = uuidv4();
        this.notes.push(note);
        return `Note has been added successfully . ID : ${note.id}`
    }

    // delete Note
    deleteNoteService(noteId: string): string {
        const index = this.notes.findIndex((currentNote) => {
            return currentNote.id === noteId;
        });
        if (index === -1) {
            return `Note not found`;
        }
        this.notes.splice(index, 1);
        return `Note has been deleted successfully`;
    }
    // getAllNotes
    getNotesService(): Note[]{
        console.log(this.notes);
        return this.notes;
    }
    updateNoteService(note : Note):string {
        console.log('req received');
        const index = this.notes.findIndex((currentNote) => {
            return currentNote.id === note.id;
        });
        if(index == -1){
            return `Note not found`;
        }
        this.notes[index] = note;
        return `${note.id} has been updated successfully `
    }

}