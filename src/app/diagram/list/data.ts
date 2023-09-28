export let mindMapData: Object[] = [
  {
    title: 'Parent 1',
    status: 'New',
    children: [
      {
        title: 'Child 1.1',
        status: 'Done',
        children: [
          {
            title: 'Grandchild 1.1.1',
            status: 'Doing',
            children: [],
          },
          {
            title: 'Grandchild 1.1.2',
            status: 'Doing',
            children: [],
          },
        ],
      },
      {
        title: 'Child 1.2',
        status: 'Inactive',
        children: [],
      },
    ],
  },
  {
    title: 'Parent 2',
    status: 'New',
    children: [
      {
        title: 'Child 2.1',
        status: 'New',
        children: [],
      },
      {
        title: 'Child 2.2',
        status: 'New',
        children: [],
      },
    ],
  },
  {
    title: 'Parent 3',
    status: 'New',
    children: [
      {
        title: 'Child 3.1',
        status: 'New',
        children: [
          {
            title: 'Child 3.1',
            status: 'New',
            children: [],
          },
        ],
      },
      {
        title: 'Child 3.2',
        status: 'New',
        children: [],
      },
    ],
  },
];
