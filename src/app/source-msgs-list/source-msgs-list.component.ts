import { Translation } from './../models/translation';
import { Project } from './../models/project';
import { Source, Msg } from './../models/source';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-source-msgs-list',
  templateUrl: './source-msgs-list.component.html',
  styleUrls: ['./source-msgs-list.component.css']
})
export class SourceMsgsListComponent implements OnInit {

  @Input() source: Source;
  @Input() translation: Translation;
  @Input() untranslatedOnly: boolean;
  @Input() projectId: number;

  constructor() { }

  ngOnInit() {
  }

  public getTranslation(id: string): string {
    if (this.translation === null) {
      return '';
    }
    const list = this.translation.msgs
      .filter((m: Msg) => m.id === id);
    if (list.length > 0) {
      return list[0].content;
    } else {
      return '';
    }
  }

}
