import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IBlock } from 'src/libs/services/mindmap/mindmap.model';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent implements OnInit {
  @Input() block!: IBlock;
  @Output() modalClosed = new EventEmitter();
  form!: FormGroup;
  title!: string;
  showBlock: boolean = false;
  modalOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.showBlock = true;
  }
  handleToggle(event: any) {
    const root = event.target.closest('.block-content');
    const nextRoot = root.nextElementSibling;

    if (nextRoot) {
      nextRoot.classList.toggle('hidden');

      // Ẩn tất cả các cấp con của nextRoot
      const childElements = nextRoot.querySelectorAll('.block-content');
      for (const childElement of childElements) {
        childElement.classList.add('hidden');
      }
    }

    // Ẩn tất cả các cấp con và cháu của root
    const childElements = root.querySelectorAll('.block-content');
    for (const childElement of childElements) {
      if (childElement !== nextRoot) {
        childElement.classList.add('hidden');
      }
    }

    // Hiển thị/ẩn block-content::before element
    root.querySelector('.block-content-before').classList.toggle('hidden');
  }
  handleCreate(event: any) {
    // console.log('dsfsd');
    // this.submitModal();
    // this.openModal();
    // this.closeModal();
  }
  // submitModal() {
  //   console.log(this.block.title, this.block.status, this.block.type);
  //   this.closeModal();
  // }
  // openModal() {
  //   this.modalOpen = true;
  // }

  // closeModal() {
  //   this.modalOpen = false;
  // }
}
