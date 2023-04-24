import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-prop',
  templateUrl: './img-prop.component.html',
  styleUrls: ['./img-prop.component.css'],
})
export class ImgPropComponent implements OnInit {
  @Input() src: string | undefined;
  @Input() alt: string | undefined;
  @Input() desc: string | undefined;
  @Input() price: string | undefined;

  ngOnInit(): void {}
}
