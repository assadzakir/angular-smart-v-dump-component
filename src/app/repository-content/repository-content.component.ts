import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-repository-content',
  templateUrl: './repository-content.component.html',
  styleUrls: ['./repository-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryContentComponent implements OnInit {

  @Input() repository: any;
  constructor() { }

  ngOnInit() {
  }

}
