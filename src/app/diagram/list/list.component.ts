import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { mindMapData } from '../list/data';
interface Node {
  title: string;
  status: string;
  children: Node[];
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  form!: FormGroup;
  title!: string;
  showBlock: boolean = false;
  mindMapData: Node[] = [];
  divCount = 0;
  listBlock: IBlock;
  isBlockTreeVisible: boolean = true;

  constructor(private formBuilder: FormBuilder) {
    this.listBlock = {
      title: '1',
      type: '1',
      status: '1',
      listBlocks: [
        {
          title: '11',
          type: '11',
          status: '11',
          // listBlocks: [
          //   {
          //     title: '111',
          //     type: '111',
          //     status: '111',
          //     listBlocks: [
          //       {
          //         title: '1111',
          //         type: '1111',
          //         status: '1111',
          //         listBlocks: [
          //           {
          //             title: '11116',
          //             type: '11116',
          //             status: '11116',
          //           },
          //           {
          //             title: '1112',
          //             type: '1112',
          //             status: '1112',
          //           },
          //         ],
          //       },
          //       {
          //         title: '1112',
          //         type: '1112',
          //         status: '1112',
          //         listBlocks: [
          //           {
          //             title: '1111',
          //             type: '1111',
          //             status: '1111',
          //           },
          //           {
          //             title: '1112',
          //             type: '1112',
          //             status: '1112',
          //           },
          //         ],
          //       },
          //     ],
          //   },
          //   {
          //     title: '112',
          //     type: '112',
          //     status: '112',
          //     listBlocks: [
          //       {
          //         title: '1111',
          //         type: '1111',
          //         status: '1111',
          //         listBlocks: [
          //           {
          //             title: '1111',
          //             type: '1111',
          //             status: '1111',
          //           },
          //           {
          //             title: '1112',
          //             type: '1112',
          //             status: '1112',
          //           },
          //         ],
          //       },
          //       {
          //         title: '1112',
          //         type: '1112',
          //         status: '1112',
          //         listBlocks: [
          //           {
          //             title: '1111',
          //             type: '1111',
          //             status: '1111',
          //           },
          //           {
          //             title: '1112',
          //             type: '1112',
          //             status: '1112',
          //           },
          //           {
          //             title: '11118',
          //             type: '11118',
          //             status: '11118',
          //           },
          //         ],
          //       },
          //     ],
          //   },
          // ],
        },

        { title: '12', type: '12', status: '12' },
        { title: '13', type: '13', status: '13' },
      ],
    };
  }
  @ViewChild('createForm') createForm: ElementRef | undefined;
  ngOnInit() {
    // this.mindMapData = mindMapData.map((item: any) => {
    //   return {
    //     title: item.title,
    //     status: item.status,
    //     children: item.children,
    //   };
    // });
    // this.form = this.formBuilder.group({
    //   title: ['', Validators.required],
    //   status: ['', Validators.required],
    //   agreement: ['', Validators.requiredTrue],
    // });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.showBlock = true;
    if (this.divCount < 20) {
      this.divCount++;
    }
  }

  handleToggle(event: any) {
    console.log('áds');
    this.isBlockTreeVisible = !this.isBlockTreeVisible;
  }
}

interface IBlock {
  title: string;
  type: string;
  status: string;
  listBlocks?: IBlock[];
}
