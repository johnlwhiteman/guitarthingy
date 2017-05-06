"use strict";

class GuitarNote {

    constructor(string, fret, num, name) {
        this.string = string;
        this.fret = fret;
        this.num = num;
        this.name = name;
    }

    showLog() {
        console.log(this.string + " " + this.fret + " " + 
                    this.note + " " + this.note);
    }
}

class GuitarString {

    constructor(num) {
        this.num = num;
        this.notes = [];
        this.noteNames = "(" + this.num + ")";
    }

    addNote(note) {
        this.notes.push(note);
        this.noteNames += " " + note.name;
        this.noteNames.trim();
    }

    showNoteNames() {
        console.log(this.noteNames);
    }
}

class Guitar {

    constructor(notes, stringCnt, fretCnt, tuning) {
        this.notes = notes;
        this.stringCnt = stringCnt;
        this.fretCnt = fretCnt;
        this.tuning = tuning;
        this.strings = null;
        this.notesCnt =  Math.trunc(Object.keys(this.notes).length * .5); 
    }

    build() {
        this.strings = []
        for (var stringNum = 1; stringNum <= this.stringCnt; stringNum++) {
            let guitarString = new GuitarString(stringNum);
            var noteOffset = this.notes[this.tuning[stringNum-1]];
            for (var fretNum = 0; fretNum < this.fretCnt; fretNum++, noteOffset++) {
                var noteNum = (noteOffset) % this.notesCnt;
                var noteName = this.notes[noteNum];
                guitarString.addNote(new GuitarNote(stringNum, fretNum, noteNum, noteName));
            }
            this.addString(guitarString);
        }
    }

    addString(string) {
        this.strings.push(string);
    }

    showStrings() {
        for (var i = 0; i < this.strings.length; i++) {
            this.strings[i].showNoteNames();
        }
    }
}

var notes = {"A":0, 0:"A",
               "A#/Bb":1, 1:"A#/Bb",
               "B":2, 2:"B",
               "C":3, 3:"C",
               "C#/Db":4, 4:"C#/Db",
               "D":5, 5:"D",
               "D#/Eb":6, 6:"D#/Eb",
               "E":7, 7:"E",
               "F":8, 8:"F",
               "F#/Gb":9, 9:"F#/Gb",
               "G":10, 10:"G",
               "G#/Ab":11, 11:"G#/Ab"};                                                      
var fretCnt = 22;
var stringCnt = 6;
var tuning = ["E", "B", "G", "D", "A", "E"]; 
let guitar = new Guitar(notes, stringCnt, fretCnt, tuning);
guitar.build();
guitar.showStrings();