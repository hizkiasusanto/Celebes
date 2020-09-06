import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {AnchorDirective} from "../../directives/anchor.directive";
import {TileContent} from "../../types/tile-content";

@Component({
  selector: 'app-grid-tile-content',
  templateUrl: './grid-tile-content.component.html',
  styleUrls: ['./grid-tile-content.component.scss']
})
export class GridTileContentComponent implements OnInit {
  @Input() tileContent: TileContent;
  @ViewChild(AnchorDirective, {static: true}) anchor: AnchorDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.tileContent.component);
    this.anchor.viewContainerRef.clear()
    this.anchor.viewContainerRef.createComponent(componentFactory);
  }

}
