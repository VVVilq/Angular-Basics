export interface Task {
    id: number;
    order:number;
    state:number;
  
    name: string;
    description: string;
    type: string;
    tags: Array<String>;
    category: string;
    createdDate: string;
    createdBy: string;
    modifiedDate: string;
    modifiedBy: string;
  
    deadlineStart: Date;
    deadlineEnd: Date;
    priority: string;
    expectedTime: number;
    resources: string;
  }
  